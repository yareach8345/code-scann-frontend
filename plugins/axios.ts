import axios from 'axios'

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    const apiBaseUrl = config.public.API_BASE_URL
    const instance = axios.create({
        baseURL: apiBaseUrl,
        withCredentials: true,
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
            ...useRequestHeaders(['cookie'])
        }
    })

    return {
        provide: {
            axios: instance
        }
    }
})