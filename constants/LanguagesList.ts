export type Language = 'asm' | 'bash' | 'c' | 'cpp' | 'csharp' | 'css' | 'fortran-free-form' | 'go' | 'haskell' | 'html' | 'java' | 'javascript' | 'json' | 'jsx' | 'kotlin' | 'lua' | 'markdown' | 'php' | 'python'| 'r' | 'ruby' | 'rust' | 'sass' | 'sql' |  'swift' | 'text' | 'typescript' | 'tsx' | 'vue' | 'xml' | 'yaml'

interface LanguageInfo {
    value: Language,
    displayName: string,
    mdiIcon: string,
}

export const languages: LanguageInfo[] = [
    {value: "asm", mdiIcon: "mdi-memory", displayName: "Assembly" },
    {value: "bash", mdiIcon: "mdi-bash", displayName: "bash" },
    {value: "c", mdiIcon: "mdi-language-c", displayName: "C" },
    {value: "cpp", mdiIcon: "mdi-language-cpp", displayName: "C++" },
    {value: "csharp", mdiIcon: "mdi-language-csharp", displayName: "C#" },
    {value: "css", mdiIcon: "mdi-language-css3", displayName: "CSS" },
    {value: "fortran-free-form", mdiIcon: "mdi-language-fortran", displayName: "Fortran" },
    {value: "go", mdiIcon: "mdi-language-go", displayName: "GO" },
    {value: "haskell", mdiIcon: "mdi-language-haskell", displayName: "haskell" },
    {value: "html", mdiIcon: "mdi-language-html5", displayName: "HTML" },
    {value: "java", mdiIcon: "mdi-language-java", displayName: "JAVA" },
    {value: "javascript", mdiIcon: "mdi-language-javascript", displayName: "Javascript" },
    {value: "json", mdiIcon: "mdi-code-json", displayName: "JSON" },
    {value: "jsx", mdiIcon: "mdi-react", displayName: "JSX" },
    {value: "kotlin", mdiIcon: "mdi-language-kotlin", displayName: "Kotlin" },
    {value: "lua", mdiIcon: "mdi-language-lua", displayName: "Lua" },
    {value: "markdown", mdiIcon: "mdi-language-markdown", displayName: "Markdown" },
    {value: "php", mdiIcon: "mdi-language-php", displayName: "php" },
    {value: "python", mdiIcon: "mdi-language-python", displayName: "python" },
    {value: "r", mdiIcon: "mdi-language-r", displayName: "R" },
    {value: "ruby", mdiIcon: "mdi-language-ruby", displayName: "ruby" },
    {value: "rust", mdiIcon: "mdi-language-rust", displayName: "Rust" },
    {value: "sass", mdiIcon: "mdi-sass", displayName: "sass" },
    {value: "sql", mdiIcon: "mdi-database-outline", displayName: "sql" },
    {value: "swift", mdiIcon: "mdi-language-swift", displayName: "swift" },
    {value: "text", mdiIcon: "mdi-card-text-outline", displayName: "plain text" },
    {value: "typescript", mdiIcon: "mdi-language-typescript", displayName: "Typescript" },
    {value: "tsx", mdiIcon: "mdi-react", displayName: "TSX" },
    {value: "vue", mdiIcon: "mdi-vuejs", displayName: "vue.js" },
    {value: "xml", mdiIcon: "mdi-xml", displayName: "xml" },
    {value: "yaml", mdiIcon: "mdi-file-outline", displayName: "yaml" },
]

export const languagesMap = new Map<Language, LanguageInfo>()
languages.forEach(language => languagesMap.set(language.value, language))