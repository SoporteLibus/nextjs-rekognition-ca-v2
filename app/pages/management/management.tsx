import { axiosGet } from "@/app/services";
import CalendarTsx from "./components/calendar/calendar";
import HorizontalBar from "./components/cards/card"
import List from "./components/table/table";



const Management=async ()=>{
    const myarray=["Nombre","Apellido","Legajo","Total horas","Horas Diurnas","Horas Nocturnas","Semana"]
    const myarray2=[{name:"Mateo",lastname:"Lonzayes",total_horas:"163hs",horas_diurnas:"82hs",horas_nocturnas:"81hs",docket:"1263",status:"0"}]
    const area=["produccion","matriceria","mantenimiento","deposito"];
    const data=await axiosGet(`area/produccion`)
    data.data.map((obj:any)=>{
        console.log(obj.name)
    })
    return(
        <>
         <List title={"Porcetaje de horas semanal"} titlelist={myarray} items={myarray2}/>
        </>
    ) 
   
}

export default Management