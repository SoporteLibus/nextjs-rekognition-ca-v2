import React, { useState } from "react";
import style from '../../styles/modelpopup.module.css'
import { ApiEmployeesData } from "@/app/types";
import Widget from "./components/Widget";
import Image from "next/image";
import InputForm from "./components/InputForm";
import InputCheckBoxForm from "./components/InputCheckBoxForm";
import { getCookie } from "cookies-next";
import Swal from "sweetalert2";
import { axiosPostMultipart } from "@/app/services";
import InputSelect from "./components/InputSelect";

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
  const [FechaNacimiento, setFechaNacimiento] = useState<Date>(new Date())
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
  const [Localidad, setLocalidad] = useState("")
  const [CodigoPostal, setCodigoPostal] = useState("")
  const [NivelEducacion, setNivelEducacion] = useState("")
  const [Activo, setActivo] = useState(true)
  const [FechaEgreso, setFechaEgreso] = useState<Date>(new Date())
  const [EstadoAmbiental, setEstadoAmbiental] = useState("")
  const [EPreocupacional, setEPreocupacional] = useState("")
  const [TipoLiquidacion, setTipoLiquidacion] = useState("")
  const [Rotacion, setRotacion] = useState("")
  const [Turno, setTurno] = useState("")
  const [Grupo, setGrupo] = useState("")
  const [Foto, setFoto] = useState("")
  const [FotoNueva, setFotoNueva] = useState<File | null>(null)
  const [Observaciones, setObservaciones] = useState("")

    const createEmployee = async (values: ApiEmployeesData) => {
    const cookie = getCookie("token");
    try {
    
        const res = axiosPostMultipart("/registrar",values)
        setShowModal(false)
        Swal.fire(
            'Exito!',
            'Usuario creado!',
            'success'
        )
    }
    catch (err) {
      Swal.fire(
            'Error!',
            'Usuario no creado!',
            'error'
        )
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (FotoNueva) {
      const formData = new FormData();
      formData.append("image", FotoNueva);
      createEmployee({
        nombre: Nombre,
        apellido: Apellido,
        area: Area,
        activo: Activo,
        calle: Calle,
        categoria: Categoria,
        centro_de_costo: CentroCosto,
        localidad: Localidad,
        codigo_postal: CodigoPostal,
        contratacion: Contratacion,
        convenio: Convenio,
        cuil: Cuil,
        dpto: Dpto,
        dni: Dni,
        email: Email,
        estado_ambiental: EstadoAmbiental,
        examen_preocupacional: EPreocupacional,
        fecha_egreso: FechaEgreso,
        fecha_ingreso: FechaIngreso,
        fecha_nacimiento: FechaNacimiento,
        gerencia: Gerencia,
        grupo: Grupo,
        legajo: Legajo,
        nivel_de_educacion: NivelEducacion,
        numero: Numero,
        observaciones: Observaciones,
        pais: Pais,
        piso: Piso,
        provincia: Provincia,
        rotacion: Rotacion,
        sector: Sector,
        sexo: Sexo,
        telefono: Telefono,
        telefono_urgencias: TelUrgencia,
        tipo_liquidacion: TipoLiquidacion,
        turno: Turno,
        image: FotoNueva,
      });
    }
  };
  
  return (
        <div className={style.modalContainer}>
            <form onSubmit={handleSubmit}>
                <div className={style.modalBox}>
                    <div className={style.modalHeader}>
                        <h2>Registrar Nuevo Empleado</h2>
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
                            
                            <InputSelect value={Sexo}
                                onChange={e => setSexo(e.target.value)}
                                required
                            >
                                <option value="">Sexo</option>
                                <option value="H">Masculino</option>
                                <option value="M">Femenino</option>
                                <option value="O">Otro</option>
                            </InputSelect>
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
                            <InputForm title="Localidad"
                                required={true}
                                type="text"
                                onChange={e => setLocalidad(e.target.value)}
                                value={Localidad}
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
                            <InputSelect value={Contratacion}
                                onChange={e => setContratacion(e.target.value)}
                                required
                            >
                                <option value="">Contratacion:</option>
                                <option value="eventual">Eventual</option>
                                <option value="agencia">Agencia</option>
                                <option value="efectivo">Efectivo</option>
                                <option value="externo">Externo</option>
                            </InputSelect>
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
                            <InputSelect value={Convenio}
                                onChange={e => setConvenio(e.target.value)}
                                required
                            >
                                <option value="">Convenio:</option>
                                <option value="plastico">Plastico</option>
                                <option value="fuera de convenio">Fuera de convenio</option>
                            </InputSelect>
                        </div>
                        <div className={style.inputcontainer}>
                            <InputSelect value={Categoria}
                                onChange={e => setCategoria(e.target.value)}
                                required
                            >
                                <option value="">Categoria:</option>
                                <option value="operario">Operario</option>
                                <option value="auxiliar">Auxiliar</option>
                                <option value="operador">Operador</option>
                                <option value="operador calificado">Operador calificado</option>
                                <option value="operador especializado">Operador especializado</option>
                                <option value="oficial especializado">Oficial especializado</option>
                                <option value="medio oficial mantenimiento">Medio oficial mantenimiento</option>
                                <option value="oficial de mantenimiento">Oficial de mantenimiento</option>
                                <option value="nivel 1">Nivel 1</option>
                                <option value="nivel 2">Nivel 2</option>
                                <option value="nivel 3">Nivel 3</option>
                                <option value="nivel 4">Nivel 4</option>
                                <option value="nivel 5">Nivel 5</option>
                                <option value="capataz">Capataz</option>
                                <option value="ayudante de chofer">Ayudante de chofer</option>
                                <option value="conductor de autoelevador">Conductor de autoelevador</option>
                                <option value="proveedor">Proveedor</option>
                            </InputSelect>
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
                            <InputForm title="Estado Ambiental"
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
                            <InputSelect value={TipoLiquidacion}
                                onChange={e => setTipoLiquidacion(e.target.value)}
                                required
                            >
                                <option value="">Tipo de liquidacion:</option>
                                <option value="jornal">Jornal</option>
                                <option value="mensual">Mensual</option>
                            </InputSelect>
                        </div>
                        <div className={style.inputcontainer}>
                            <InputSelect value={Rotacion}
                                onChange={e => setRotacion(e.target.value)}
                                required
                            >
                                <option value="">Rotacion:</option>
                                <option value="fijo">Fijo</option>
                                <option value="6x1">6x1</option>
                            </InputSelect>
                            <InputSelect value={Turno}
                                onChange={e => setTurno(e.target.value)}
                                required
                            >
                                <option value="">Turno:</option>
                                <option value="mañana">Mañana</option>
                                <option value="tarde">Tarde</option>
                                <option value="noche">Noche</option>
                                <option value="fijo">Fijo</option>
                            </InputSelect>
                        </div>
                        <div className={style.inputcontainer}>
                            <InputSelect value={Grupo}
                                onChange={e => setGrupo(e.target.value)}
                                required
                            >
                                <option value="">Grupo:</option>
                                <option value="A">Grupo A</option>
                                <option value="B">Grupo B</option>
                                <option value="C">Grupo C</option>
                                <option value="-">Ninguno</option>
                            </InputSelect>
                        </div>
                    </div>
                    <div>
                        <InputForm title="Cargar Foto Nueva"
                            required={true}
                            type="file"
                            onChange={e => e.target.files && e.target.files.length > 0 && setFotoNueva(e.target.files[0])}
                        />
                        {FotoNueva && <>
                            <br/>
                                <center>
                                    <div><Image width={250} height={250} src={URL.createObjectURL(FotoNueva)} alt="Imagen seleccionada" /></div>
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
                        <button className={style.addbtn} type="submit">Guardar</button>
                        <button className={style.addbtn}
                            type="button"
                            onClick={() => setShowModal(false)}
                        >Cerrar</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default ModelPopup;
