<script setup lang="ts">
import {useLoginStore} from "~/stores/loginStore";

const activeLoginDialog = useState<boolean>("active-login-dialog")
const loginStore = useLoginStore()
const { logout } = loginStore
const { loggedIn, displayName } = storeToRefs(loginStore)

const openLoginDialog = () => {
  activeLoginDialog.value = true
}
</script>

<template>
  <div v-if="!loggedIn">
    <custom-btn icon="mdi-account-box-edit-outline" to="/join">
      join us
    </custom-btn>
    <custom-btn icon="mdi-login" v-if="!loggedIn" @click="openLoginDialog">
      login
    </custom-btn>
  </div>
  <div v-else>
    <custom-anchor to="/my-page">
      <u>hello {{ displayName }}!</u>
    </custom-anchor>
    <custom-btn icon="mdi-logout" @click="logout">
      logout
    </custom-btn>
  </div>
</template>

<style scoped>

</style>