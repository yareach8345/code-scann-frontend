import type {Language} from "@/constants/LanguagesList";

export default interface PostUploadDto {
    title: string,
    code: string,
    language: Language,
    content: string,
    tags: string[],
}
