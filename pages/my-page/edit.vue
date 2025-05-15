<script setup lang="ts">
import {definePageMeta} from "#imports";
import {useLoginStore} from "~/stores/loginStore";
import UserIconSelector from "~/components/forms/inputs/UserIconSelector.vue";
import type {UserInfoUpdateDto} from "~/dto/user/UserInfoUpdateDto";
import ErrorAlert from "~/components/alerts/ErrorAlert.vue";
import {sendUpdateRequest} from "~/constants/useApi/userRequests";

useHead({
  title: "내 정보 수정",
})
definePageMeta({
  middleware: ['login-check']
})

const loginStore = useLoginStore()
const {updateUserInfo} = loginStore
const {userInfo} = storeToRefs(loginStore)
const displayName = computed(() => getDisplayName(userInfo.value))

const newUserInfo = ref(userInfo.value ? {...userInfo.value} : null)
const newNickname = ref(displayName.value)

watch(newNickname, () => {
  console.log(newNickname.value)
  if(newUserInfo.value) {
    newUserInfo.value.nickname = newNickname.value
  }
})

watch(userInfo, () => {
  newUserInfo.value = userInfo.value ? {...userInfo.value} : null
  newNickname.value = displayName.value
})

const error = ref(false)

const router = useRouter()

const onSubmit = async () => {
  const nicknameField = { value: newNickname.value.length > 0 ? newNickname.value : null }
  const iconField = { value: newUserInfo.value?.icon ?? null }
  const userInfoUpdateDto: UserInfoUpdateDto = {
    icon: iconField,
    nickname: nicknameField
  }
  console.log(`change to = ${JSON.stringify(userInfoUpdateDto)}`)
  try {
    const data = await sendUpdateRequest(userInfoUpdateDto)
    console.log(`UPDATE SUCCESS??? ${JSON.stringify(data)}`)
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
    <v-card border="sm" elevation="0" max-width="600" class="flex-grow-1 pa-4">
      <v-card-title>내 정보</v-card-title>
      <v-divider class="mx-2"/>
      <div v-if="newUserInfo !== null &&  newNickname != undefined">
        <account-view class="border-thin mx-2 my-4 py-2" :user-info="newUserInfo" viewonly/>
        <v-form @submit.prevent="onSubmit">
          <info-raw th="id"><v-text-field label="id" v-model="newUserInfo.id" disabled/></info-raw>
          <info-raw th="유저 아이콘"><user-icon-selector v-model:value="newUserInfo.icon"/></info-raw>
          <info-raw th="닉네임"><v-text-field label="새로운 닉네임" v-model="newNickname" placeholder="입력하지 않을 시 id를 닉네임처럼 사용합니다."/></info-raw>
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