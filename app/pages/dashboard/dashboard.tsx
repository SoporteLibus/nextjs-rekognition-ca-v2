import { List } from "@/app/components";
import Card from "@/app/components/card/card";
import { AiOutlineEye } from 'react-icons/ai'

const titleList = ["Nombre", "Apellido", "Legajo", "Estado"]

const itemsList = [
  { name: "Angel", docket: 1200, lastname: "Coceres", status: "On time" },
  { name: "Mateo", docket: 1200, lastname: "Lonzayes", status: "Error" },
  { name: "Gustavo", docket: 1200, lastname: "Adorno", status: "Out of time" },
  { name: "Angel", docket: 1200, lastname: "Coceres", status: "In progress" },
  { name: "Mateo", docket: 1200, lastname: "Lonzayes", status: "On time" },
  { name: "Gustavo", docket: 1200, lastname: "Adorno", status: "Out of time" },
  { name: "Gustavo", docket: 1200, lastname: "Adorno", status: "Out of time" },
  { name: "Gustavo", docket: 1200, lastname: "Adorno", status: "Out of time" },
  { name: "Gustavo", docket: 1200, lastname: "Adorno", status: "Out of time" },
  { name: "Gustavo", docket: 1200, lastname: "Adorno", status: "Out of time" },
  { name: "Gustavo", docket: 1200, lastname: "Adorno", status: "Out of time" },
  { name: "Gustavo", docket: 1200, lastname: "Adorno", status: "Out of time" }
]

const cardList = [
  { icon: <AiOutlineEye size={55} />, numbers: 1.504, text: "Daily Views" },
  { icon: <AiOutlineEye size={55} />, numbers: 1.504, text: "Daily Views" },
  { icon: <AiOutlineEye size={55} />, numbers: 1.504, text: "Daily Views" },
  { icon: <AiOutlineEye size={55} />, numbers: 1.504, text: "Daily Views" },
  { icon: <AiOutlineEye size={55} />, numbers: 1.504, text: "Daily Views" },
  { icon: <AiOutlineEye size={55} />, numbers: 1.504, text: "Daily Views" }
]

const profileList = [
  { image: "/logo2.png", name: "Angel", lastname: "Coceres", status: "present" },
  { image: "/logo2.png", name: "Mateo", lastname: "Lonzayes", status: "ausent" },
  { image: "/logo2.png", name: "Angel", lastname: "Coceres", status: "present" },
  { image: "/logo2.png", name: "Mateo", lastname: "Lonzayes", status: "ausent" },
  { image: "/logo2.png", name: "Angel", lastname: "Coceres", status: "present" },
  { image: "/logo2.png", name: "Mateo", lastname: "Lonzayes", status: "ausent" },
  { image: "/logo2.png", name: "Angel", lastname: "Coceres", status: "present" },
  { image: "/logo2.png", name: "Mateo", lastname: "Lonzayes", status: "ausent" },
  { image: "/logo2.png", name: "Angel", lastname: "Coceres", status: "present" },
  { image: "/logo2.png", name: "Mateo", lastname: "Lonzayes", status: "ausent" },
  { image: "/logo2.png", name: "Angel", lastname: "Coceres", status: "present" },
  { image: "/logo2.png", name: "Mateo", lastname: "Lonzayes", status: "ausent" },
  { image: "/logo2.png", name: "Angel", lastname: "Coceres", status: "present" },
  { image: "/logo2.png", name: "Mateo", lastname: "Lonzayes", status: "ausent" }
]

const Dashboard = () => {
    return (
    <>
      <Card items={cardList} />
        <List
          title='Fichadas'
          title2="Ausencias/Presencias"
          titlelist={titleList}
          items={itemsList}
          items2={profileList}
        />
    </>
    )
}

export default Dashboard;