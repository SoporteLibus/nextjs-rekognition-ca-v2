import axios from 'axios';
import { getCookie } from "cookies-next";
import { ApiEmployeesData } from '../types';

const cookie = getCookie("token");

export const baseURL = 'https://172.18.0.167:11005/api/v1/rrhh/empleados/'

export const Authorization = {
    "Content-type": "application/json; charset=UTF-8",
    "Authorization": 'Bearer ' + cookie
}

export const axiosGet = (url: string) =>{
    return axios.get(`${baseURL}${url}`, {
        headers: Authorization
    })
}
export const axiosPost = (url: string, data: ApiEmployeesData) =>{
    return axios.post(`${baseURL}${url}`, data, {
        headers: Authorization
    })
}
export const axiosDelete = (url: string) =>{
    return axios.delete(`${baseURL}${url}`,{
        headers: Authorization
    })
}
export const axiosPut = (url: string, data: ApiEmployeesData) =>{
    return axios.put(`${baseURL}${url}`, data,{
        headers: Authorization
    })
}