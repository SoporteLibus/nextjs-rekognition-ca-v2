"use client"
import { useEffect, useState } from "react";
import Card from './components/card/Card'
import List from './components/List/List'
import ModelPopup from "./components/ModelPopup/ModelPopup";
import { TbUserPlus } from 'react-icons/tb'
import moment from "moment";
import { axiosGet } from "@/app/services";
import style from './style/uploads.module.css'
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";

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
    const [employee, setEmployee] = useState<any[]>(["", "", ""])
    const [search, setSearch] = useState("")
    let myarray: any[] = [];
    let extras = 0;

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
        const res = await axiosGet(`buscar?keyword=${search}`)
        setEmployees(res.data.data)
    }
    catch (err) {
        console.log("Error en la busqueda de empleados")
    }
  }

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

    const cardList = [
        { icon: <TbUserPlus size={55} />, numbers: extras, text: "Cantidad total", link: "" },
    ]
    
    const titleList = ["Nombre", "Apellido", "Legajo", "Estado"]

    useEffect(() => {
        // hoursData()
        employee && setShowModal(true)
    }, [employee])
    
    
    return (
        <>
        {
            showModal && <ModelPopup setShowModal={setShowModal} data={employee} />
        }
            <Card items={cardList} />
            <div className={style.employeeHeader}>
                <div className={style.searchBox}>
                    <form onSubmit={handleSearch}>
                        <input
                        type="text"
                        placeholder="Busqueda por nombre o legajo"
                        onChange={e => setSearch(e.target.value)}
                        />
                        <button style={{ border: "none", cursor: "pointer" }}
                        type="submit">
                        <BiSearch size={20} />
                        </button>
                    </form>
                </div>
                {/* <button className={style.addbtn}
                onClick={() => setShowModal(true)}>
                    <IoMdAdd size="20" color="#fffff" />
                </button> */}
            </div>
            <div className="details">
                <List title='Empleados con horas extra'
                    titlelist={titleList} items={myarray}
                    setEmployee={setEmployee}
                />
            </div>
        </>
    )
}

export default Upload