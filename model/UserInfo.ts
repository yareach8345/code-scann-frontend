export interface UserInfo {
    id: string
    nickName: string | null
    role: string
    banned: boolean
    quit: boolean
    warnCnt: number
    icon: string
}