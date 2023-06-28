import React, { useState } from "react";
import style from './style/modelpopup.module.css'
import Widget from "./components/Widget";
import InputForm from "./components/InputForm";
import InputCheckBoxForm from "./components/InputCheckBoxForm";
import Swal from "sweetalert2";
import { axiosPutExtras } from "@/app/services";

const ModelPopup = ({ setShowModal, data, setEmployee }: any) => {
    const [Legajo, setLegajo] = useState(data[2])
    const [Apellido, setApellido] = useState(data[1])
    const [Nombre, setNombre] = useState(data[0])
    const [FechaExtra, setFechaExtra] = useState<Date>(new Date())
    const [Activo, setActivo] = useState(false)
    
    const setExtras = async() => {
        try {
            const res = await axiosPutExtras(`habilitar/${data[2]}`, [
                FechaExtra.toISOString().split('T')[0],
                Activo
            ])
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
                        <h2>Habilitacion de Horas Extra</h2>
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
                            <InputCheckBoxForm checked={Activo}
                                ResponseFalse="Inhabilitado"
                                responseTrue="Habilitado"
                                onChange={() => setActivo(!Activo)}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Fecha de hora extra"
                                required={true}
                                type="date"
                                onChange={(e) => setFechaExtra(new Date(e.target.value))}
                                value={FechaExtra.toISOString().split('T')[0]}
                            />
                        </div>
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

export default ModelPopup;
