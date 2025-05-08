<script setup lang="ts">
import type {UserInfoDto} from "~/dto/user/UserInfoDto";
import {useLoginStore} from "~/stores/loginStore";
import {getMyInfo} from "~/constants/useApi/userRequests";
import {definePageMeta} from "#imports";


useHead({
  title: "내 페이지"
})

const loginStore = useLoginStore()
const { userInfo } = storeToRefs(loginStore)
const { data } = await useAsyncData<UserInfoDto>("get-my-data", async () => getMyInfo())
console.log(data.value)
</script>

<template>
  <v-sheet class="ma-5 d-flex justify-center">
    <v-card border="sm" elevation="0" max-width="600" class="flex-grow-1 pa-4">
      <v-card-title>내 정보</v-card-title>
      <v-divider class="mx-2"/>
      <user-info-view
        v-if="userInfo"
        :user-info="userInfo"
      />
      <custom-btn to="/my-page/edit" class="mx-2">수정</custom-btn>
    </v-card>
  </v-sheet>
</template>

<style scoped>

</style>