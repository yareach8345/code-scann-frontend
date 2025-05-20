import type {UserInfoDto} from "~/dto/user/UserInfoDto";

const userInfoStore = defineStore("userInfoStore", () => {
    const userInfo = ref<UserInfoDto | null>(null)

    const loggedIn = computed(() => userInfo.value !== null)

    return {
        userInfo
    }
})