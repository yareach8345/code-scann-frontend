<script setup lang="ts">
import {useLoginStore} from "~/stores/loginStore";
import UserIconSelector from "~/components/forms/inputs/UserIconSelector.vue";
import type {UserInfoUpdateDto} from "~/dto/user/UserInfoUpdateDto";
import ErrorAlert from "~/components/alerts/ErrorAlert.vue";
import {sendUpdateRequest} from "~/constants/useApi/userRequests";

const loginStore = useLoginStore()
const {updateUserInfo} = loginStore
const {userInfo, displayedName} = storeToRefs(loginStore)

const newUserInfo = ref(userInfo.value ? {...userInfo.value} : null)
const newNickName = ref(displayedName.value)

watch(userInfo, () => {
  newUserInfo.value = userInfo.value ? {...userInfo.value} : null
})
watch(displayedName, () => newNickName.value = displayedName.value)

const error = ref(false)

const router = useRouter()

const onSubmit = async () => {
  const userInfoUpdateDto: UserInfoUpdateDto = {
    icon: newUserInfo.value?.icon,
    nickName: newNickName.value,
  }
  try {
    await sendUpdateRequest(userInfoUpdateDto)
    await updateUserInfo()
    alert("유저 정보가 변경 되었습니다.")
    await router.push("/my-page")
  } catch(e) {
    console.error(e)
    error.value = true
    setTimeout(() => {
      error.value = false
    }, 3000)
  }
}
</script>

<template>
  <v-sheet class="ma-5 d-flex justify-center position-relative">
    <v-card border="sm" elevation="0" max-width="600" class="flex-grow-1">
      <v-card-title>내 정보</v-card-title>
      <v-divider class="mx-2"/>
      <div v-if="newUserInfo !== null &&  newNickName != undefined">
        <account-view :user-info="newUserInfo" :displayed-name="newNickName" class="border-thin ma-4 py-2" />
        <v-form @submit.prevent="onSubmit">
          <info-raw th="id"><v-text-field label="id" v-model="newUserInfo.id" disabled/></info-raw>
          <info-raw th="유저 아이콘"><user-icon-selector v-model:value="newUserInfo.icon"/></info-raw>
          <info-raw th="닉네임"><v-text-field label="새로운 닉네임" v-model="newNickName"/></info-raw>
          <custom-btn submit>수정하기</custom-btn>
        </v-form>
      </div>
    </v-card>
    <error-alert :show="error">
      수정 작업 실패
    </error-alert>
  </v-sheet>
</template>

<style scoped>

</style>