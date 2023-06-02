import axios from "axios"
import { User } from "../types"

const baseURL = "https://172.18.0.167:5006/"

export const axiosLogin = (url: string, data: User) =>{
    return axios.post(`${baseURL}${url}`, data, {
        headers:{
            "Content-Type": "application/json"
        }
    })
}