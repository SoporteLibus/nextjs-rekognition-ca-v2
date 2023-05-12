import axios from 'axios';
import { Data } from '../pages/employees/types';

const baseURL = 'http://172.18.6.33:5005/'

export const axiosGet = (url: string) =>{
    return axios.get(`${baseURL}${url}`, {
        headers:{
            "Content-Type": "application/json"
        }
    })
}
export const axiosPost = (url: string, data: Data) =>{
    return axios.post(`${baseURL}${url}`, data, {
        headers:{
            "Content-Type": "application/json"
        }
    })
}
export const axiosDelete = (url: string) =>{
    return axios.delete(`${baseURL}${url}`,{
        headers:{
            "Content-Type": "application/json"
        }
    })
}
export const axiosPut = (url: string, data: Data) =>{
    return axios.put(`${baseURL}${url}`, data,{
        headers:{
            "Content-Type": "application/json"
        }
    })
}