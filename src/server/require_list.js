import http from './axios.js'

export const getMenu = () => http.post('./silderMenu/list',{});