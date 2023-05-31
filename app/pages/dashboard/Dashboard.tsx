import { List } from "@/app/components";
import Card from "@/app/pages/dashboard/components/card/Card";
import { AiOutlineEye } from 'react-icons/ai'
import { TbUserOff, TbUserX, TbUserCheck, TbUserExclamation, TbUserPlus } from 'react-icons/tb'
import moment from "moment";
import { axiosGet } from "@/app/services";
import { useEffect, useState } from "react";
import axios from "axios";

const titleList = ["Nombre", "Apellido", "Legajo", "Estado"]

interface EmpProp {
  foto: string
  nombre: string;
  apellido: string;
  legajo: string;
  _id: string;
  jornada: Jornada[]
  length: string
}

interface Jornada {
  descanso: true
  entrada: null | Date | string
  entrada_descanso: null | Date | string
  entrada_horas_extra: null | Date | string
  fecha: string
  feriado: boolean
  habilitado_horas_extra: boolean
  horas_diurnas: number
  horas_diurnas_50: number
  horas_diurnas_100: number
  horas_nocturnas: number
  horas_nocturnas_50: number
  horas_nocturnas_100: number
  licencia: string
  observaciones: string
  salida: null | Date | string
  salida_descanso: null | Date | string
  salida_horas_extra: null | Date | string
  suspendido: boolean
  _id: string
}

const Dashboard = () => {
  const [employees, setEmployees] = useState([])
  const { length } = employees
  let myarray: any[] = [];
  let Status = "";
  let myarraypres: any[] = [];
  let Statuspres = "";
  let foto = ""

  const hoursData = async () => {
    try {
      const res = await axiosGet('vivo/')
      setEmployees(res.data.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  const Emp = employees
    .filter((emp: EmpProp) => emp.jornada[0].entrada !== null) // Filtrar los empleados con entrada no nula
    .map((emp: EmpProp) => {
      const entradaDate = moment.utc(emp.jornada[0].entrada, "YYYY-MM-DD HH:mm:ss").local().toDate();
      console.log((entradaDate.getHours()))
      if (
        (entradaDate.getHours() === 5 || entradaDate?.getHours() === 6) &&
        entradaDate.getMinutes() <= 5
      ) {
        Status = "ok";
      }
      if (
        (entradaDate?.getHours() === 13 || entradaDate?.getHours() === 14) &&
        entradaDate.getMinutes() <= 5
      ) {
        Status = "ok";
      }
      if (
        (entradaDate?.getHours() === 21 || entradaDate?.getHours() === 22) &&
        entradaDate.getMinutes() <= 5
      ) {
        Status = "ok";
      }
      myarray.push({ name: emp.nombre, lastname: emp.apellido, docket: emp.legajo, status: Status });
      return myarray;
    });

  const Pres = employees
    .map((emp: EmpProp) => {
      if (emp.jornada[0].entrada == null) {
        Statuspres = "ausente"
      } else {
        Statuspres = "present"
      }
      if (emp.foto !== "") {
        foto = emp.foto
      } else {
        foto = "/logo2.png"
      }
    myarraypres.push({ image: foto, name: emp.nombre, lastname: emp.apellido, status: Statuspres });
    return myarraypres;
  });

  const cardList = [
  { icon: <AiOutlineEye size={55} />, numbers: length, text: "Cant. empleados" },
  { icon: <TbUserOff size={55} />, numbers: 1.504, text: "Empleados ausentes" },
  { icon: <TbUserExclamation size={55} />, numbers: 1.504, text: "Empleados presentes" },
  { icon: <TbUserX size={55} />, numbers: 1.504, text: "Llegadas tardes" },
  { icon: <TbUserCheck size={55} />, numbers: 1.504, text: "Llegadas puntuales" },
  { icon: <TbUserPlus size={55} />, numbers: 1.504, text: "horas extra" },
  ]
  
  useEffect(() => {
    hoursData()
  }, [])
  
  return (
    <>
      <Card items={cardList} />
      <List
        title='Fichadas'
        title2="Ausencias/Presencias"
        titlelist={titleList}
        items={myarray}
        items2={myarraypres}
      />
    </>
  )
}

export default Dashboard;