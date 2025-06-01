<script setup lang="ts">
import ShowUserInfo from "~/components/ShowUserInfo.vue";
import type {UserInfoDto} from "~/dto/user/UserInfoDto";
import {getUserData} from "~/api/userRequests";

const route = useRoute()
const router = useRouter();

const id = route.params.id
if (typeof(id) !== "string") {
  throw new Error("id is not string")
}

const { data } = await useAsyncData<UserInfoDto>(`userInfo-${id}`, () => getUserData(id), {
  immediate: true
})

if(!data.value) {
  if(import.meta.client) {
    alert("존재하지 않는 유저입니다. 홈으로 돌아갑니다.")
    router.push("/")
  }
}
const userInfo = data

const displayName = computed(() => getDisplayName(userInfo.value))
</script>

<template>
  <v-sheet v-if="userInfo" class="d-flex justify-center pa-5">
    <v-card border="sm" elevation="0" max-width="600" class="flex-grow-1 pa-4">
      <v-card-title>{{displayName}} 유저 정보</v-card-title>
      <v-divider/>
      <show-user-info :userInfo="userInfo"/>
    </v-card>
  </v-sheet>
</template>

<style scoped>

</style>