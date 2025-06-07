import type {Language} from '~/constants/LanguagesList'
import type WriterInfoDto from "~/dto/user/WriterInfoDto";

export default interface PostInfoResponseDto {
    id: number,
    writer: WriterInfoDto,
    title: string,
    code: string,
    language: Language,
    content: string,
    writtenAt: string,
    tags: string[],
    commentCnt: number,
    recommendCnt: number,
    didIRecommend: boolean,
}