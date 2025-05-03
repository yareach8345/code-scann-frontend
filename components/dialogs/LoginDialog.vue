<script setup lang="ts">
import {useLoginStore} from "~/stores/loginStore";

const active = useState("active-login-dialog", () => false)

const { login } = useLoginStore()

interface LoginInfo {
  id?: string,
  password?: string,
  rememberMe: boolean,
}

const loginInfo = reactive<LoginInfo>({
  rememberMe: false,
})

const closeLoginDialog = () => {
  active.value = false
}

const clickLoginButton = async () => {
  const loginDto = {
    username: loginInfo.id!,
    password: loginInfo.password!,
    rememberMe: loginInfo.rememberMe,
  }
  try {
    await login(loginDto)
    closeLoginDialog()
  } catch(e) {
    console.error(e)
    //todo: error처리 로직
  }
}

const clickCloseButton = () => {
  closeLoginDialog()
}
</script>

<template>
  <v-dialog
      v-model="active"
      :scrim="false"
      class="w-50"
  >
    <v-card class="pa-3 border-sm border-opacity-100" elevation="0">
      <v-card-title>로그안으로!</v-card-title>
      <v-sheet>
        <v-form
            @submit.prevent="clickLoginButton"
        >
          <v-text-field label="id" v-model="loginInfo.id" required></v-text-field>
          <v-text-field type="password" label="password" v-model="loginInfo.password" required></v-text-field>
          <v-checkbox label="날 기억해줘!" v-model="loginInfo.rememberMe"/>
          <v-btn type="submit" elevation="0" class="border-opacity-100 border-md">로그안으로!</v-btn>
          <v-btn elevation="0" class="border-md border-opacity-100" @click="clickCloseButton">닫기</v-btn>
        </v-form>
      </v-sheet>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>