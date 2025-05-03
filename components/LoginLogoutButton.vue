<script setup lang="ts">
import {useLoginStore} from "~/stores/loginStore";

const activeLoginDialog = useState<boolean>("active-login-dialog")
const loginStore = useLoginStore()
const { logout } = loginStore
const { loggedIn, displayedName } = storeToRefs(loginStore)

const openLoginDialog = () => {
  activeLoginDialog.value = true
}
</script>

<template>
  <div v-if="!loggedIn">
    <custom-btn-with-icon icon="mdi-login" v-if="!loggedIn" @click="openLoginDialog">
      login
    </custom-btn-with-icon>
  </div>
  <div v-else>
    hello {{displayedName}}!
    <custom-btn-with-icon icon="mdi-logout" @click="logout">
      logout
    </custom-btn-with-icon>
  </div>
</template>

<style scoped>

</style>