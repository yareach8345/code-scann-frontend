<script setup lang="ts">
import {useLoginStore} from "~/stores/loginStore";

interface Props {
  viewonly?: boolean
}

const loginStore = useLoginStore()
const { loggedIn, displayName, userInfo } = storeToRefs(loginStore)
const activeLoginDialog = useState<boolean>("active-login-dialog")
const openLoginDialog = () => {
  activeLoginDialog.value = true
}
</script>

<template>
  <account-view v-if="loggedIn" :userInfo="userInfo!" :display-name="displayName"/>
  <v-list-item prepend-icon="mdi-login" @click="openLoginDialog" v-else>
    <v-list-item-title>로그인 하러 가기!</v-list-item-title>
    <v-list-item-subtitle>로그인 되지 않음</v-list-item-subtitle>
  </v-list-item>
</template>

<style scoped>

</style>