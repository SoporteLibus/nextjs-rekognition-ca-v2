import axios from 'axios';
import { Data } from '../pages/employees/types';
import { getCookie } from "cookies-next";

const cookie = getCookie("token");

export const baseURL = 'http://172.18.6.35:5005/api/v1/rrhh/empleados/'

export const Authorization = {
    "Content-type": "application/json; charset=UTF-8",
    "Authorization": 'Bearer ' + cookie
}

export const axiosGet = (url: string) =>{
    return axios.get(`${baseURL}${url}`, {
        headers: Authorization
    })
}
export const axiosPost = (url: string, data: Data) =>{
    return axios.post(`${baseURL}${url}`, data, {
        headers: Authorization
    })
}
export const axiosDelete = (url: string) =>{
    return axios.delete(`${baseURL}${url}`,{
        headers: Authorization
    })
}
export const axiosPut = (url: string, data: Data) =>{
    return axios.put(`${baseURL}${url}`, data,{
        headers: Authorization
    })
}