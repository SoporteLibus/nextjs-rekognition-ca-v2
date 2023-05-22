import axios from "axios"
import { User } from "../types"

const baseURL = "http://172.18.6.21:9005/"

export const axiosLogin = (url: string, data: User) =>{
    return axios.post(`${baseURL}${url}`, data, {
        headers:{
            "Content-Type": "application/json"
        }
    })
}