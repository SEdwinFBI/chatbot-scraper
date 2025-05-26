import api from "./axiosConfig";

export const postQuestion = async (question: string) => {
    try {
        const quest = {
            question: question
        }
        const response = await api.post("/ask", quest)
    //  console.log("Respuesta del servidor:", response.data); 
        return response.data; 
    } catch (error) {
        
        return "Upss! ocurrio un problema, intenta de nuevo mas tarde. codigo 2"
    }
}