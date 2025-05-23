import type { UserInfoDto } from "~/dto/user/UserInfoDto";
import type {UserExistenceResponse} from "~/dto/user/UserExistenceResponse";
import type {JoinDto} from "~/dto/user/JoinDto";
import type {UserInfoUpdateDto} from "~/dto/user/UserInfoUpdateDto";

export async function getMyInfo() {
    const { $axios } = useNuxtApp()
    const { data } = await $axios<UserInfoDto>("/me")
    const userInfo: UserInfoDto = { ...data }

    console.log(`getMyInfoResponse=${JSON.stringify(userInfo)}`)

    return userInfo
}

export async function checkIdExist(id: string) {
    const { $axios } = useNuxtApp()

    console.log(`trying check id exist with id=${id}`)
    const response = await $axios.get<UserExistenceResponse>(`/users/${id}/check-id`)

    const checkIdExistResponse = response.data
    console.log(`check id exist response=${JSON.stringify(checkIdExistResponse)}`)

    return checkIdExistResponse
}

export async function sendJoinRequest(joinDto: JoinDto) {
    const { $axios } = useNuxtApp()
    const joinResult = $axios.post<UserInfoDto>("/users", joinDto)
    console.log(`joinResult=${JSON.stringify(joinResult)}`)
}

export async function sendUpdateRequest(updateDto: UserInfoUpdateDto) {
    const { $axios } = useNuxtApp()
    const { data } = await $axios.patch<UserInfoDto>("/me", updateDto)
    console.log(`updateResult=${JSON.stringify(data)}`)
    return data
}

export async function getUserData(id: string) {
    const { $axios } = useNuxtApp()
    console.log(`trying to get user data for id=${id}`)
    const { data } = await $axios.get<UserInfoDto>(`/users/${id}`)
    return data
}

export async function sendQuitRequest() {
    const { $axios } = useNuxtApp()
    console.log(`trying to quit`)
    const response = await $axios.patch<UserInfoDto>("/me/quit")
    console.log(`quit response=${JSON.stringify(response)}`)
}