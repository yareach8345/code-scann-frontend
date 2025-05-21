import type PostInfoResponseDto from "~/dto/post/PostInfoResponseDto";

export default interface PostSearchResultDto {
    posts: PostInfoResponseDto[],
    numberOfPosts: number,
    page: number,
    pageSize: number,
}
