import { axiosPostAny } from "@/app/services";
import List from "./components/table/table";
import { useState } from "react";
import moment from "moment";


const Management=async ()=>{

    const myarray=["Nombre","Apellido","Legajo","Total horas","Horas Diurnas","Horas Nocturnas","1er quincena","2da quincena","Mes"]

    const area=["produccion","matriceria","mantenimiento","deposito"];



    return(
        <>

         <List title={"Porcetaje de horas mensual"} titlelist={myarray}/>
        </>
    ) 
   
}

export default Management