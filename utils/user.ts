import type {UserInfoDto} from "~/dto/user/UserInfoDto";

export function getDisplayName(userInfo: UserInfoDto | null) {
    return userInfo?.nickName ?? userInfo?.id ?? "unlogged"
}