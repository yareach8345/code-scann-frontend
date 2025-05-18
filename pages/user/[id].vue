<script setup lang="ts">
import type {UserInfoDto} from "~/dto/user/UserInfoDto";
import {getUserData} from "~/constants/useApi/userRequests";
import {searchNPostsWithUserId} from "~/constants/useApi/postRequests";

const route = useRoute()

const id = route.params.id
if (typeof(id) !== "string") {
  throw new Error("id is not string")
}

console.log(`trying to get user data for id=${id}`)
const userInfo = await getUserData(id)
console.log(`userInfo=${JSON.stringify(userInfo)}`)

const displayName = getDisplayName(userInfo)

const showAdminInfo = computed(() => userInfo?.banned == false && userInfo?.role === 'ADMIN')
const posts = await searchNPostsWithUserId(id)
</script>

<template>
  <v-sheet class="d-flex justify-center pa-5">
    <v-card border="sm" elevation="0" max-width="600" class="flex-grow-1 pa-4">
      <v-card-title>{{displayName}} 유저 정보</v-card-title>
      <v-divider/>
      <user-info-view :user-info="userInfo"/>
      <v-divider class="my-2"/>
      {{displayName}} 게시글
      <v-sheet>
        <minimal-post :post="post" v-for="post in posts"/>
      </v-sheet>
    </v-card>
  </v-sheet>
</template>

<style scoped>

</style>