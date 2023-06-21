"use client"

import React from "react"
import style from "./styles/table.module.css"
import ChartTsx from "../chart/chart"
import { useState,useEffect } from "react"
import { axiosPostAny } from "@/app/services"
import moment from "moment"


export interface Tr {
    name: string
    docket: string
    lastname: string
    total_horas:string,
    horas_diurnas:string,
    horas_nocturnas:string,
    quincena_1:number,
    quincena_2:number

}

export interface ListObjects {
    title: string
    titlelist: string[]
    // items: { 
    //     name: string, 
    //     docket: string, 
    //     lastname: string,
    //     total_horas:string,
    //     horas_diurnas:string,
    //     horas_nocturnas:string,
    //     quincena_1:number,
    //     quincena_2:number
    //  }[],

    
}


const TR: React.FC<Tr> = ({ name, lastname, docket, total_horas,horas_diurnas,horas_nocturnas,quincena_1,quincena_2}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{lastname}</td>
            <td>{docket}</td>
            <td>{total_horas}</td>
            <td>{horas_diurnas}</td>
            <td>{horas_nocturnas}</td>
            <td>{quincena_1}</td>
            <td>{quincena_2}</td>
            <td></td>
        </tr>
    )
}

const List: React.FC<ListObjects>=({title, titlelist}) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [data, setData] = useState<any[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const comienzo = moment().startOf("month").format("YYYY-MM-DD");
        const fin = moment().endOf("month").format("YYYY-MM-DD");
        console.log([comienzo, fin]);
        let responseData;
        if (!selectedValue) {
          responseData = await axiosPostAny(`dias-area/produccion`, [comienzo, fin]);
        } else {
          responseData = await axiosPostAny(`dias-area/${selectedValue}`, [comienzo, fin]);
        }
        const info = responseData.data.data;
        const myarray2: any[] = [];
        info.forEach((obj: any) => {
          let sumadorD: number = 0;
          let sumadorN: number = 0;
          let total: number = 0;
          obj.jornada.forEach((obj: any) => {
            let entrada = obj.entrada;
            if (obj.entrada == null) {
              // ...
            } else {
              entrada = new Date(entrada);
              if (entrada.getHours() === 6 || entrada.getHours() === 5) {
                if (obj.salida != null) sumadorD += 8;
              }
              if (entrada.getHours() === 14 || entrada.getHours() === 13) {
                if (obj.salida != null) sumadorD += 7, sumadorN += 1;
              }
              if (entrada.getHours() === 22 || entrada.getHours() === 21) {
                if (obj.salida != null) sumadorN += 8;
              }
            }
          });
          total = sumadorD + sumadorN;
          myarray2.push({
            name: obj.nombre,
            lastname: obj.apellido,
            docket: obj.legajo,
            total_horas: total,
            horas_diurnas: sumadorD,
            horas_nocturnas: sumadorN
          });
        });
        setData(myarray2);
      };
  
      fetchData();
    }, [selectedValue]);
  
    const handleSelectChange = (event: any) => {
      setSelectedValue(event.target.value);
    };

    return (
      <div className={style.details}>
          <div className={style.recentOrders}>
              <div className={style.cardHeader}>
                    <h2>{title}</h2>
                    <select value={selectedValue} onChange={handleSelectChange}>
                        <option value="produccion">Produccion</option>
                        <option value="tecnico">Tecnico</option>
                        <option value="matriceria">Matriceria</option>
                        <option value="mantenimiento">Mantenimiento</option>
                        <option value="calidad">Calidad</option>
                        <option value="deposito">Deposito</option>
            </select>
              </div>
  
              <table>
                  <thead>
                      <tr>
                          {titlelist.map((item, index) => (
                          <td key={index}>{item}</td>
                      ))}
                      </tr>
                  </thead>
  
                  <tbody>
                      {data.map((item:any, index:any) => (
                          

                          <TR
                              key={index}
                              name={item.name}
                              lastname={item.lastname}
                              docket={item.docket}
                              total_horas={item.total_horas}
                              horas_diurnas={item.horas_diurnas}
                              horas_nocturnas={item.horas_nocturnas}
                              quincena_1={0}
                              quincena_2={0}
                             
                          />
                      ))}
                  </tbody>
              </table>
          </div>
      </div>
    )
  }
  export default List