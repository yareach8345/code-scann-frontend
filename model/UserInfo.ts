export interface UserInfo {
    id: string
    nickname: string | undefined
    role: string
    banned: boolean
    quit: boolean
    warnCnt: number
}