import { axiosPut, axiosPutAny } from "@/app/services"
import { useEffect } from "react";


const Upload=()=>{
    let info:any;
    let legajo:string=""
    
    const data=axiosPutAny(`habilitar/${legajo}`,info)
    
    return(

            <div>hola mundo</div>

    )
}

export default Upload