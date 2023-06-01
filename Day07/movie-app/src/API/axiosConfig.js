import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://6465e7389c09d77a62f73f10.mockapi.io'
})

export default instance