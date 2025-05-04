<script setup lang="ts">
import {useLoginStore} from "~/stores/loginStore";

const { login } = useLoginStore()

interface Emits {
  (e: 'close'): void
}

const emits = defineEmits<Emits>()

const error = ref(false)
const borderColor = computed(() => {
  return error.value ? "error" : "border"
})

interface LoginInfo {
  id?: string,
  password?: string,
  rememberMe: boolean,
}

const loginInfo = reactive<LoginInfo>({
  rememberMe: false,
})

const closeLoginDialog = () => {
  emits('close')
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

    error.value = true
    setTimeout(() => {
      error.value = false
    }, 3000)
  }
}

const clickCloseButton = () => {
  closeLoginDialog()
}
</script>

<template>
  <v-card class="pa-3 border-md border-opacity-100 position-relative" :border="borderColor" elevation="0">
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
    <v-expand-transition>
      <div v-if="error" class="w-100 text-center position-absolute bottom-0 text-error text-md-h6 pb-5">
        로그인에 실패했습니다.
      </div>
    </v-expand-transition>
  </v-card>
</template>

<style scoped>

</style>