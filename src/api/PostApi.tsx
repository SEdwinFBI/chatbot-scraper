import api from "./axiosConfig";

export const postQuestion = async (question: string) => {
    try {
        const quest = {
            question: question
        }
        const response = await api.post("/ask", quest)
        console.log("Respuesta del servidor:", response.data); // Asegúrate de que se imprima
        return response.data; // Retorna los datos para usarlos en el componente
    } catch (error) {
        console.error("Error al enviar la pregunta:", error);
    }
}