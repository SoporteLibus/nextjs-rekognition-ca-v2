import React, { useState } from 'react'
import style from '../../styles/modelpopup.module.css'
import { axiosPut } from '@/app/services';


const EditDetailsModal = ({ empById, setEditModal, setModal }: any) => {
    const { nombre, apellido, email, telefono, legajo, dni, foto } = empById
    const [loading, setLoading] = useState(false)
    const [firstName, setFirstName] = useState(nombre)
    const [lastName, setLastName] = useState(apellido)
    const [Email, setEmail] = useState(email)
    const [Phone, setPhone] = useState(telefono)
    const [Job, setJob] = useState(dni)
    const [dateOfJoining, setDateOfJoining] = useState(legajo)
    const [Image, setImage] = useState(foto)

    const handleEdit = async () => {
        setLoading(true)
        try {
            const res = await axiosPut(`actualizar/${legajo}`, {
                nombre: firstName, apellido: lastName, dni: Job,
                email: Email, legajo: dateOfJoining, telefono: Phone
            })
            setLoading(false)
            setEditModal(false)
            console.log("ResEdit>>",res)
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleEdit()
    }

    return (
        <div className={style.modalContainer}>
            <form action="" onSubmit={handleSubmit}>
                <div className={style.modalBox}>
                    <div className={style.modalHeader}>
                        <h2>Actualizar datos del Empleado</h2>
                    </div>
                    <div className={style.modalInner}

                    >
                        <div className={style.inputcontainer}>
                            <div className={style.inputbox}>
                                <label htmlFor="">Nombre</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setFirstName(e.target.value)}
                                    value={firstName}
                                />
                            </div>
                            <div className={style.inputbox}>
                                <label htmlFor="">Apellido</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastName}
                                />
                            </div>
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Image</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setImage(e.target.value)}
                                    value={Image}
                                />
                            </div>

                        <div className={style.inputcontainer}>
                            <div className={style.inputbox}>
                                <label htmlFor="">Email</label>
                                <input type="email"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={Email}
                                />
                            </div>
                            <div className={style.inputbox}>
                                <label htmlFor="">Telefono</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={Phone}
                                />
                            </div>
                        </div>
                        <div className={style.inputbox}>
                            <label htmlFor="">Dni</label>
                            <input type="text"
                                required
                                onChange={(e) => setJob(e.target.value)}
                                value={Job}
                            />
                        </div>
                        <div className={style.inputbox}>
                            <label htmlFor="">Legajo</label>
                            <input type="text"
                                required
                                onChange={(e) => setDateOfJoining(e.target.value)}
                                value={dateOfJoining}
                            />
                        </div>
                    </div>
                    <div className={style.modalFooter}>
                        <button className={style.addbtn} type="submit">{loading ? 'Editando' : 'Editar y Guardar'}</button>
                        <button className={style.addbtn}
                            type="submit"
                            onClick={() => setModal(false)}
                        >Cerrar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditDetailsModal