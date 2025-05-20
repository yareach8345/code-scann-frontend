import type {UserInfoDto} from "~/dto/user/UserInfoDto";
import {defineStore} from "pinia";
import {authCheck, sendLogoutRequest, sendLoginRequest} from "~/api/authRequests";
import {getMyInfo, sendQuitRequest} from "~/api/userRequests";
import type {LoginDto} from "~/dto/login/LoginDto";

export const useLoginStore = defineStore('loginStore', () => {
    const userInfo = ref<UserInfoDto | null>(null)
    const loggedIn = computed(() => userInfo.value !== null)

    async function clearUserInfo() {
        userInfo.value = null
    }

    async function readUserInfo() {
        userInfo.value = await getMyInfo()
        console.log(`userInfo=${JSON.stringify(userInfo.value)}`)
    }

    async function updateUserInfo() {
        await readUserInfo()
    }

    async function initialize() {
        const isAuth = await authCheck()
        console.log(`isAuth=${isAuth}`)
        if(isAuth) {
            await readUserInfo()
        }
    }

    async function login(loginDto: LoginDto) {
        const loginResult = await sendLoginRequest(loginDto)
        if(loginResult.success) {
            await readUserInfo()
        }
    }

    async function logout() {
        await clearUserInfo()
        await sendLogoutRequest()
    }

    async function userQuit() {
        await clearUserInfo()
        await sendQuitRequest()
    }

    if(import.meta.client) {
        initialize()
            .then(() => console.log('initialized'))
            .catch(e => console.error(e))
    }

    return {
        userInfo,
        loggedIn,
        login,
        logout,
        updateUserInfo,
        userQuit
    }
})