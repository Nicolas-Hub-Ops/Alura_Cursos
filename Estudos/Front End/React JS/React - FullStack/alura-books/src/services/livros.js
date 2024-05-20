import axios from 'axios';

const livrosAPI = axios.create({
    baseURL: "http://localhost:3001/vehicles"
})

const get = async () => {
    const response = await livrosAPI.get('/')

    return response.data
}

export {
    get
}