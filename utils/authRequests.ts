import type {AuthCheckResponseDto} from "~/dto/login/AuthCheckResponseDto";
import type {UserInfo} from "~/model/UserInfo";

export async function sendLoginRequest(username: string, password: string): Promise<UserInfo> {
    console.log(`trying login with username=${username}`)

    const userInfo = await $fetch<UserInfo>("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            username,
            password
        }),
        credentials: "include"
    })

    console.log(`loginResponse=${JSON.stringify(userInfo)}`)

    return userInfo
}

export async function authCheck(): Promise<boolean> {
    const authCheckResponse = await $fetch<AuthCheckResponseDto>("http://localhost:8080/auth/check", {
        credentials: "include"
    })

    console.log(`authCheckResponse=${JSON.stringify(authCheckResponse)}`)

    return authCheckResponse.isAuth
}

export async function sendLogoutRequest(): Promise<void> {
    console.log(`trying logout`)

    await $fetch("http://localhost:8080/auth/logout", {
        credentials: "include"
    })

    console.log(`logout success`)
}