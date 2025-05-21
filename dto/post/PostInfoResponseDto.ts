import type {UserInfoDto} from "~/dto/user/UserInfoDto";
import type {Language} from "~/types/langs";

export default interface PostInfoResponseDto {
    id: number,
    writer: UserInfoDto,
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