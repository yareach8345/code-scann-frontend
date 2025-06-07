import type {UserInfoDto} from "~/dto/user/UserInfoDto";
import type WriterInfoDto from "~/dto/user/WriterInfoDto";

export function getDisplayName(userInfo: UserInfoDto | WriterInfoDto | null) {
    return userInfo?.nickname ?? userInfo?.id ?? "unlogged"
}