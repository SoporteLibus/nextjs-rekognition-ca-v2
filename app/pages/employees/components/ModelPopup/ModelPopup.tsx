import React, { useState } from "react";
import style from '../../styles/modelpopup.module.css'
import { axiosPost } from "@/app/services";

const ModelPopup = ({ setShowModal }: any) => {
  const [loading, setLoading] = useState(false)
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [image, setImage] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [job, setJob] = useState("")
  const [dateofjoining, setDateofJoining] = useState("")

  //console.log(empById)

  const createEmployee = async (values: any) => {
    setLoading(true)
    try {
      const res = await axiosPost('listar/', values)
      console.log(res)
      setLoading(false)
      setShowModal(false)
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { value }: any = e.target
    createEmployee(value)
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
                <label htmlFor="">First Name</label>
                <input type="text" required
                  onChange={(e) => setFirstname(e.target.value)}
                  value={firstname}
                />
              </div>
              <div className={style.inputbox}>
                <label htmlFor="">Last Name</label>
                <input type="text" required
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
                />
              </div>
            </div>
            <div className={style.inputbox}>
              <label htmlFor="">image</label>
              <input type="text" required
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </div>

            <div className={style.inputcontainer}>
              <div className={style.inputbox}>
                <label htmlFor="">Email Address</label>
                <input type="email" required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className={style.inputbox}>
                <label htmlFor="">Phone</label>
                <input type="text" required
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </div>
            
            </div>
            <div className={style.inputbox}>
              <label htmlFor="">Job-position</label>
              <input type="text" required
                onChange={(e) => setJob(e.target.value)}
                value={job}
              />
            </div>
            <div className={style.inputbox}>
              <label htmlFor="">Date of Joining</label>
              <input type="date" required
                onChange={(e) => setDateofJoining(e.target.value)}
                value={dateofjoining}
              />
            </div>
            <div className={style.modalFooter}>
              <button className={style.addbtn} type="submit">{loading ? 'Guardando...' : 'Guardar'}</button>
            </div>

          </div>
      

        </div>
      </form>
    </div>
  );
};

export default ModelPopup;
