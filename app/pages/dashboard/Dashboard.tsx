import { List, ProfileList } from "@/app/components";
import Card from "@/app/pages/dashboard/components/card/Card";
import { TbUserOff, TbUserX, TbUserCheck, TbUserPlus, TbUser, TbTools, TbTool, TbUsers } from 'react-icons/tb'
import moment from "moment";
import { axiosGet } from "@/app/services";
import { useContext, useEffect, useState } from "react";
import { Context } from '@/app/utils/context/ContextProvider';

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
  const { setTitle }: any = useContext(Context)
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

  const cardList = [
    { icon: <TbUserOff size={55} />, numbers: ausents, text: "Empleados ausentes", link: "" },
    { icon: <TbUser size={55} />, numbers: length - ausents, text: "Empleados presentes", link: "" },
    { icon: <TbUserX size={55} />, numbers: late, text: "Llegadas tardes", link: "" },
    { icon: <TbUserCheck size={55} />, numbers: puntual, text: "Llegadas puntuales", link: "" },
    { icon: <TbUserPlus size={55} />, numbers: extras, text: "Horas extra", link: "" },
    { icon: <TbTools size={50} />, numbers: extras, text: "Empleados matriceria", link: "/pages/dashboard/matriceria/" },
    { icon: <TbTool size={55} />, numbers: extras, text: "Empleados mantenimiento", link: "/pages/dashboard/mantenimiento/" },
    { icon: <TbUsers size={55} />, numbers: extras, text: "Empleados produccion", link: "/pages/dashboard/produccion/" },
  ]

  const titleList = ["Nombre", "Apellido", "Legajo", "Entrada", "Salida", "Estado"]
  
  useEffect(() => {
    hoursData()
    setTitle("Panel Principal")
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
        <ProfileList title="Ausencias/Presencias" body={myarraypres} />
      </div>
    </>
  )
}

export default Dashboard;