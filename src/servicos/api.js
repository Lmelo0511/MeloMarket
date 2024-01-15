import axios from "axios";

// 13295230/json/

const API = axios.create({
    baseURL: "http://viacep.com.br/ws/"
})

export default API
