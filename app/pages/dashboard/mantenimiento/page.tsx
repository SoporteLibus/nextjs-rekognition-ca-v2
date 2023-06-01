"use client"
import { axiosGet } from "@/app/services";
import List from "../components/List/List"
import { EmpProp } from "../types";
import { useEffect, useState } from "react";
import moment from "moment";

const Mantenimiento = () => {
  const [employees, setEmployees] = useState([])
  let myarray: any[] = [];
  let status = "";
  let myarraypres: any[] = [];
  let statuspres = "";
  let foto = "";
  let ausents = 0;
  let late = 0;
  let puntual = 0;
  let extras = 0;

  const hoursData = async () => {
    try {
      const res = await axiosGet('vivo/')
      setEmployees(res.data.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  const titleList = ["Nombre", "Apellido", "Legajo", "Estado"]

  const Emp = employees
    .filter((emp: EmpProp) => emp.jornada[0].entrada !== null) // Filtrar los empleados con entrada no nula
    .map((emp: EmpProp) => {
      const entradaDate = moment.utc(emp.jornada[0].entrada, "YYYY-MM-DD HH:mm:ss").local().toDate();
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
      myarray.push({ name: emp.nombre, lastname: emp.apellido, docket: emp.legajo, status: status });
      return myarray;
    });
  
  const Extras = employees
    .filter((emp: EmpProp) => emp.jornada[0].habilitado_horas_extra == true) // Filtrar los empleados con entrada no nula
    .map((emp: EmpProp) => {
      extras = extras + 1
    });

  const Pres = employees
    .map((emp: EmpProp) => {
      if (emp.jornada[0].entrada == null) {
        ausents = ausents + 1
        statuspres = "ausente"
      } else {
        statuspres = "present"
      }
      if (emp.foto !== "") {
        foto = `${emp.foto}`
      } else {
        foto = "/logo2.png"
      }
    myarraypres.push({ image: foto, name: emp.nombre, lastname: emp.apellido, status: statuspres });
    return myarraypres;
    });
  
  useEffect(() => {
    hoursData()
  }, [])
  return (
    <div className="details">
      <List
          title='Fichadas'
          titlelist={titleList}
          items={myarray}
      />
    </div>
  )
}
export default Mantenimiento