export default interface PostSearchDto {
    title?: string,
    writerId?: string,
    tags?: string[],
    lang?: string,
    page?: number,
    pageSize?: number
}