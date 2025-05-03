import type {UserInfo} from "~/model/UserInfo";

export async function getMyInfo() {
    const getMyInfoResponse = await $fetch<UserInfo>("http://localhost:8080/user/me", {
        credentials: "include"
    })
    console.log(`getMyInfoResponse=${JSON.stringify(getMyInfoResponse)}`)
    return getMyInfoResponse
}