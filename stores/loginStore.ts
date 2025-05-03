import {defineStore} from "pinia";
import type {UserInfo} from "~/model/UserInfo";

export const useLoginStore = defineStore('loginStore', () => {
    const userInfo = ref<UserInfo | null>(null)
    const loggedIn = computed(() => userInfo.value !== null)
    const displayedName = computed(() => userInfo.value?.nickname ?? userInfo.value?.id ?? "unlogged")

    if(process.env.MODE === 'test') {
        console.log('======== you are in test mode ========')
        userInfo.value = {
            id: 'test-id',
            nickname: 'test-user-1234',
            role: 'user',
            banned: false,
            quit: false,
            warnCnt: 0,
        }
    } else {
        if(import.meta.client) {
            console.log('default')
        }
    }

    return {
        userInfo,
        loggedIn,
        displayedName,
    }
})