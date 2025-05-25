export type Language = 'asm' | 'bash' | 'c' | 'cpp' | 'csharp' | 'css' | 'fortran-free-form' | 'go' | 'haskell' | 'html' | 'java' | 'javascript' | 'json' | 'jsx' | 'kotlin' | 'lua' | 'markdown' | 'php' | 'python'| 'r' | 'ruby' | 'rust' | 'sass' | 'sql' |  'swift' | 'text' | 'typescript' | 'tsx' | 'vue' | 'xml' | 'yaml'

export interface LanguageInfo {
    value: Language,
    displayName: string,
    mdiIcon: string,
    monacoEditorLanguage: string,
}

export const languages: LanguageInfo[] = [
    {value: "bash", mdiIcon: "mdi-bash", displayName: "bash", monacoEditorLanguage: "shell" },
    {value: "c", mdiIcon: "mdi-language-c", displayName: "C", monacoEditorLanguage: "c" },
    {value: "cpp", mdiIcon: "mdi-language-cpp", displayName: "C++", monacoEditorLanguage: "cpp" },
    {value: "csharp", mdiIcon: "mdi-language-csharp", displayName: "C#", monacoEditorLanguage: "csharp" },
    {value: "css", mdiIcon: "mdi-language-css3", displayName: "CSS", monacoEditorLanguage: "css" },
    {value: "go", mdiIcon: "mdi-language-go", displayName: "GO", monacoEditorLanguage: "go" },
    {value: "html", mdiIcon: "mdi-language-html5", displayName: "HTML", monacoEditorLanguage: "html" },
    {value: "java", mdiIcon: "mdi-language-java", displayName: "JAVA", monacoEditorLanguage: "java" },
    {value: "javascript", mdiIcon: "mdi-language-javascript", displayName: "Javascript", monacoEditorLanguage: "javascript" },
    {value: "json", mdiIcon: "mdi-code-json", displayName: "JSON", monacoEditorLanguage: "json" },
    {value: "kotlin", mdiIcon: "mdi-language-kotlin", displayName: "Kotlin", monacoEditorLanguage: "kotlin" },
    {value: "lua", mdiIcon: "mdi-language-lua", displayName: "Lua", monacoEditorLanguage: "lua" },
    {value: "markdown", mdiIcon: "mdi-language-markdown", displayName: "Markdown", monacoEditorLanguage: "markdown" },
    {value: "php", mdiIcon: "mdi-language-php", displayName: "php", monacoEditorLanguage: "php" },
    {value: "python", mdiIcon: "mdi-language-python", displayName: "python", monacoEditorLanguage: "python" },
    {value: "r", mdiIcon: "mdi-language-r", displayName: "R", monacoEditorLanguage: "r" },
    {value: "ruby", mdiIcon: "mdi-language-ruby", displayName: "ruby", monacoEditorLanguage: "ruby" },
    {value: "rust", mdiIcon: "mdi-language-rust", displayName: "Rust", monacoEditorLanguage: "rust" },
    {value: "sass", mdiIcon: "mdi-sass", displayName: "sass", monacoEditorLanguage: "sass" },
    {value: "sql", mdiIcon: "mdi-database-outline", displayName: "sql", monacoEditorLanguage: "sql" },
    {value: "swift", mdiIcon: "mdi-language-swift", displayName: "swift", monacoEditorLanguage: "swift" },
    {value: "text", mdiIcon: "mdi-card-text-outline", displayName: "plain text", monacoEditorLanguage: "plaintext" },
    {value: "typescript", mdiIcon: "mdi-language-typescript", displayName: "Typescript", monacoEditorLanguage: "typescript" },
    {value: "xml", mdiIcon: "mdi-xml", displayName: "xml", monacoEditorLanguage: "xml" },
    {value: "yaml", mdiIcon: "mdi-file-outline", displayName: "yaml", monacoEditorLanguage: "yaml" },
]

export const languagesMap = new Map<Language, LanguageInfo>()
languages.forEach(language => languagesMap.set(language.value, language))