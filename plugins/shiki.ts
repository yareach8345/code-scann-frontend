import {type BundledLanguage, getSingletonHighlighter} from "shiki";
import {languages} from "~/constants/Languages";

export default defineNuxtPlugin(async (nuxtApp) => {
    const highlighter = await getSingletonHighlighter({
        langs: [ ...languages ] as BundledLanguage[],
        themes: ["github-dark-high-contrast", "snazzy-light"]
    })

    nuxtApp.provide("highlighter", highlighter)
})