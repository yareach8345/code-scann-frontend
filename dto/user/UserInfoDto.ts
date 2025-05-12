export interface UserInfoDto {
    id: string
    nickname: string | null
    role: string
    banned: boolean
    quit: boolean
    warnCnt: number
    icon: string
}