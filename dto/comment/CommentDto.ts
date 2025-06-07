import type WriterInfoDto from '@/dto/user/WriterInfoDto'

export default interface CommentDto {
    commentId: number,
    content: string,
    writer: WriterInfoDto,
    writtenAt: string
}