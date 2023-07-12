"use client"
import { ListObjects, Tr2 } from "@/app/types"
import React, { useState,useEffect } from "react"
import style from '../../style/list.module.css'
import moment from "moment"
import { axiosGet } from "@/app/services"
import { EmpProp } from "../../../types"

const TR2: React.FC<Tr2> = ({ name, lastname, docket, entrance, entrance_rest, exit_rest, exit, turn, status }) => {
  const entranceRestTime = moment.duration(entrance_rest);
  const exitRestTime = moment.duration(exit_rest);
  const difference = exitRestTime.subtract(entranceRestTime);

  let cellClass = style.normalCell; // Clase CSS por defecto (sin color)

  if (difference <= moment.duration(30, 'minutes')) {
    cellClass = style.greenCell; // Clase CSS para color verde
  } else {
    cellClass = style.redCell; // Clase CSS para color rojo
  }  
  return (
        <tr>
            <td>{name}</td>
            <td>{lastname}</td>
            <td>{docket}</td>
            <td>{entrance}</td>
            <td className={cellClass}>{entrance_rest}</td>
            <td className={cellClass}>{exit_rest}</td>
            <td>{exit}</td>
            <td>{turn}</td>
            <td>
                {status=="presente" ? <span className={style.statusdelivered}>Puntual</span> :
                status=="tarde" ? <span className={style.statuspending}>Tarde</span> :
                <span className={style.statusreturn}>Ausente</span>}
            </td>
        </tr>
    )
}

const List: React.FC<ListObjects> = ({ title, titlelist }) => {
  const [selectedValue, setSelectedValue] = useState('a');
  const [data, setData] = useState<any[]>([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmpGroup = async (): Promise<any> => {
      try {
        const res = await axiosGet(`area?grupo=${selectedValue}&area=produccion`);
        setEmployees(res.data.data);
      } catch (err) {
        console.log("No se pudieron obtener los datos de los empleados!");
      }
    };
    getEmpGroup();
  }, [selectedValue]);

  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  
  return (
    <div className={style.recentOrders}>
      <div className={style.cardHeader}>
        <h2>{title}</h2>
        <select
          value={selectedValue}
          onChange={e => setSelectedValue(e.target.value)}
        >
          <option value="a">Grupo A</option>
          <option value="b">Grupo B</option>
          <option value="c">Grupo C</option>
        </select>
      </div>
      <div className={style.divMedium}>
        <table className={style.table}>
          <thead>
            <tr>
              {titlelist.map((item: string, index: number) => (
                <td key={index}>{item}</td>
              ))}
            </tr>
          </thead>

          <tbody>
            {
            
            employees
              .map((emp: EmpProp, index: number) => {
                
                const entranceDate = moment
                  .utc(emp.jornada[0].entrada, "YYYY-MM-DD HH:mm:ss")
                  .local()
                  .toDate();
                const exitDate = moment
                  .utc(emp.jornada[0].salida, "YYYY-MM-DD HH:mm:ss")
                  .local()
                  .toDate();
                const entranceTime = `${entranceDate.getHours()}:${entranceDate.getMinutes()}:${entranceDate.getSeconds()}`;
                const exitTime = `${exitDate.getHours()}:${exitDate.getMinutes()}:${exitDate.getSeconds()}`;

                const entranceRestDate = moment
                .utc(emp.jornada[0].entrada_descanso, "YYYY-MM-DD HH:mm:ss")
                .local()
                .toDate();
              const exitRestDate = moment
                .utc(emp.jornada[0].salida_descanso, "YYYY-MM-DD HH:mm:ss")
                .local()
                .toDate()
                
              const entranceRestTime = `${entranceRestDate.getHours()}:${entranceRestDate.getMinutes()}:${entranceRestDate.getSeconds()}`;
              const exitRestTime = `${exitRestDate.getHours()}:${exitRestDate.getMinutes()}:${exitRestDate.getSeconds()}`;
              const turno=emp.jornada[0].turno

                let status:string="";
                let puntual = 0;
                let late = 0;
                if(turno=="mañana"&&entranceDate.getHours()==5||(entranceDate.getHours()==6&&entranceDate.getMinutes()<=5))status="presente";
                if(turno=="tarde"&&entranceDate.getHours()==13||(entranceDate.getHours()==14&&entranceDate.getMinutes()<=5))status="presente";
                if(turno=="mañana"&&entranceDate.getHours()==21||(entranceDate.getHours()==22&&entranceDate.getMinutes()<=5))status="presente";else if(entranceDate)status=="tarde"; 
                return (
                  <TR2
                    key={index}
                    name={emp.nombre}
                    lastname={emp.apellido}
                    docket={emp.legajo}
                    status={status}
                    entrance={entranceTime == "NaN:NaN:NaN" ? "--:--:--" : entranceTime}
                    entrance_rest={entranceRestTime== "NaN:NaN:NaN" ? "--:--:--" :entranceRestTime}
                    exit_rest={exitRestTime== "NaN:NaN:NaN" ? "--:--:--" :exitRestTime}
                    exit={exitTime == "NaN:NaN:NaN" ? "--:--:--" : exitTime}
                    turn={turno}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;