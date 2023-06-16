import { axiosPostAny } from "@/app/services";
import List from "./components/table/table";
import React, { useState } from "react";
import moment from "moment";
import Select from "./components/select/Select";

const Management = async () => {
    const myarray = ["Nombre","Apellido","Legajo","Total horas","Horas Diurnas","Horas Nocturnas","Semana"]
    const myarray2 : any = []
    const area = ["produccion","matriceria","mantenimiento","deposito"];
    const [selectedValue, setSelectedValue] = useState('');
    const handleSelectChange = async (event:any) => {
      setSelectedValue(event.target.value);
    };
    let data;
    const comienzo = moment().startOf("month").format("YYYY-MM-DD");
    const fin = moment().endOf("month").format("YYYY-MM-DD");
    console.log([comienzo,fin])
    if (!selectedValue) data = await axiosPostAny(`dias-area/produccion`,[comienzo,fin]);
    else data = await axiosPostAny(`dias-area/${selectedValue}`,[comienzo,fin])

    const info = data.data.data;

    info.map((obj:any)=>{
        let sumadorD : number = 0;
        let sumadorN : number = 0;
        let total : number = 0;
        obj.jornada.map((obj:any)=>{
            let entrada = obj.entrada
            if( obj.entrada == null ){}
            else {
                entrada = new Date(entrada)
                if( entrada.getHours() == 6  && obj.salida != null ) sumadorD += 8;
                if( entrada.getHours() == 14 && obj.salida != null ) sumadorD += 7, sumadorN += 1;
                if( entrada.getHours() == 22 && obj.salida != null ) sumadorN += 8
            }         
        })
        total = sumadorD + sumadorN;
        myarray2.push({
            name: obj.nombre,
            lastname: obj.apellido,
            docket: obj.legajo,
            total_horas: total,
            horas_diurnas: sumadorD,
            horas_nocturnas: sumadorN
        })
    })

    return(
        <>
            <Select value={selectedValue} onChange={handleSelectChange} />
            <List title={"Porcetaje de horas semanal"} titlelist={myarray} items={myarray2} data={info}/>
        </>
    )
}

export default Management