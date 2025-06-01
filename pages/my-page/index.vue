<script setup lang="ts">
import type {UserInfoDto} from "~/dto/user/UserInfoDto";
import {useLoginStore} from "~/stores/loginStore";
import {getMyInfo} from "~/api/userRequests";
import {definePageMeta} from "#imports";
import ShowUserInfo from "~/components/ShowUserInfo.vue";

useHead({
  title: "내 페이지"
})
definePageMeta({
  middleware: ['login-check']
})

const loginStore = useLoginStore()
const { userInfo } = storeToRefs(loginStore)
const { data } = await useAsyncData<UserInfoDto>("get-my-data", async () => getMyInfo())
console.log(data.value)
</script>

<template>
  <v-sheet v-if="userInfo" class="d-flex justify-center pa-5">
    <v-card border="sm" elevation="0" max-width="600" class="flex-grow-1 pa-4">
      <v-card-title>내 정보</v-card-title>
      <v-divider/>
      <show-user-info :userInfo="userInfo"/>
    </v-card>
  </v-sheet>
</template>

<style scoped>

</style>