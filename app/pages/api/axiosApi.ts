import axios from "axios";

export const axiosApi = axios.create({
    baseURL: 'http://0.0.0.0:8000/api',
    // headers: {
    //     'Authorization': `Bearer ${localStorage.getItem(ACCESS)}`
    // }
})