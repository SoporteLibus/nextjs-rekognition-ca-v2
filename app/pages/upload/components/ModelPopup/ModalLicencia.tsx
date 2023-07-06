import React, { useState } from "react";
import style from './style/modelpopup.module.css'
import Widget from "./components/Widget";
import InputForm from "./components/InputForm";
import Swal from "sweetalert2";
import { axiosPutExtras } from "@/app/services";
import InputSelect from "./components/InputSelect";

const ModalLicencia = ({ setShowModal, data, setEmployee }: any) => {
    const [FechaLicencia, setFechaLicencia] = useState<Date>(new Date())
    const [SelectedValue, setSelectedValue] = useState("")

    const setExtras = async () => {
        try {
            const res = await axiosPutExtras(`cargar/${data[2]}`, [
                "licencia",
                FechaLicencia.toISOString().split('T')[0],
                SelectedValue
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
                            <InputSelect
                                onChange={e => setSelectedValue(e.target.value)}
                                value={SelectedValue}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Fecha de licencia"
                                required={true}
                                type="date"
                                onChange={(e) => setFechaLicencia(new Date(e.target.value))}
                                value={FechaLicencia.toISOString().split('T')[0]}
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

export default ModalLicencia;
