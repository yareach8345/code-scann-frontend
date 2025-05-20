<script setup lang="ts">
import {definePageMeta} from "#imports";

useHead({
  title: "회원가입"
})
definePageMeta({
  middleware: ['logout-check']
})

import {checkIdExist, sendJoinRequest} from "~/api/userRequests";
import * as validators from "~/utils/inputValidators";
import UserIconSelector from "~/components/forms/inputs/UserIconSelector.vue";
import ErrorAlert from "~/components/alerts/ErrorAlert.vue";

const id = ref("")
const password = ref("")
const passwordCheck = ref("")
const nickname = ref("")
const userIcon = ref("")

const isDuplicate = ref(false)

const form = ref<HTMLFormElement | null>()

const checkId = async () => {
  return await checkIdExist(id.value)
}

const resetIsDuplicate = () => {
  if(isDuplicate.value) {
    isDuplicate.value = false
    form.value?.validate()
  }
}

const idRules = [
  ...validators.idRules(),
  (_: string) => !isDuplicate.value || "이미 존재하는 id입니다. 다른 id를 사용해주세요."
]

const passwordRules = validators.passwordRules()

const passwordCheckRules = [
  ...validators.passwordRules(),
  (value: string) => value === password.value || '앞서 입력한 비밀번호와 일치하지 않습니다.'
]

const error = ref(false)

const onSubmit = async () => {
  const checkResult = await checkId()
  isDuplicate.value = checkResult.isExists

  const validateResult = await form.value?.validate()
  if(!validateResult.valid) {
    error.value = true
    setTimeout(() => {
      error.value = false
    }, 3000)
  }

  console.log(checkResult.isExists)
  if(!checkResult.isExists) {
    const joinDto = {
      id: id.value,
      password: password.value,
      nickname: nickname.value.length > 0 ? nickname.value : null,
      icon: userIcon.value.length > 0 ? userIcon.value : null,
    }
    await sendJoinRequest(joinDto)
    useState<boolean>("active-login-dialog").value = true
    await useRouter().push("/")
  }
}
</script>

<template>
  <v-container class="d-flex flex-column align-center position-relative">
    <v-sheet class="text-lg-h5 font-weight-medium">회원가입</v-sheet>
    <v-card class="pa-3 ma-3 w-100 w-sm-75 w-lg-50" elevation="0" border="sm">
      <v-card-title class="font-weight-regular">정보입력</v-card-title>
      <v-divider class="mb-3"/>
      <v-form @submit.prevent="onSubmit" ref="form">
        <v-text-field label="아이디" v-model="id" :rules="idRules" @input="resetIsDuplicate"/>
        <v-text-field label="비밀번호" v-model="password" type="password" :rules="passwordRules" />
        <v-text-field label="비밀번호 확인" v-model="passwordCheck" type="password" :rules="passwordCheckRules" />
        <v-text-field label="닉네임(선택)" v-model="nickname" />
        <user-icon-selector v-model:value="userIcon"/><br>
        <custom-btn submit>회원가입</custom-btn>
      </v-form>
    </v-card>
    <error-alert :show="error">
      회원가입에 실패 했습니다.
    </error-alert>
  </v-container>
</template>

<style scoped>

</style>