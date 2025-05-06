import {defineStore} from "pinia";
import type {UserInfo} from "~/model/UserInfo";
import {authCheck, sendLogoutRequest, sendLoginRequest} from "~/constants/useApi/authRequests";
import {getMyInfo} from "~/constants/useApi/userRequests";
import type {LoginDto} from "~/dto/login/LoginDto";

export const useLoginStore = defineStore('loginStore', () => {
    const userInfo = ref<UserInfo | null>(null)
    const loggedIn = computed(() => userInfo.value !== null)
    const displayedName = computed(() => userInfo.value?.nickName ?? userInfo.value?.id ?? "unlogged")

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
        if(loginResult.success)
            userInfo.value = await getMyInfo()
    }

    async function logout() {
        userInfo.value = null
        await sendLogoutRequest()
    }

    if(import.meta.client) {
        initialize()
            .then(() => console.log('initialized'))
            .catch(e => console.error(e))
    }

    return {
        userInfo,
        loggedIn,
        displayedName,
        login,
        logout,
        updateUserInfo
    }
})