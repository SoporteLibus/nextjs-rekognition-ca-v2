import List from "./components/table/table";


const Management=async ()=>{

    const myarray=["Nombre","Apellido","Legajo","Total horas","Horas Diurnas","Horas Nocturnas","1er quincena","2da quincena","Mes"]
    return(
       <>
         <List title={"Porcetaje de horas mensual"} titlelist={myarray} />
        </>
    ) 
   
}

export default Management