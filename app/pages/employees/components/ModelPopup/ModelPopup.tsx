import React, { useState } from "react";
import style from '../../styles/modelpopup.module.css'
import { axiosPost } from "@/app/services";

const ModelPopup = ({ setShowModal }: any) => {
  const [firstName, setFirstname] = useState("")
  const [lastName, setLastname] = useState("")
  const [Area, setArea] = useState("")
  const [Email, setEmail] = useState("")
  const [Phone, setPhone] = useState("")
  const [Dni, setDni] = useState("")
  const [Legajo, setLegajo] = useState("")

  //console.log(empById)

  const createEmployee = async (values: any) => {
    try {
      const res = await axiosPost('listar/', values)
      console.log(res)
      setShowModal(false)
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createEmployee({
      nombre: firstName, apellido: lastName, dni: Dni,
      email: Email, legajo: Legajo, telefono: Phone, area: Area
    })
  }
  
  return (
    <div className={style.modalContainer}>
      <form onSubmit={handleSubmit}>
        <div className={style.modalBox}>
          <div className={style.modalHeader}>
            <h2>Registrar Empleado</h2>
          </div>
      
          <div className={style.modalInner}

          >
            <div className={style.inputcontainer}>
              <div className={style.inputbox}>
                <label htmlFor="">Nombre</label>
                <input type="text" required
                  onChange={(e) => setFirstname(e.target.value)}
                  value={firstName}
                />
              </div>
              <div className={style.inputbox}>
                <label htmlFor="">Apellido</label>
                <input type="text" required
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastName}
                />
              </div>
            </div>
            <div className={style.inputbox}>
              <label htmlFor="">Area</label>
              <input type="text" required
                onChange={(e) => setArea(e.target.value)}
                value={Area}
              />
            </div>

            <div className={style.inputcontainer}>
              <div className={style.inputbox}>
                <label htmlFor="">Email</label>
                <input type="email" required
                  onChange={(e) => setEmail(e.target.value)}
                  value={Email}
                />
              </div>
              <div className={style.inputbox}>
                <label htmlFor="">Telefono</label>
                <input type="text" required
                  onChange={(e) => setPhone(e.target.value)}
                  value={Phone}
                />
              </div>
            
            </div>
            <div className={style.inputbox}>
              <label htmlFor="">Dni</label>
              <input type="text" required
                onChange={(e) => setDni(e.target.value)}
                value={Dni}
              />
            </div>
            <div className={style.inputbox}>
              <label htmlFor="">Legajo</label>
              <input type="text" required
                onChange={(e) => setLegajo(e.target.value)}
                value={Legajo}
              />
            </div>
            <div className={style.modalFooter}>
              <button className={style.addbtn} type="submit">Guardar</button>
              <button className={style.addbtn}
                type="button"
                onClick={() => setShowModal(false)}
              >Cerrar</button>
            </div>

          </div>
      

        </div>
      </form>
    </div>
  );
};

export default ModelPopup;
