export async function toHome() {
    const router = useRouter()
    await router.push("/")
}

export async function openLoginDialog() {
    const activeLoginDialog = useState<boolean>("active-login-dialog")
    activeLoginDialog.value = true
}