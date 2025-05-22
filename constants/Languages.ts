export type Language = 'asm' | 'bash' | 'c' | 'cpp' | 'csharp' | 'css' | 'fortran-free-form' | 'go' | 'haskell' | 'html' | 'java' | 'javascript' | 'json' | 'jsx' | 'kotlin' | 'lua' | 'markdown' | 'php' | 'python'| 'r' | 'ruby' | 'rust' | 'sass' | 'sql' |  'swift' | 'text' | 'typescript' | 'tsx' | 'vue' | 'xml' | 'yaml'

interface LanguageInfo {
    displayName: string,
    mdiIcon: string,
}

export const languagesInfo = new Map<Language, LanguageInfo>()
languagesInfo.set("asm", { mdiIcon: "mdi-memory", displayName: "Assembly" })
languagesInfo.set("bash", { mdiIcon: "mdi-bash", displayName: "bash" })
languagesInfo.set("c", { mdiIcon: "mdi-language-c", displayName: "C" })
languagesInfo.set("cpp", { mdiIcon: "mdi-language-cpp", displayName: "C++" })
languagesInfo.set("csharp", { mdiIcon: "mdi-language-csharp", displayName: "C#" })
languagesInfo.set("css", { mdiIcon: "mdi-language-css3", displayName: "CSS" })
languagesInfo.set("fortran-free-form", { mdiIcon: "mdi-language-fortran", displayName: "Fortran" })
languagesInfo.set("go", { mdiIcon: "mdi-language-go", displayName: "GO" })
languagesInfo.set("haskell", { mdiIcon: "mdi-language-haskell", displayName: "haskell" })
languagesInfo.set("html", { mdiIcon: "mdi-language-html5", displayName: "HTML" })
languagesInfo.set("java", { mdiIcon: "mdi-language-java", displayName: "JAVA" })
languagesInfo.set("javascript", { mdiIcon: "mdi-language-javascript", displayName: "Javascript" })
languagesInfo.set("json", { mdiIcon: "mdi-code-json", displayName: "JSON" })
languagesInfo.set("jsx", { mdiIcon: "mdi-react", displayName: "JSX" })
languagesInfo.set("kotlin", { mdiIcon: "mdi-language-kotlin", displayName: "Kotlin" })
languagesInfo.set("lua", { mdiIcon: "mdi-language-lua", displayName: "Lua" })
languagesInfo.set("markdown", { mdiIcon: "mdi-language-markdown", displayName: "Markdown" })
languagesInfo.set("php", { mdiIcon: "mdi-language-php", displayName: "php" })
languagesInfo.set("python", { mdiIcon: "mdi-language-python", displayName: "python" })
languagesInfo.set("r", { mdiIcon: "mdi-language-r", displayName: "R" })
languagesInfo.set("ruby", { mdiIcon: "mdi-language-ruby", displayName: "ruby" })
languagesInfo.set("rust", { mdiIcon: "mdi-language-rust", displayName: "Rust" })
languagesInfo.set("sass", { mdiIcon: "mdi-language-sass", displayName: "sass" })
languagesInfo.set("sql", { mdiIcon: "mdi-database-outline", displayName: "sql" })
languagesInfo.set("swift", { mdiIcon: "mdi-language-swift", displayName: "swift" })
languagesInfo.set("text", { mdiIcon: "mdi-card-text-outline", displayName: "plain text" })
languagesInfo.set("typescript", { mdiIcon: "mdi-language-typescript", displayName: "Typescript" })
languagesInfo.set("tsx", { mdiIcon: "mdi-react", displayName: "TSX" })
languagesInfo.set("vue", { mdiIcon: "mdi-vuejs", displayName: "vue.js" })
languagesInfo.set("xml", { mdiIcon: "mdi-xml", displayName: "xml" })
languagesInfo.set("yaml", { mdiIcon: "mdi-file-outline", displayName: "yaml" })

export const languages = languagesInfo.keys()
