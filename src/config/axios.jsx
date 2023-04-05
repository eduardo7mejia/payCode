import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: `https://mapi.paycode.com.mx/api`
})

export default clienteAxios