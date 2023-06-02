import { axiosGet } from "@/app/services";
import CalendarTsx from "./components/calendar/calendar";
import HorizontalBar from "./components/cards/card"
import List from "./components/table/table";



const Management=async ()=>{
    const myarray=["Nombre","Apellido","Legajo","Total horas","Horas Diurnas","Horas Nocturnas","Semana"]
    const myarray2:any=[]
    const area=["produccion","matriceria","mantenimiento","deposito"];
    const data=await axiosGet(`dias-area/produccion`)
    const info=data.data.data
    info.map((obj:any)=>{
        let sumadorD:number=0;
        let sumadorN:number=0;
        let total:number=0;
        obj.jornada.map((obj:any)=>{
            let entrada=new Date(obj.entrada)
            entrada.setHours(entrada.getHours()-3)
            if(entrada.getHours()==6)sumadorD+=8;
            if(entrada.getHours()==14)sumadorD+=7,sumadorN+=1;
            if(entrada.getHours()==22)sumadorN+=8
        })
        total=sumadorD+sumadorN;
        myarray2.push({name:obj.nombre,lastname:obj.apellido,docket:obj.legajo,total_horas:total,horas_diurnas:sumadorD,horas_nocturnas:sumadorN})
    })

    return(
        <>
         <List title={"Porcetaje de horas semanal"} titlelist={myarray} items={myarray2}/>
        </>
    ) 
   
}

export default Management