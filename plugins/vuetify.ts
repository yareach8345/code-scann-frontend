import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import '@/styles/custom.css'

import { createVuetify } from 'vuetify'

import light from '@/themes/light.json'

export default defineNuxtPlugin(app => {
    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'light',
            themes: {
                light
            }
        }
    })
    app.vueApp.use(vuetify)
})