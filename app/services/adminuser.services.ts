import axios from "axios"
import { baseURL } from "./global.services"
import { User } from "../types"

export const axiosLogin = (url: string, data: User) =>{
    return axios.post(`${baseURL}${url}`, data, {
        headers:{
            "Content-Type": "application/json"
        }
    })
}