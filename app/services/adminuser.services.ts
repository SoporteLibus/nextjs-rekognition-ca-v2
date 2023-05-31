import axios from "axios"
import { User } from "../types"

const baseURL = "https://172.18.44.10:5005/"

export const axiosLogin = (url: string, data: User) =>{
    return axios.post(`${baseURL}${url}`, data, {
        headers:{
            "Content-Type": "application/json"
        }
    })
}