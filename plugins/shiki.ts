import {type BundledLanguage, getSingletonHighlighter} from "shiki";
import {languages} from "~/constants/LanguagesList";

export default defineNuxtPlugin(async (nuxtApp) => {
    const highlighter = await getSingletonHighlighter({
        langs: languages.map(l => l.value as BundledLanguage),
        themes: ["github-dark-high-contrast", "snazzy-light"]
    })

    nuxtApp.provide("highlighter", highlighter)
})