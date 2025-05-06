<script setup lang="ts">
import {useLoginStore} from "~/stores/loginStore";

interface Props {
  viewonly?: boolean
}

const { viewonly } = withDefaults(defineProps<Props>(), {
  viewonly: false,
})

const linkToMyPage = viewonly ? undefined : "/my-page"

const loginStore = useLoginStore()
const { loggedIn, displayedName, userInfo } = storeToRefs(loginStore)
const activeLoginDialog = useState<boolean>("active-login-dialog")
const openLoginDialog = () => {
  activeLoginDialog.value = true
}
</script>

<template>
  <v-list-item :to="linkToMyPage" v-if="loggedIn" :active="false">
    <template v-slot:prepend>
      <user-account-icon/>
    </template>
    <v-list-item-title>{{displayedName}}</v-list-item-title>
    <v-list-item-subtitle>{{userInfo?.id}}</v-list-item-subtitle>
  </v-list-item>
  <v-list-item prepend-icon="mdi-login" @click="openLoginDialog" v-else>
    <v-list-item-title>로그인 하러 가기!</v-list-item-title>
    <v-list-item-subtitle>로그인 되지 않음</v-list-item-subtitle>
  </v-list-item>
</template>

<style scoped>

</style>