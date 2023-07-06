"use client"
import { useState } from "react";
import Card from './components/card/Card'
import List from './components/List/List'
import { TbUserPlus } from 'react-icons/tb'
import { axiosGet } from "@/app/services";
import ModalExtras from "./components/ModelPopup/ModalExtras";
import ModalNormal from "./components/ModelPopup/ModalNormal";
import ModalLicencia from "./components/ModelPopup/ModalLicencia";
import InputSearch from "./components/search/InputSearch";
import Group from "./components/group/Group";
import Individual from "./components/individual/Individual";

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
    const [showModalExtras, setShowModalExtras] = useState(false)
    const [showModalNormal, setShowModalNormal] = useState(false)
    const [showModalLicencia, setShowModalLicencia] = useState(false)
    const [employees, setEmployees] = useState([])
    const [employee, setEmployee] = useState<any[]>(["", "", ""])
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
    .map((emp: EmpProp) => {
        extras = extras + 1
        myarray.push({
            name: emp.nombre,
            lastname: emp.apellido,
            docket: emp.legajo,
      });
      return myarray;
    });

    // const cardList = [
    //     { icon: <TbUserPlus size={55} />, numbers: extras, text: "Cantidad total", link: "" },
    // ]
    
    const titleList = ["Nombre", "Apellido", "Legajo", "Estado"]

    const groupList = ["Nombre de grupo", "Turno de grupo", "Fecha de inicio", "Fecha de fin", "Cargar"]
    
    const individualList = ["Legajo", "Turno de grupo", "Fecha de inicio", "Fecha de fin", "Cargar"]

    return (
        <>
            {showModalExtras && <ModalExtras setShowModal={setShowModalExtras} data={employee} setEmployee={setEmployee} />}
            {showModalNormal && <ModalNormal setShowModal={setShowModalNormal} data={employee} setEmployee={setEmployee} />}
            {showModalLicencia && <ModalLicencia setShowModal={setShowModalLicencia} data={employee} setEmployee={setEmployee} />}
            {/* <Card items={cardList} /> */}
            <div className="details">
                <Group title="Modificar turnos de Grupos" titlelist={groupList} />
            </div>
            <div className="details">
                <Individual title="Modificar turno Individual" titlelist={individualList} />
            </div>
            <InputSearch setEmployees={setEmployees} />
            <div className="details">
                <List title='Empleados con horas extra'
                    titlelist={titleList} items={myarray}
                    setEmployee={setEmployee}
                    setShowModalExtras={setShowModalExtras}
                    setShowModalLicencia={setShowModalLicencia}
                    setShowModalNormal={setShowModalNormal}
                />
            </div>
        </>
    )
}

export default Upload