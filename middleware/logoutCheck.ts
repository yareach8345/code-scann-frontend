import {authCheck} from "~/constants/useApi/authRequests";
import {useLoginStore} from "~/stores/loginStore";
import {toHome} from "~/constants/pageControl";

export default defineNuxtRouteMiddleware(async () => {
    const isAuth = await authCheck()
    if(isAuth) {
        console.log("로그인 됨")
        if(import.meta.client) {
            alert("로그인이 되어있으면 접근 할 수 없습니다.")
        }
        await toHome()
    } else {
        console.log("로그인 안됨")
        const { loggedIn } = storeToRefs(useLoginStore())
        const stop = watchEffect(async () => {
            if(loggedIn.value === true) {
                stop()
                console.log("로그인 감지")
                if(import.meta.client) {
                    alert("로그인이 확인되어 Home으로 이동합니다.")
                }
                await toHome()
            }
        })
        onUnmounted(() => {
            stop()
        })
    }
})