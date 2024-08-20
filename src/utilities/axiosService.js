import axios from "axios";


const getToken = ()=>{
 return localStorage.getItem('token');
}

export const axioInstance = axios.create({
    
    baseURL: 'http://localhost:4000/api/v1/',
    // timeout: 10000000,
    'Content-Type': 'application/json',
    headers: {
      'Accept':'application/json',
      Authorization: getToken() ? `Bearer ${getToken()}` : '', // Add Authorization header if the token exists
    },
  });