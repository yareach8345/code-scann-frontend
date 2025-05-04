import type {UserInfo} from "~/model/UserInfo";

export async function getMyInfo() {
    const { $axios } = useNuxtApp()
    const response = await $axios<UserInfo>("/user/me")
    const getMyInfoResponse = response.data

    console.log(`getMyInfoResponse=${JSON.stringify(getMyInfoResponse)}`)

    return getMyInfoResponse
}