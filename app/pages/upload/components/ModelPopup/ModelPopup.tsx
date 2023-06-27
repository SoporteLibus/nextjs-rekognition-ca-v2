import React, { useEffect, useState } from "react";
import style from './style/modelpopup.module.css'
import { ApiEmployeesData } from "@/app/types";
import Widget from "./components/Widget";
import Image from "next/image";
import InputForm from "./components/InputForm";
import InputCheckBoxForm from "./components/InputCheckBoxForm";
import Swal from "sweetalert2";
import { axiosGet, axiosPostMultipart } from "@/app/services";

const ModelPopup = ({ setShowModal, docket }: any) => {
    const [ employee, setEmployee ] = useState<any>([])
    const [Legajo, setLegajo] = useState(employee.legajo)
    const [Apellido, setApellido] = useState(employee.apellido)
    const [Nombre, setNombre] = useState(employee.nombre)
    const [HoraIngreso, setHoraIngreso] = useState<Date>(new Date())
    const [HoraSalida, setHoraSalida] = useState<Date>(new Date())
    const [Activo, setActivo] = useState(true)
    const [Turno, setTurno] = useState(employee.turno)
    
    const getEmployee = async(docketId: string ) => {
        try {
        const res = await axiosGet(docketId)
        setEmployee(res.data.data)
        }
        catch (err) {
        console.log("No se pudieron obtener los empleados")
        }
    }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
    
  useEffect(() => {
    getEmployee(docket)
  }, [])
  
  
  return (
        <div className={style.modalContainer}>
            <form onSubmit={handleSubmit}>
                <div className={style.modalBox}>
                    <div className={style.modalHeader}>
                        <h2>Registrar Nuevo Empleado</h2>
                    </div>
                    <div className={style.modalInner}>
                    <Widget tabHeaders={["Informacion", "Contratacion", "Observaciones"]} >
                    <div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Apellido"
                                required={true}
                                type="text"
                                onChange={e => setApellido(e.target.value)}
                                value={Apellido}
                            />
                            <InputForm title="Nombre"
                                required={true}
                                type="text"
                                onChange={e => setNombre(e.target.value)}
                                value={Nombre}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Legajo"
                                required={true}
                                type="text"
                                onChange={e => setLegajo(e.target.value)}
                                value={Legajo}
                            />
                            <InputCheckBoxForm checked={Activo}
                                ResponseFalse="Inactivo"
                                responseTrue="Activo"
                                onChange={() => setActivo(!Activo)}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Hora de Ingreso"
                                required={true}
                                type="date"
                                onChange={(e) => setHoraIngreso(new Date(e.target.value))}
                                value={HoraIngreso.toISOString().split('T')[0]}
                            />
                            <InputForm title="Hora de Salida"
                                required={true}
                                type="date"
                                onChange={(e) => setHoraSalida(new Date(e.target.value))}
                                value={HoraSalida.toISOString().split('T')[0]}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Turno"
                                required={true}
                                type="text"
                                onChange={e => setTurno(e.target.value)}
                                value={Turno}
                            />
                        </div>
                    </div>
                    </Widget>
                    </div>
                    <div className={style.modalFooter}>
                        <button className={style.addbtn} type="submit">Guardar</button>
                        <button className={style.addbtn}
                            type="submit"
                            onClick={() => setShowModal(false)}
                        >Cerrar</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default ModelPopup;
