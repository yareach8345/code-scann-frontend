import type {Language} from "@/constants/LanguagesList";

export default interface PostUploadDto {
    writerId: string,
    title: string,
    code: string,
    language: Language,
    content: string,
    tags: string[],
}
