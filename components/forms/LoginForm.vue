<script setup lang="ts">
import {useLoginStore} from "~/stores/loginStore";
import ErrorAlert from "~/components/alerts/ErrorAlert.vue";

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
  <div class="position-relative">
    <v-card class="pa-3 border-sm" :border="borderColor" elevation="0">
      <v-card-title>로그안으로!</v-card-title>
      <v-sheet>
        <v-form
            @submit.prevent="clickLoginButton"
        >
          <v-text-field label="id" v-model="loginInfo.id" :rules="idRules()"></v-text-field>
          <v-text-field type="password" label="password" v-model="loginInfo.password" :rules="passwordRules()"></v-text-field>
          <v-checkbox label="날 기억해줘!" name="rememberMe" v-model="loginInfo.rememberMe"/>
          <custom-btn submit>로그안으로!</custom-btn>
          <custom-btn @click="clickCloseButton">닫기</custom-btn>
        </v-form>
      </v-sheet>
    </v-card>
    <error-alert :show="error">
      로그인에 실패했습니다.
    </error-alert>
  </div>
</template>

<style scoped>

</style>