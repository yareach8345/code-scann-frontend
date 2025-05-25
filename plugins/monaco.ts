import githubLight from 'monaco-themes/themes/GitHub Light.json'

export function defineCustomTheme(monaco: any) {
    console.log(`defining custom theme`)
    monaco.editor.defineTheme('github-light', githubLight)
    monaco.editor.defineLanguage('markdown', require('monaco-languages/markdown/markdown'))
}