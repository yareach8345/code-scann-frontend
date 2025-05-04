import type {UserInfo} from "~/model/UserInfo";
import type {UserExistenceResponse} from "~/dto/user/UserExistenceResponse";

export async function getMyInfo() {
    const { $axios } = useNuxtApp()
    const response = await $axios<UserInfo>("/user/me")
    const getMyInfoResponse = response.data

    console.log(`getMyInfoResponse=${JSON.stringify(getMyInfoResponse)}`)

    return getMyInfoResponse
}

export async function checkIdExist(id: string) {
    const { $axios } = useNuxtApp()

    console.log(`trying check id exist with id=${id}`)
    const response = await $axios.get<UserExistenceResponse>(`/user/${id}/check-id`)

    const checkIdExistResponse = response.data
    console.log(`check id exist response=${JSON.stringify(checkIdExistResponse)}`)

    return checkIdExistResponse
}