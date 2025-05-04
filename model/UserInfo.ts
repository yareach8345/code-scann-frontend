export interface UserInfo {
    id: string
    nickName: string | undefined
    role: string
    banned: boolean
    quit: boolean
    warnCnt: number
}