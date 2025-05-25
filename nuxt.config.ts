// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    }
  },
  app: {
    head: {
      titleTemplate: '%s | Code Snacc',
    }
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins?.push(vuetify({
          autoImport: true
        }))
      })
    },
    '@pinia/nuxt',
    'nuxt-monaco-editor'
  ],
  pinia: {
    storesDirs: ['./scores/**']
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },
})
