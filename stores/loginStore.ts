import {defineStore} from "pinia";
import type {UserInfo} from "~/model/UserInfo";
import {authCheck, sendLogoutRequest, sendLoginRequest} from "~/constants/useApi/authRequests";
import {getMyInfo} from "~/constants/useApi/userRequests";
import type {LoginDto} from "~/dto/login/LoginDto";

export const useLoginStore = defineStore('loginStore', () => {
    const userInfo = ref<UserInfo | null>(null)
    const loggedIn = computed(() => userInfo.value !== null)
    const displayedName = computed(() => userInfo.value?.nickName ?? userInfo.value?.id ?? "unlogged")

    async function initialize() {
        const isAuth = await authCheck()
        if(isAuth) {
            userInfo.value = await getMyInfo()
        }
    }

    async function login(loginDto: LoginDto) {
        const loginResult = await sendLoginRequest(loginDto)
        userInfo.value = await getMyInfo()
    }

    async function logout() {
        userInfo.value = null
        await sendLogoutRequest()
    }

    if(process.env.MODE === 'test') {
        console.log('======== you are in test mode ========')
        userInfo.value = {
            id: 'test-id',
            nickName: 'test-user-1234',
            role: 'user',
            banned: false,
            quit: false,
            warnCnt: 0,
        }
    } else {
        if(import.meta.client) {
            initialize()
                .then(() => console.log('initialized'))
                .catch(e => console.error(e))
        }
    }

    return {
        userInfo,
        loggedIn,
        displayedName,
        login,
        logout,
    }
})