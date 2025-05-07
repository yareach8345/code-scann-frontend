import {useLoginStore} from "~/stores/loginStore";

export default defineNuxtRouteMiddleware(async () => {
    const router = useRouter()
    const { loggedIn } = storeToRefs(useLoginStore())
    if(!loggedIn.value) {
        console.log("not logged in. move to home and open login dialog")
        if(import.meta.client) {
            alert("해당 페이지는 로그인 후 접속이 가능합니다.")
        }
        await router.push({
            name: "index",
            query: {
                "openLoginDialog": "true"
            }
        })
    }
})