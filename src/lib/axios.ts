import axios from "axios";

export const api = axios.create({
    baseURL:'https://api.github.com/repos'
})

export const apiSearch = axios.create({
    baseURL:'https://api.github.com/'
})

