import type {AuthCheckResponseDto} from "~/dto/login/AuthCheckResponseDto";
import type {UserInfo} from "~/model/UserInfo";
import type {LoginDto} from "~/dto/login/LoginDto";
import type {LogoutResultDto} from "~/dto/login/LogoutResultDto";
import type {LoginResultDto} from "~/dto/login/LoginResultDto";

export async function sendLoginRequest(loginDto: LoginDto): Promise<LoginResultDto> {
    const { $axios } = useNuxtApp()
    console.log(`trying login with username=${loginDto.username}`)

    const response = await $axios.post<LoginResultDto>(
        "/auth/login",
        new URLSearchParams({
            username: loginDto.username,
            password: loginDto.password,
            rememberMe: loginDto.rememberMe ? "true" : "false"
        }),
        {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
    )
    const userInfo = response.data

    console.log(`loginResponse=${JSON.stringify(userInfo)}`)

    return userInfo
}

export async function authCheck(): Promise<boolean> {
    const { $axios } = useNuxtApp()

    const response = await $axios.get<AuthCheckResponseDto>("/auth/check")
    const authCheckResponse = response.data

    console.log(`authCheckResponse=${JSON.stringify(authCheckResponse)}`)

    return authCheckResponse.isAuth
}

export async function sendLogoutRequest(): Promise<LogoutResultDto> {
    const { $axios } = useNuxtApp()
    console.log(`trying logout`)

    const response = await $axios.post<LogoutResultDto>("/auth/logout")
    const logoutResult = response.data

    console.log(`logout success`)
    return logoutResult
}