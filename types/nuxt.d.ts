import type { Highlighter } from 'shiki'

declare module '#app' {
    interface NuxtApp {
        $highlighter: Highlighter
    }
}

export {}