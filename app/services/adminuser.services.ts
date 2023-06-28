import axios from "axios"
import { User } from "../types"

const baseURL = "https://rrhh-app-pds5me5fla-uc.a.run.app/"

export const axiosLogin = (url: string, data: User) =>{
    return axios.post(`${baseURL}${url}`, data, {
        headers:{
            "Content-Type": "application/json"
        }
    })
}