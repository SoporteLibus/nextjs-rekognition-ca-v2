"use client"
import React, { useState } from "react"
import style from './style/group.module.css'
import InputSelect from "./components/InputSelect";
import InputForm from "./components/InputForm";
import Swal from "sweetalert2";
import { axiosPut, axiosPutAny } from "@/app/services";

interface GroupObjects {
    title: string;
    titlelist: string[];
}

const Group: React.FC<GroupObjects> = ({ title, titlelist }) => {
    const [FechaInicio, setFechaInicio] = useState<Date>(new Date())
    const [FechaFin, setFechaFin] = useState<Date>(new Date())
    const [grupo, setGrupo] = useState("")
    const [turno, setTurno] = useState("")

    const submitGroup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const res = await axiosPutAny(`turno-grupo/${grupo}`, {
                turno: turno,
                fecha_final: FechaFin.toISOString().split("T")[0],
                fecha_inicial: FechaInicio.toISOString().split("T")[0]
            })
            Swal.fire({
                title: 'exito!',
                position: 'top',
                icon: 'success'
            })
        }
        catch (err) {
            console.log("Error en la busqueda de empleados")
            Swal.fire({
                title: 'Error!',
                text: 'No se pudieron actualizar los datos.',
                icon: 'error'
            })
        }
    }
  return (
      <div className={style.recentOrders}>
        <div className={style.cardHeader}>
            <h2>{title}</h2>
        </div>
        <div className={style.divMedium}>
            <form onSubmit={submitGroup}>
                <table className={style.table}>
                    <thead>
                        <tr>
                            {titlelist.map((item, index) => (
                                <th key={index}>{item}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <InputSelect
                                    onChange={e => setGrupo(e.target.value)}
                                    value={grupo}
                                    required
                                >
                                    <option value="a">Grupo A</option>
                                    <option value="b">Grupo B</option>
                                    <option value="c">Grupo C</option>
                                </InputSelect>
                            </td>
                            <td>
                                <InputSelect
                                    onChange={e => setTurno(e.target.value)}
                                    value={turno}
                                    required
                                >
                                    <option value="mañana">Mañana</option>
                                    <option value="tarde">Tarde</option>
                                    <option value="noche">Noche</option>
                                </InputSelect>
                            </td>
                            <td>
                                <InputForm
                                    required={true}
                                    type="date"
                                    onChange={(e) => setFechaInicio(new Date(e.target.value))}
                                    value={FechaInicio.toISOString().split('T')[0]}
                                />
                            </td>
                            <td>
                                <InputForm 
                                    required={true}
                                    type="date"
                                    onChange={(e) => setFechaFin(new Date(e.target.value))}
                                    value={FechaFin.toISOString().split('T')[0]}
                                />
                            </td>
                            <td>
                                <button type="submit" className={style.button}>Cargar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>
  )
}

export default Group;