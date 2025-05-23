import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

export function renderMarkdown(markdown: string) {
    return md.render(markdown)
}