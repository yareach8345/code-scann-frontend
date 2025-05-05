<script setup lang="ts">
import {checkIdExist, sendJoinRequest} from "~/constants/useApi/userRequests";
import {
  lengthLessThan,
  lengthMoreThan,
  notIncludeSpace
} from "~/utils/inputValidators";

const id = ref("")
const password = ref("")
const passwordCheck = ref("")
const nickName = ref("")

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
  notEmpty("id를 입력 해주세요."),
  notIncludeSpace("id는 공백을 포함할 수 없습니다."),
  lengthMoreThan(1, "id는 1자 이상이어야 합니다."),
  lengthLessThan(255, "id는 255자 이하여야 합니다."),
  (_: string) => !isDuplicate.value || "이미 존재하는 id입니다. 다른 id를 사용해주세요."
]

const passwordRules = [
  notEmpty("비밀번호를 입력 해주세요"),
  notIncludeSpace("비밀번호는 공백을 포함할 수 없습니다."),
  lengthMoreThan(8, "비밀번호는 8자 이상이어야 합니다."),
  lengthLessThan(255, "비밀번호는 255자 이하여야 합니다."),
]

const passwordCheckRules = [
  notEmpty("비밀번호 확인란을 입력 해주세요"),
  notIncludeSpace("비밀번호는 공백을 포함할 수 없습니다."),
  lengthMoreThan(8, "비밀번호는 8자 이상이어야 합니다."),
  lengthLessThan(255, "비밀번호는 255자 이하여야 합니다."),
  (value: string) => value === password.value || '앞서 입력한 비밀번호와 일치하지 않습니다.'
]

const onSubmit = async () => {
  const checkResult = await checkId()
  isDuplicate.value = checkResult.isExists

  form.value?.validate()

  console.log(checkResult.isExists)
  if(checkResult.isExists) {
    //true라는 것은 존재한다는 것
    console.log("존재")
  } else {
    console.log("존재x")
    const joinDto = {
      id: id.value,
      password: password.value,
      nickName: nickName.value.length > 0 ? nickName.value : null,
    }
    await sendJoinRequest(joinDto)
    useState<boolean>("active-login-dialog").value = true
    await useRouter().push("/")
  }
}
</script>

<template>
  <v-container class="d-flex flex-column align-center">
    <v-sheet class="text-lg-h5 font-weight-medium">회원가입</v-sheet>
    <v-card class="pa-3 ma-3 w-100 w-sm-75 w-lg-50" elevation="0" border="sm opacity-100">
      <v-card-title class="font-weight-regular">정보입력</v-card-title>
      <v-divider class="mb-3 opacity-100"/>
      <v-form @submit.prevent="onSubmit" ref="form">
        <v-text-field label="아이디" v-model="id" :rules="idRules" @input="resetIsDuplicate"/>
        <v-text-field label="비밀번호" v-model="password" type="password" :rules="passwordRules" />
        <v-text-field label="비밀번호 확인" v-model="passwordCheck" type="password" :rules="passwordCheckRules" />
        <v-text-field label="닉네임(선택)" v-model="nickName" />
        <custom-btn submit>회원가입</custom-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<style scoped>

</style>