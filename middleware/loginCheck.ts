import {authCheck} from "~/constants/useApi/authRequests";
import {useLoginStore} from "~/stores/loginStore";
import { openLoginDialog, toHome } from "~/constants/pageControl";

export default defineNuxtRouteMiddleware(async () => {
    const isAuth = await authCheck()
    if(!isAuth) {
        console.log("로그인 안됨")
        if(import.meta.client) {
            alert("로그인이 필요한 서비스입니다.\nHome으로 이동합니다.")
        }
        await openLoginDialog()
        await toHome()
    } else {
        console.log("로그인 됨")
        const { loggedIn } = storeToRefs(useLoginStore())
        const stop = watchEffect(async () => {
            if(loggedIn.value === false) {
                console.log("로그아웃 발생")
                stop()
                if(import.meta.client) {
                    alert("로그아웃이 확인되어 Home으로 이동합니다.")
                }
                await toHome()
            }
        })
        onUnmounted(() => {
            stop()
        })
    }
})