export default interface CommentDto {
    commentId: number,
    content: string,
    writerId: string,
    writerNickname: string | null,
    writerIcon: string | null,
    writtenAt: string
}