"use client"
import List from "./component/List/List";
import { TbUserOff, TbUserX, TbUserCheck, TbUserPlus, TbUser } from 'react-icons/tb'
import Card from "../components/card/Card";

const Produccion = () => {
  let ausents = 0;
  let late = 0;
  let puntual = 0;
  let extras = 0;
  const cardList = [
    { icon: <TbUserOff size={55} />, numbers: ausents, text: "Empleados ausentes", link: "" },
    { icon: <TbUser size={55} />, numbers: length - ausents, text: "Empleados presentes", link: "" },
    { icon: <TbUserX size={55} />, numbers: late, text: "Llegadas tardes", link: "" },
    { icon: <TbUserCheck size={55} />, numbers: puntual, text: "Llegadas puntuales", link: "" },
    { icon: <TbUserPlus size={55} />, numbers: extras, text: "Horas extra", link: "" },
  ]
  const titleList = ["Nombre", "Apellido", "Legajo", "Entrada","Ent. Descanso","Sal. Descanso","Salida","Turno","Estado"]
  return (
    <>
      <Card items={cardList} />
      <div className="details">
      <List
        title='Fichadas'
        titlelist={titleList}
      />
      </div>
    </>
    )
}

export default Produccion