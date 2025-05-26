import axios from "axios";


const api = axios.create({
    baseURL:"http://localhost:5000",
   // timeout:3600,
    headers:{
        "Content-Type":"application/json"
    }
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Error en la petición:", error.message);
        return Promise.reject(error);
    }
);

export default api;