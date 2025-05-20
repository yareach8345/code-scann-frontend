import {authCheck} from "~/api/authRequests";
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
    }
})