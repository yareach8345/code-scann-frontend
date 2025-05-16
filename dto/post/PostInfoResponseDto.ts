import type {UserInfoDto} from "~/dto/user/UserInfoDto";

export default interface PostInfoResponseDto {
    id: number,
    writer: UserInfoDto,
    title: string,
    code: string,
    language: string,
    content: string,
    writtenAt: string,
    tags: string[],
    commentCnt: number,
    recommendCnt: number,
    didIRecommend: boolean,
}