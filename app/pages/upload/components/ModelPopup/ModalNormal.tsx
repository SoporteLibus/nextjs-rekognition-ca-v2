import React, { useState } from "react";
import style from './style/modelpopup.module.css'
import Widget from "./components/Widget";
import InputForm from "./components/InputForm";
import Swal from "sweetalert2";
import { axiosPutExtras } from "@/app/services";

const ModalNormal = ({ setShowModal, data, setEmployee }: any) => {
    const [Inicio, setInicio] = useState<Date>(new Date())
    const [Fin, setFin] = useState<Date>(new Date())
    
    const DateTime = (data: any) => {
        const fullDate = `${data.toISOString().split("T")[0]}`
        const hour = `${+data.toISOString().split("T")[1].slice(0, 2) - 3}`
        const minutes = `${data.toISOString().split("T")[1].slice(2, 8)}`

        return `${fullDate} ${(hour.length == 1) ? "0" + hour : hour}${minutes}`
    }

    const setExtras = async () => {
        try {
            const res = await axiosPutExtras(`cargar/${data[2]}`, [
                "normal",
                Inicio.toISOString().split('T')[0],
                Inicio.toISOString().slice(0, -1),
                Fin.toISOString().slice(0,-1)
            ])
            Swal.fire(
                'Peticion realizada!',
                `${res.data.data.mensaje}`,
                'success'
            )
        }
        catch (err) {
            console.log("No se pudieron obtener los empleados")
            Swal.fire(
                'Error!',
                'Peticion no realizada!',
                'error'
            )
        }
    }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setExtras();
      setShowModal(false);
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
                            <InputForm title="Nombre"
                                required={true}
                                type="text"
                                defaultValue={data[0]}
                            />
                            <InputForm title="Apellido"
                                required={true}
                                type="text"
                                defaultValue={data[1]}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Legajo"
                                required={true}
                                type="text"
                                defaultValue={data[2]}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Fecha de entrada"
                                required={true}
                                type="datetime-local"
                                onChange={(e) => setInicio(new Date(e.target.value))}
                                value={DateTime(Inicio)}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Fecha de salida"
                                required={true}
                                type="datetime-local"
                                onChange={(e) => setFin(new Date(e.target.value))}
                                value={DateTime(Fin)}
                            />
                        </div>
                    </div>
                    </Widget>
                    </div>
                    <div className={style.modalFooter}>
                        <button className={style.addbtn} type="submit">Guardar</button>
                        <button className={style.addbtn}
                            type="button"
                            onClick={() => { setShowModal(false), setEmployee(["","",""] ) }}
                        >Cerrar</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default ModalNormal;
