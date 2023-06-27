"use client"
import { axiosGet } from "@/app/services";
import List from "../components/List/List"
import { EmpProp } from "../types";
import { useEffect, useState } from "react";
import { TbUserOff, TbUserX, TbUserCheck, TbUserPlus, TbUser } from 'react-icons/tb'
import moment from "moment";
import Card from "../components/card/Card";

const Matriceria = () => {
  const [employees, setEmployees] = useState([])
  let myarray: any[] = [];
  let status = "";
  let ausents = 0;
  let late = 0;
  let puntual = 0;
  let extras = 0;

  const getEmpGroup = async () => {
    try {
      const res = await axiosGet("area/matriceria")
      setEmployees(res.data.data)
    }
    catch (err) {
      console.log("No se pudieron obtener los datos de los empleados!")
    }
  }

  employees
    .filter((emp: EmpProp) => emp.jornada[0].entrada == null) // Filtrar los empleados con entrada no nula
    .map((emp: EmpProp) => {
      const entranceDate = moment.utc(emp.jornada[0].entrada, "YYYY-MM-DD HH:mm:ss").local().toDate();
      const exitDate = moment.utc(emp.jornada[0].salida, "YYYY-MM-DD HH:mm:ss").local().toDate();
      const entranceTime = `${entranceDate.getHours()}:${entranceDate.getMinutes()}:${entranceDate.getSeconds()}`
      const exitTime = `${exitDate.getHours()}:${exitDate.getMinutes()}:${exitDate.getSeconds()}`
      if (
        (entranceDate.getHours() === 5 || entranceDate?.getHours() === 6) &&
        entranceDate.getMinutes() <= 5
      ) {
        status = "ok"
        puntual = puntual + 1
      }
      if (
        entranceDate?.getHours() >= 6 &&
        entranceDate.getMinutes() >= 5
      ) {
        late = late + 1
      }
      if (
        (entranceDate?.getHours() === 13 || entranceDate?.getHours() === 14) &&
        entranceDate.getMinutes() <= 5
      ) {
        status = "ok"
        puntual = puntual + 1
      }
      if (
        entranceDate?.getHours() >= 14 &&
        entranceDate.getMinutes() >= 5
      ) {
        late = late + 1
      }
      if (
        (entranceDate?.getHours() === 21 || entranceDate?.getHours() === 22) &&
        entranceDate.getMinutes() <= 5
      ) {
        status = "ok"
        puntual = puntual + 1
      }
      if (
        entranceDate?.getHours() >= 22 &&
        entranceDate.getMinutes() >= 5
      ) {
        late = late + 1
      }
      myarray.push({
        name: emp.nombre,
        lastname: emp.apellido,
        docket: emp.legajo,
        entrance: (entranceTime == "NaN:NaN:NaN") ? "--:--:--" : entranceTime,
        exit: (exitTime == "NaN:NaN:NaN") ? "--:--:--" : exitTime,
        status: status
      });
      return myarray;
    });
  
  const cardList = [
    { icon: <TbUserOff size={55} />, numbers: ausents, text: "Empleados ausentes", link: "" },
    { icon: <TbUser size={55} />, numbers: length - ausents, text: "Empleados presentes", link: "" },
    { icon: <TbUserX size={55} />, numbers: late, text: "Llegadas tardes", link: "" },
    { icon: <TbUserCheck size={55} />, numbers: puntual, text: "Llegadas puntuales", link: "" },
    { icon: <TbUserPlus size={55} />, numbers: extras, text: "Horas extra", link: "" },
  ]

  const titleList = ["Nombre", "Apellido", "Legajo", "Entrada", "Salida", "Estado"]
  
  useEffect(() => {
    getEmpGroup()
  }, [])
  
  return (
    <>
    <Card items={cardList} />
    <div className="details">
      <List
          title='Fichadas'
          titlelist={titleList}
          items={myarray}
      />
    </div>
    </>
    )
}
export default Matriceria