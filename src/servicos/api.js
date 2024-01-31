import axios from "axios";

// 13295230/json/

const API = axios.create({
    baseURL: "https://viacep.com.br/ws/json"
})

export default API
