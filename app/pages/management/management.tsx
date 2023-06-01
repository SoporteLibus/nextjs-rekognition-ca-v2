import CalendarTsx from "./components/calendar/calendar";
import HorizontalBar from "./components/cards/card"
import ChartTsx from "./components/chart/chart";
import List from "./components/table/table";



const Management=()=>{
    const myarray=["Nombre","Apellido","Legajo","Semana"]
    const myarray2=[{name:"Mateo",lastname:"Lonzayes",docket:"1263",status:"0"}]
    return(
        <>
         
         <List title={"Porcetaje de horas semanal"} titlelist={myarray} items={myarray2}/>
        </>
    ) 
   
}

export default Management