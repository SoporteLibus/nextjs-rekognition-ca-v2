import React, { SetStateAction, useState } from 'react'
import style from '../../styles/modelpopup.module.css'
import { axiosPut } from '@/app/services';
import { ApiEmployeesData } from '@/app/types';
import Widget from './components/Widget';

interface EditDetailsModalProps {
    empById: ApiEmployeesData
    setEditModal: React.Dispatch<SetStateAction<boolean>>
    setModal: React.Dispatch<SetStateAction<boolean>>
}

const EditDetailsModal: React.FC<EditDetailsModalProps> = ({ empById, setEditModal, setModal }) => {
    const { legajo, apellido, nombre, cuil, contratacion, fecha_ingreso, gerencia,
        area, sector, centro_de_costo, convenio, categoria, dni, fecha_nacimiento,
        sexo, email, telefono, telefono_urgencia, calle, numero, departamento, piso,
        pais, provincia, ciudad, codigo_postal, nivel_educacion, activo, fecha_egreso,
        estado_ambiental, examen_preocupacional, tipo_liquidacion, rotacion, turno,
        grupo, jornada, liquidacion, observaciones} = empById
    const [loading, setLoading] = useState(false)
    const [Legajo, setLegajo] = useState(legajo)
    const [Apellido, setApellido] = useState(apellido)
    const [Nombre, setNombre] = useState(nombre)
    const [Cuil, setCuil] = useState(cuil)
    const [Contratacion, setContratacion] = useState(contratacion)
    const [FechaIngreso, setFechaIngreso] = useState<Date>(new Date(fecha_ingreso))
    const [Gerencia, setGerencia] = useState(gerencia)
    const [Area, setArea] = useState(area)
    const [Sector, setSector] = useState(sector)
    const [CentroCosto, setCentroCosto] = useState(centro_de_costo)
    const [Convenio, setConvenio] = useState(convenio)
    const [Categoria, setCategoria] = useState(categoria)
    const [Dni, setDni] = useState(dni)
    const [FechaNacimiento, setFechaNacimiento] = useState<Date>(new Date(fecha_nacimiento))
    const [Sexo, setSexo] = useState(sexo)
    const [Email, setEmail] = useState(email)
    const [Telefono, setTelefono] = useState(telefono)
    const [TelUrgencia, setTelUrgencia] = useState(telefono_urgencia)
    const [Calle, setCalle] = useState(calle)
    const [Numero, setNumero] = useState(numero)
    const [Dpto, setDpto] = useState(departamento)
    const [Piso, setPiso] = useState(piso)
    const [Pais, setPais] = useState(pais)
    const [Provincia, setProvincia] = useState(provincia)
    const [Ciudad, setCiudad] = useState(ciudad)
    const [CodigoPostal, setCodigoPostal] = useState(codigo_postal)
    const [NivelEducacion, setNivelEducacion] = useState(nivel_educacion)
    const [Activo, setActivo] = useState(activo)
    const [FechaEgreso, setFechaEgreso] = useState<Date>(new Date(fecha_egreso))
    const [EstadoAmbiental, setEstadoAmbiental] = useState(estado_ambiental)
    const [EPreocupacional, setEPreocupacional] = useState(examen_preocupacional)
    const [TipoLiquidacion, setTipoLiquidacion] = useState(tipo_liquidacion)
    const [Rotacion, setRotacion] = useState(rotacion)
    const [Turno, setTurno] = useState(turno)
    const [Grupo, setGrupo] = useState(grupo)
    const [Jornada, setJornada] = useState(jornada)
    const [Liquidacion, setLiquidacion] = useState(liquidacion)
    const [Observaciones, setObservaciones] = useState(observaciones)

    const handleEdit = async () => {
        setLoading(true)
        try {
            await axiosPut(`actualizar/${legajo}`, {
                nombre: Nombre, apellido: Apellido, dni: Dni,
                email: Email, legajo: Legajo, telefono: Telefono
            })
            setLoading(false)
            setEditModal(false)
            window.location.reload()
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
                    <Widget/>
                        {/* <div className={style.inputbox}>
                            <label htmlFor="">Legajo</label>
                            <input type="text"
                                required
                                onChange={(e) => setLegajo(e.target.value)}
                                value={Legajo}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <div className={style.inputbox}>
                                <label htmlFor="">Apellido</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setApellido(e.target.value)}
                                    value={Apellido}
                                />
                            </div>
                            <div className={style.inputbox}>
                                <label htmlFor="">Nombre</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setNombre(e.target.value)}
                                    value={Nombre}
                                />
                            </div>
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Cuil</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setCuil(e.target.value)}
                                    value={Cuil}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Contratacion</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setContratacion(e.target.value)}
                                    value={Contratacion}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Fecha de Ingreso</label>
                                <input type="date"
                                    required
                                    onChange={(e) => setFechaIngreso(new Date(e.target.value))}
                                    value={FechaIngreso.toString()}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Gerencia</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setGerencia(e.target.value)}
                                    value={Gerencia}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Area</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setArea(e.target.value)}
                                    value={Area}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Sector</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setSector(e.target.value)}
                                    value={Sector}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Centro de Costo</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setCentroCosto(e.target.value)}
                                    value={CentroCosto}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Convenio</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setConvenio(e.target.value)}
                                    value={Convenio}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Categoria</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setCategoria(e.target.value)}
                                    value={Categoria}
                                />
                        </div>
                        <div className={style.inputbox}>
                            <label htmlFor="">Dni</label>
                            <input type="text"
                                required
                                onChange={(e) => setDni(e.target.value)}
                                value={Dni}
                            />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Fecha de Nacimiento</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setFechaNacimiento(new Date(e.target.value))}
                                    value={FechaNacimiento.toString()}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Sexo</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setSexo(e.target.value)}
                                    value={Sexo}
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
                                    onChange={(e) => setTelefono(e.target.value)}
                                    value={Telefono}
                                />
                            </div>
                            <div className={style.inputbox}>
                                <label htmlFor="">Tel. Urgencias</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setTelUrgencia(e.target.value)}
                                    value={TelUrgencia}
                                />
                            </div>
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Calle</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setCalle(e.target.value)}
                                    value={Calle}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Numero</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setNumero(e.target.value)}
                                    value={Numero}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Departamento</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setDpto(e.target.value)}
                                    value={Dpto}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Piso</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setPiso(e.target.value)}
                                    value={Piso}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Pais</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setPais(e.target.value)}
                                    value={Pais}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Provincia</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setProvincia(e.target.value)}
                                    value={Provincia}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Ciudad</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setCiudad(e.target.value)}
                                    value={Ciudad}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Codigo Postal</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setCodigoPostal(e.target.value)}
                                    value={CodigoPostal}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Nivel de Educacion</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setNivelEducacion(e.target.value)}
                                    value={NivelEducacion}
                                />
                        </div>
                        <div className={style.inputbox}>
                            <label htmlFor="">Activo</label>
                            <select name="Activo" onChange={(e) => setActivo(!activo)}>
                                <option value="true">Si</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                        <div className={style.inputbox}>
                            <label htmlFor="">Fecha de Egreso</label>
                            <input type="text"
                                    required
                                    onChange={(e) => setFechaEgreso(new Date(e.target.value))}
                                    value={FechaEgreso.toString()}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Estado Ambiental</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setEstadoAmbiental(e.target.value)}
                                    value={EstadoAmbiental}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Preocupacional</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setEPreocupacional(e.target.value)}
                                    value={EPreocupacional}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Tipo de Liquidacion</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setTipoLiquidacion(e.target.value)}
                                    value={TipoLiquidacion}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Rotacion</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setRotacion(e.target.value)}
                                    value={Rotacion}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Turno</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setTurno(e.target.value)}
                                    value={Turno}
                                />
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Grupo</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setGrupo(e.target.value)}
                                    value={Grupo}
                                />
                        </div> */}
                        {/* <div className={style.inputbox}>
                                <label htmlFor="">Jornada</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setJornada(e.target.value)}
                                    value={Jornada}
                                />
                        </div> */}
                        {/* <div className={style.inputbox}>
                            <ul id="menu">
                                <li>
                                    <input type="checkbox" name="list" id="nivel1-1" />
                                    <label htmlFor="nivel1-1">Nivel 1</label>
                                    <ul className={style.interior}>
                                            <li><a href="#">Nivel 2</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div> */}
                        {/* <div className={style.inputbox}>
                            <label htmlFor="">Liquidacion</label>
                            <input type="text"
                                required
                                onChange={(e) => setLiquidacion(e.target.value)}
                                value={Liquidacion}
                            />
                        </div> */}
                        {/* <div className={style.inputbox}>
                            <label htmlFor="">Observaciones</label>
                            <input type="text"
                                required
                                onChange={(e) => setObservaciones(e.target.value)}
                                value={Observaciones}
                            />
                        </div> */}
                    </div>
                    <div className={style.modalFooter}>
                        <button className={style.addbtn} type="submit">{loading ? 'Editando' : 'Guardar'}</button>
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