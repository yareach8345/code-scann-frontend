import axios from 'axios'

export default defineNuxtPlugin(() => {
    const instance = axios.create({
        baseURL: 'http://localhost:8080',
        withCredentials: true,
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return {
        provide: {
            axios: instance
        }
    }
})