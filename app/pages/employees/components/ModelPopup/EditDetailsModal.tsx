import React, { SetStateAction, useState } from 'react'
import style from '../../styles/modelpopup.module.css'
import { axiosPut } from '@/app/services';
import { ApiEmployeesData } from '@/app/types';
import Widget from './components/Widget';
import Image from 'next/image';
import InputForm from './components/InputForm';
import InputCheckBoxForm from './components/InputCheckBoxForm';

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
        grupo, observaciones, foto} = empById
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
    const [Foto, setFoto] = useState(foto)
    const [FotoNueva, setFotoNueva] = useState<string | null>(null)
    const [Observaciones, setObservaciones] = useState(observaciones)

    const handleEdit = async () => {
        setLoading(true)
        try {
            await axiosPut(`actualizar/${legajo}`, {
                nombre: Nombre, apellido: Apellido, area: Area, activo: Activo, calle: Calle,
                categoria: Categoria, centro_de_costo: CentroCosto, ciudad: Ciudad,
                codigo_postal: CodigoPostal, contratacion: Contratacion, convenio: Convenio,
                cuil: Cuil, departamento: Dpto, dni: Dni, email: Email,
                estado_ambiental: EstadoAmbiental, examen_preocupacional: EPreocupacional,
                fecha_egreso: FechaEgreso, fecha_ingreso: FechaIngreso, fecha_nacimiento: FechaNacimiento,
                gerencia: Gerencia, grupo: Grupo, legajo: Legajo,
                nivel_educacion: NivelEducacion, numero: Numero, observaciones: Observaciones,
                pais: Pais, piso: Piso, provincia: Provincia, rotacion: Rotacion, sector: Sector,
                sexo: Sexo, telefono: Telefono, telefono_urgencia: TelUrgencia, tipo_liquidacion: TipoLiquidacion,
                turno: Turno
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
                            <InputForm title="Cuil"
                                required={true}
                                type="text"
                                onChange={e => setCuil(e.target.value)}
                                value={Cuil}
                            />
                            <InputForm title="Dni"
                                required={true}
                                type="text"
                                onChange={e => setDni(e.target.value)}
                                value={Dni}
                            />
                            <InputForm title="Sexo"
                                required={true}
                                type="text"
                                onChange={e => setSexo(e.target.value)}
                                value={Sexo}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Fecha de Nacimiento"
                                required={true}
                                type="date"
                                onChange={(e) => setFechaNacimiento(new Date(e.target.value))}
                                value={FechaNacimiento.toISOString().split('T')[0]}
                            />
                            <InputForm title="Nivel de Educacion"
                                required={true}
                                type="text"
                                onChange={e => setNivelEducacion(e.target.value)}
                                value={NivelEducacion}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Email"
                                required={true}
                                type="text"
                                onChange={e => setEmail(e.target.value)}
                                value={Email}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Telefono"
                                required={true}
                                type="text"
                                onChange={e => setTelefono(e.target.value)}
                                value={Telefono}
                            />
                            <InputForm title="Tel. de Urgencia"
                                required={true}
                                type="text"
                                onChange={e => setTelUrgencia(e.target.value)}
                                value={TelUrgencia}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Calle"
                                required={true}
                                type="text"
                                onChange={e => setCalle(e.target.value)}
                                value={Calle}
                            />
                            <InputForm title="Numero"
                                required={true}
                                type="text"
                                onChange={e => setNumero(e.target.value)}
                                value={Numero}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Piso"
                                required={true}
                                type="text"
                                onChange={e => setPiso(e.target.value)}
                                value={Piso}
                            />
                            <InputForm title="Departamento"
                                required={true}
                                type="text"
                                onChange={e => setDpto(e.target.value)}
                                value={Dpto}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Pais"
                                required={true}
                                type="text"
                                onChange={e => setPais(e.target.value)}
                                value={Pais}
                            />
                            <InputForm title="Provincia"
                                required={true}
                                type="text"
                                onChange={e => setProvincia(e.target.value)}
                                value={Provincia}
                            />
                        </div>        
                        <div className={style.inputcontainer}>
                            <InputForm title="Ciudad"
                                required={true}
                                type="text"
                                onChange={e => setCiudad(e.target.value)}
                                value={Ciudad}
                            />
                            <InputForm title="Codigo Postal"
                                required={true}
                                type="text"
                                onChange={e => setCodigoPostal(e.target.value)}
                                value={CodigoPostal}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Legajo"
                                required={true}
                                type="text"
                                onChange={e => setLegajo(e.target.value)}
                                value={Legajo}
                            />
                            <InputForm title="Contratacion"
                                required={true}
                                type="text"
                                onChange={e => setContratacion(e.target.value)}
                                value={Contratacion}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Fecha de Ingreso"
                                required={true}
                                type="date"
                                onChange={(e) => setFechaIngreso(new Date(e.target.value))}
                                value={FechaIngreso.toISOString().split('T')[0]}
                            />
                            <InputForm title="Gerencia"
                                required={true}
                                type="text"
                                onChange={e => setGerencia(e.target.value)}
                                value={Gerencia}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Area"
                                required={true}
                                type="text"
                                onChange={e => setArea(e.target.value)}
                                value={Area}
                            />
                            <InputForm title="Sector"
                                required={true}
                                type="text"
                                onChange={e => setSector(e.target.value)}
                                value={Sector}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Centro de Costo"
                                required={true}
                                type="text"
                                onChange={e => setCentroCosto(e.target.value)}
                                value={CentroCosto}
                            />
                            <InputForm title="Convenio"
                                required={true}
                                type="text"
                                onChange={e => setConvenio(e.target.value)}
                                value={Convenio}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Categoria"
                                required={true}
                                type="text"
                                onChange={e => setCategoria(e.target.value)}
                                value={Categoria}
                            />
                            <InputCheckBoxForm checked={Activo}
                                ResponseFalse="Inactivo"
                                responseTrue="Activo"
                                onChange={() => setActivo(!Activo)}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Fecha de Egreso"
                                required={true}
                                type="date"
                                onChange={(e) => setFechaEgreso(new Date(e.target.value))}
                                value={FechaEgreso.toISOString().split('T')[0]}
                            />
                            <InputForm title="EstadoAmbiental"
                                required={true}
                                type="text"
                                onChange={e => setEstadoAmbiental(e.target.value)}
                                value={EstadoAmbiental}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Preocupacional"
                                required={true}
                                type="text"
                                onChange={e => setEPreocupacional(e.target.value)}
                                value={EPreocupacional}
                            />
                            <InputForm title="Tipo de Liquidacion"
                                required={true}
                                type="text"
                                onChange={e => setTipoLiquidacion(e.target.value)}
                                value={TipoLiquidacion}
                            />
                        </div>
                        <div className={style.inputcontainer}>
                            <InputForm title="Rotacion"
                                required={true}
                                type="text"
                                onChange={e => setRotacion(e.target.value)}
                                value={Rotacion}
                            />
                            <InputForm title="Turno"
                                required={true}
                                type="text"
                                onChange={e => setTurno(e.target.value)}
                                value={Turno}
                            />
                        </div>
                        <InputForm title="Grupo"
                            required={true}
                            type="text"
                            onChange={e => setGrupo(e.target.value)}
                            value={Grupo}
                        />
                    </div>
                    <div>
                        <InputForm title="Foto"
                            required={false}
                            type="text"
                            onChange={e => setFoto(e.target.value)}
                            value={Foto}
                        />
                        <InputForm title="Cargar Foto Nueva"
                            required={false}
                            type="file"
                            onChange={e => e.target.files && e.target.files.length > 0 && setFotoNueva(URL.createObjectURL(e.target.files[0]))}
                        />
                        {FotoNueva && <>
                            <br/>
                                <center>
                                    <div><Image width={250} height={250} src={FotoNueva} alt="Imagen seleccionada" /></div>
                                </center>
                        </>}
                        <InputForm title="Observaciones"
                            required={false}
                            type="text"
                            onChange={e => setObservaciones(e.target.value)}
                            value={Observaciones}
                        />
                    </div>
                    </Widget>
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