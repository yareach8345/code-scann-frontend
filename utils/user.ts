import type {UserInfoDto} from "~/dto/user/UserInfoDto";

export function getDisplayName(userInfo: UserInfoDto | null) {
    return userInfo?.nickname ?? userInfo?.id ?? "unlogged"
}