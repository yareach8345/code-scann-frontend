export default interface PostSearchDto {
    title?: String,
    writerId?: String,
    tags?: String[],
    lang?: String,
    page?: number,
    pageSize?: number
}