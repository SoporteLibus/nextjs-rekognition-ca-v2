"use client"
import { useEffect, useState } from "react";
import Card from './components/card/Card'
import List from './components/List/List'
import ModelPopup from "./components/ModelPopup/ModelPopup";
import { TbUserPlus } from 'react-icons/tb'
import moment from "moment";
import { axiosGet } from "@/app/services";

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

const Upload = () => {
    const [showModal, setShowModal] = useState(false)
    const [employees, setEmployees] = useState([])
    const [employee, setEmployee] = useState("")
    let myarray: any[] = [];
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

    const Extras = employees
    .filter((emp: EmpProp) => emp.jornada[0].habilitado_horas_extra == false) // Filtrar los empleados con entrada no nula
        .map((emp: EmpProp) => {
        const entranceDate = moment.utc(emp.jornada[0].entrada, "YYYY-MM-DD HH:mm:ss").local().toDate();
        const exitDate = moment.utc(emp.jornada[0].salida, "YYYY-MM-DD HH:mm:ss").local().toDate();
        const entranceTime = `${entranceDate.getHours()}:${entranceDate.getMinutes()}:${entranceDate.getSeconds()}`
        const exitTime = `${exitDate.getHours()}:${exitDate.getMinutes()}:${exitDate.getSeconds()}`
        extras = extras + 1
        myarray.push({
            name: emp.nombre,
            lastname: emp.apellido,
            docket: emp.legajo,
            entrance: (entranceTime == "NaN:NaN:NaN") ? "--:--:--" : entranceTime,
            exit: (exitTime == "NaN:NaN:NaN") ? "--:--:--" : exitTime,
      });
      return myarray;
    });

    const cardList = [
        { icon: <TbUserPlus size={55} />, numbers: extras, text: "Cantidad total", link: "" },
    ]
    
    const titleList = ["Nombre", "Apellido", "Legajo", "Entrada", "Salida", "Estado"]

    const prueba = [
        { name: "Angel david", lastname: "Coceres", docket: "892", entrance: "00:00", exit: "00:00", button: "892" },
    ]

    useEffect(() => {
        hoursData()
        employee && setShowModal(true)
    }, [showModal, employee])
    
    
    return (
        <>
        {
            showModal && <ModelPopup setShowModal={setShowModal} docket={employee} />
        }
            <Card items={cardList} />
            <div className="details">
                <List title='Empleados con horas extra' titlelist={titleList} items={myarray} setEmployee={setEmployee} />
            </div>
        </>
    )
}

export default Upload