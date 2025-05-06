<script setup lang="ts">
import type {UserInfoDto} from "~/dto/user/UserInfoDto";
import {getUserData} from "~/constants/useApi/userRequests";

const route = useRoute()

const id = route.params.id
if (typeof(id) !== "string") {
  throw new Error("id is not string")
}

console.log(`trying to get user data for id=${id}`)
const { data, error } = await useAsyncData<UserInfoDto>("get user data", async () => await getUserData(id))
const userInfo: UserInfoDto | null = data.value
if(userInfo == null)
  throw new Error("user data is undefined")
const displayName = getDisplayName(userInfo)

const showAdminInfo = computed(() => userInfo?.banned == false && userInfo?.role === 'ADMIN')
</script>

<template>
  <v-sheet class="d-flex justify-center pa-5">
    <v-card border="sm" elevation="0" max-width="600" class="flex-grow-1 pa-4">
      <v-card-title>{{displayName}} 유저 정보</v-card-title>
      <v-divider/>
      <user-info-view :user-info="userInfo"/>
      <v-divider/>
      {{displayName}} 게시글
      <!-- 임시용 더미데이터 -->
      <v-card border="sm" elevation="0" class="ma-2">
        <v-card-title>임시 더미데이터 게시글1</v-card-title>
      </v-card>
      <v-card border="sm" elevation="0" class="ma-2">
        <v-card-title>임시 더미데이터 게시글2</v-card-title>
      </v-card>
    </v-card>
  </v-sheet>
</template>

<style scoped>

</style>