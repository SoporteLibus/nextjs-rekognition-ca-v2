import React, { useState } from "react";
import style from './style/modelpopup.module.css'
import Widget from "./components/Widget";
import InputForm from "./components/InputForm";
import Swal from "sweetalert2";
import { axiosPutExtras } from "@/app/services";
import InputSelect from "./components/InputSelect";
import moment from "moment";

const ModalLicencia = ({ setShowModal, data, setEmployee }: any) => {
    const [Legajo, setLegajo] = useState(data[2])
    const [Apellido, setApellido] = useState(data[1])
    const [Nombre, setNombre] = useState(data[0])
    const [FechaLicencia, setFechaLicencia] = useState<Date>(new Date())
    const [Activo, setActivo] = useState(false)
    const [SelectedValue, setSelectedValue] = useState(data[0])
    
    const setExtras = async() => {
        try {
            const res = await axiosPutExtras(`cargar/${data[2]}`, [
                "licencia",
                FechaLicencia.toISOString().split('T')[0],
                
            ])
            // [
            //     "normal",
            //     "2023-06-13",
            //     "2023-06-13T13:58:03.000",
            //     "2023-06-13T22:01:05.000"
            // ]
        }
        catch (err) {
        console.log("No se pudieron obtener los empleados")
        }
    }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setExtras();
  };
  
  return (
        <div className={style.modalContainer}>
            <form onSubmit={handleSubmit}>
                <div className={style.modalBox}>
                    <div className={style.modalHeader}>
                        <h2>Habilitacion de Licencias</h2>
                    </div>
                    <div className={style.modalInner}>
                    <Widget >
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
                        </div>
                        <div className={style.inputcontainer}>
                            <InputSelect
                                onChange={e => setSelectedValue(e.target.value)}
                                value={SelectedValue}
                            />
                        </div>
                        {/* <div className={style.inputcontainer}>
                            <InputForm title="Inicio de licencia"
                                required={true}
                                type="datetime-local"
                                onChange={(e) => setFechaLicencia(new Date(e.target.value))}
                                value={FechaLicencia.toISOString().split('T')[0]}
                            />
                        </div> */}
                        <div className={style.inputcontainer}>
                            <InputForm title="Fin de licencia"
                                required={true}
                                type="datetime-local"
                                    onChange={(e) => setFechaLicencia(new Date(e.target.value))}
                                    value={`${FechaLicencia.toISOString().split("T")[0]} ${FechaLicencia.toISOString().split("T")[1].slice(0, 5)}`}
                            />
                            </div>
                            <p>Fecha: {`${FechaLicencia.toLocaleDateString()}`}</p>
                            <p>Fecha: {moment(FechaLicencia).set({hour:0,minute:0,second:0,millisecond:0}).toDate().toISOString()}</p>
                    </div>
                    </Widget>
                    </div>
                    <div className={style.modalFooter}>
                        <button className={style.addbtn} type="submit">Guardar</button>
                        <button className={style.addbtn}
                            type="button"
                            onClick={() => { setShowModal(false), setEmployee(["","",""]) }}
                        >Cerrar</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default ModalLicencia;
