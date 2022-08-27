import axios from "axios";

const api = axios.create({
    baseURL:"https://catfact.ninja"
})

export const showCatFact = async () => {
    const response = await api.get('/fact')
    return response.data
}