"use client"
import { axiosGet } from "@/app/services";
import List from "../components/List/List"
import { EmpProp } from "../types";
import { useEffect, useState } from "react";
import { TbUserOff, TbUserX, TbUserCheck, TbUserPlus, TbUser } from 'react-icons/tb'
import moment from "moment";
import Card from "../components/card/Card";

const Produccion = () => {
  const [employees, setEmployees] = useState([])
  let myarray: any[] = [];
  let status = "";
  let ausents = 0;
  let late = 0;
  let puntual = 0;
  let extras = 0;

  const getEmpGroup = async () => {
    try {
      const res = await axiosGet("area/produccion")
      setEmployees(res.data.data)
    }
    catch (err) {
      console.log("No se pudieron obtener los datos de los empleados!")
    }
  }

  const titleList = ["Nombre", "Apellido", "Legajo", "Entrada", "Estado"]

  employees
    .filter((emp: EmpProp) => emp.jornada[0].entrada == null) // Filtrar los empleados con entrada no nula
    .map((emp: EmpProp) => {
      const entradaDate = moment.utc(emp.jornada[0].entrada, "YYYY-MM-DD HH:mm:ss").local().toDate();
      const hoursMinutes = `${entradaDate.getHours()}:${entradaDate.getMinutes()}`
      if (
        (entradaDate.getHours() === 5 || entradaDate?.getHours() === 6) &&
        entradaDate.getMinutes() <= 5
      ) {
        status = "ok"
        puntual = puntual + 1
      }
      if (
        entradaDate?.getHours() >= 6 &&
        entradaDate.getMinutes() >= 5
      ) {
        late = late + 1
      }
      if (
        (entradaDate?.getHours() === 13 || entradaDate?.getHours() === 14) &&
        entradaDate.getMinutes() <= 5
      ) {
        status = "ok"
        puntual = puntual + 1
      }
      if (
        entradaDate?.getHours() >= 14 &&
        entradaDate.getMinutes() >= 5
      ) {
        late = late + 1
      }
      if (
        (entradaDate?.getHours() === 21 || entradaDate?.getHours() === 22) &&
        entradaDate.getMinutes() <= 5
      ) {
        status = "ok"
        puntual = puntual + 1
      }
      if (
        entradaDate?.getHours() >= 22 &&
        entradaDate.getMinutes() >= 5
      ) {
        late = late + 1
      }
      myarray.push({ name: emp.nombre, lastname: emp.apellido, docket: emp.legajo, hours: hoursMinutes, status: status });
      return myarray;
    });
  
  const cardList = [
    { icon: <TbUserOff size={55} />, numbers: ausents, text: "Empleados ausentes", link: "" },
    { icon: <TbUser size={55} />, numbers: length - ausents, text: "Empleados presentes", link: "" },
    { icon: <TbUserX size={55} />, numbers: late, text: "Llegadas tardes", link: "" },
    { icon: <TbUserCheck size={55} />, numbers: puntual, text: "Llegadas puntuales", link: "" },
    { icon: <TbUserPlus size={55} />, numbers: extras, text: "Horas extra", link: "" },
  ]
  
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
export default Produccion