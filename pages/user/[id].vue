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
  <v-sheet>
    <v-card border="sm" elevation="0" max-width="600" class="flex-grow-1 pa-4">
      <v-card-title>{{displayName}} 유저 정보</v-card-title>
      <account-view class="border-thin mx-2 my-4 py-2" :user-info="userInfo" :display-name="displayName" viewonly/>
      <user-info-detail :user-info="userInfo"/>
    </v-card>
  </v-sheet>
</template>

<style scoped>

</style>