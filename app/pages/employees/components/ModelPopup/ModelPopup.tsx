import React, { useState } from "react";
import style from '../../styles/modelpopup.module.css'
import { axiosPost } from "@/app/services";
import { ApiEmployeesData } from "@/app/types";
import Widget from "./components/Widget";

const ModelPopup = ({ setShowModal }: any) => {
  const [loading, setLoading] = useState(false)
  const [Legajo, setLegajo] = useState("")
  const [Apellido, setApellido] = useState("")
  const [Nombre, setNombre] = useState("")
  const [Cuil, setCuil] = useState("")
  const [Contratacion, setContratacion] = useState("")
  const [FechaIngreso, setFechaIngreso] = useState<Date>(new Date())
  const [Gerencia, setGerencia] = useState("")
  const [Area, setArea] = useState("")
  const [Sector, setSector] = useState("")
  const [CentroCosto, setCentroCosto] = useState("")
  const [Convenio, setConvenio] = useState("")
  const [Categoria, setCategoria] = useState("")
  const [Dni, setDni] = useState("")
  const [FechaNacimiento, setFechaNacimiento] = useState(new Date())
  const [Sexo, setSexo] = useState("")
  const [Email, setEmail] = useState("")
  const [Telefono, setTelefono] = useState("")
  const [TelUrgencia, setTelUrgencia] = useState("")
  const [Calle, setCalle] = useState("")
  const [Numero, setNumero] = useState("")
  const [Dpto, setDpto] = useState("")
  const [Piso, setPiso] = useState("")
  const [Pais, setPais] = useState("")
  const [Provincia, setProvincia] = useState("")
  const [Ciudad, setCiudad] = useState("")
  const [CodigoPostal, setCodigoPostal] = useState("")
  const [NivelEducacion, setNivelEducacion] = useState("")
  const [Activo, setActivo] = useState(Boolean)
  const [FechaEgreso, setFechaEgreso] = useState<Date>(new Date())
  const [EstadoAmbiental, setEstadoAmbiental] = useState("")
  const [EPreocupacional, setEPreocupacional] = useState("")
  const [TipoLiquidacion, setTipoLiquidacion] = useState("")
  const [Rotacion, setRotacion] = useState("")
  const [Turno, setTurno] = useState("")
  const [Grupo, setGrupo] = useState("")
  const [Jornada, setJornada] = useState("")
  const [Liquidacion, setLiquidacion] = useState("")
  const [Observaciones, setObservaciones] = useState("")

  const createEmployee = async (values: ApiEmployeesData) => {
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
                    <Widget tabHeaders={["Informacion", "Contratacion", "Observaciones"]} >
                    
                    <div>
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
                        <div className={style.inputcontainer}>
                            <div className={style.inputbox}>
                                <label htmlFor="">Cuil</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setCuil(e.target.value)}
                                    value={Cuil}
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
                        </div>
                        <div className={style.inputcontainer}>
                            <div className={style.inputbox}>
                                <label htmlFor="">Fecha de Nacimiento</label>
                                <input type="text"
                                    required
                                    onChange={(e) => e.target.valueAsDate && setFechaNacimiento(e.target.valueAsDate)}
                                    value={FechaNacimiento.toDateString()}
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
                                <label htmlFor="">Nivel de Educacion</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setNivelEducacion(e.target.value)}
                                    value={NivelEducacion}
                                />
                            </div>
                        </div>
                        <div className={style.inputcontainer}>
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
                        <div className={style.inputcontainer}>
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
                        </div>
                        <div className={style.inputcontainer}>
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
                        </div>
                        <div className={style.inputcontainer}>
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
                        </div>        
                        <div className={style.inputcontainer}>
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
                        </div>
                    </div>
                    <div>
                        <div className={style.inputcontainer}>
                            <div className={style.inputbox}>
                                <label htmlFor="">Legajo</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setLegajo(e.target.value)}
                                    value={Legajo}
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
                        </div>
                        
                        <div className={style.inputcontainer}>
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
                        </div>
                        <div className={style.inputcontainer}>
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
                        </div>
                        <div className={style.inputcontainer}>
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
                        </div>
                        <div className={style.inputcontainer}>
                            <div className={style.inputbox}>
                                    <label htmlFor="">Categoria</label>
                                    <input type="text"
                                        required
                                        onChange={(e) => setCategoria(e.target.value)}
                                        value={Categoria}
                                    />
                            </div>
                            <div className={style.inputbox}>
                                <label htmlFor="">Activo</label>
                                <select name="Activo" onChange={(e) => setActivo(!Activo)}>
                                    <option value="true">Si</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                        </div>
                        <div className={style.inputcontainer}>
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
                        </div>
                        <div className={style.inputcontainer}>
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
                        </div>
                        <div className={style.inputcontainer}>
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
                        </div>
                        <div className={style.inputbox}>
                                <label htmlFor="">Grupo</label>
                                <input type="text"
                                    required
                                    onChange={(e) => setGrupo(e.target.value)}
                                    value={Grupo}
                                />
                        </div>
                    </div>
                    <div>
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
                        <div className={style.inputbox}>
                            <label htmlFor="">Observaciones</label>
                            <input type="text"
                                required
                                onChange={(e) => setObservaciones(e.target.value)}
                                value={Observaciones}
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
