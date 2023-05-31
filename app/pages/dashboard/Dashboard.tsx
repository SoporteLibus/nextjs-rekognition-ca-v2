import { List } from "@/app/components";
import Card from "@/app/pages/dashboard/components/card/Card";
import { AiOutlineEye } from 'react-icons/ai'
import { TbUserOff, TbUserX, TbUserCheck, TbUserExclamation, TbUserPlus, TbUser } from 'react-icons/tb'
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
        console.log(emp.foto)
        foto = `${emp.foto}`
      } else {
        foto = "/logo2.png"
      }
    myarraypres.push({ image: foto, name: emp.nombre, lastname: emp.apellido, status: statuspres });
    return myarraypres;
  });

  const cardList = [
  { icon: <AiOutlineEye size={55} />, numbers: length, text: "Cant. empleados" },
  { icon: <TbUserOff size={55} />, numbers: ausents, text: "Empleados ausentes" },
  { icon: <TbUser size={55} />, numbers: length - ausents, text: "Empleados presentes" },
  { icon: <TbUserX size={55} />, numbers: late, text: "Llegadas tardes" },
  { icon: <TbUserCheck size={55} />, numbers: puntual, text: "Llegadas puntuales" },
  { icon: <TbUserPlus size={55} />, numbers: extras, text: "horas extra" },
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