<script setup lang="ts">
import {useLoginStore} from "~/stores/loginStore";

const loginStore = useLoginStore()
const { userInfo } = storeToRefs(loginStore)
if(userInfo == null)
  throw new Error(
    "userInfo is undefined"
  )

const showAdminInfo = computed(() => userInfo.value?.banned == false && userInfo.value?.role === 'ADMIN')
</script>

<template>
  <v-sheet class="ma-5 d-flex justify-center">
    <v-card border="sm" elevation="0" max-width="600" class="flex-grow-1 pa-4">
      <v-card-title>내 정보</v-card-title>
      <v-divider class="mx-2"/>
      <account-view class="border-thin mx-2 my-4 py-2" :user-info="userInfo!" viewonly/>
      <user-info-detail :user-info="userInfo!"/>
      <custom-btn to="/my-page/edit" class="mx-2">수정</custom-btn>
    </v-card>
  </v-sheet>
</template>

<style scoped>

</style>