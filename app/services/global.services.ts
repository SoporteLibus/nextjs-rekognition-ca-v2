import axios from 'axios';
import { getCookie } from "cookies-next";
import { ApiEmployeesData } from '../types';

const cookie = getCookie("token");

export const baseURL = 'https://172.18.0.167:5006/api/v1/rrhh/empleados/'

export const Authorization = {
    "Content-type": "application/json; charset=UTF-8",
    "Authorization": 'Bearer ' + cookie
}

export const AuthorizationMultipart = {
    "Content-type": "multipart/form-data; charset=UTF-8",
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

export const axiosPutExtras = (url: string, data: any[]) =>{
    return axios.put(`${baseURL}${url}`, data,{
        headers: Authorization
    })
}

export const axiosPostAny = async (url: string, data: any) =>{
    return await axios.post(`${baseURL}${url}`, data,{
        headers: Authorization
    })
}

export const axiosPostMultipart = (url: string, data: ApiEmployeesData) =>{
    return axios.post(`${baseURL}${url}`, data, {
        headers: AuthorizationMultipart
    })
}

export const axiosPutMultipart = (url: string, data: ApiEmployeesData) =>{
    return axios.put(`${baseURL}${url}`, data, {
        headers: AuthorizationMultipart
    })
}
