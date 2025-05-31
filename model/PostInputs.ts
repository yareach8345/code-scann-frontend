import type {Language} from "~/constants/LanguagesList";

export default interface PostInputs {
    title: string,
    code: string,
    language: Language,
    content: string,
    tags: string[]
}