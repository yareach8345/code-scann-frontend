<script setup lang="ts">
import type {UserInfoDto} from "~/dto/user/UserInfoDto";
import {getUserData} from "~/api/userRequests";
import type PostSearchResultDto from "~/dto/post/PostSearchResultDto";

const route = useRoute()

const config = useRuntimeConfig()

const id = route.params.id
if (typeof(id) !== "string") {
  throw new Error("id is not string")
}

const router = useRouter()

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

const page = ref(1)

const { data: searchResult } = useFetch<PostSearchResultDto>("/posts", {
  method: "GET",
  key: `posts-writerId-${id}`,
  baseURL: config.public.API_BASE_URL,
  query: {
    page
  },
  watch: [ page ]
})
</script>

<template>
  <v-sheet v-if="userInfo" class="d-flex justify-center pa-5">
    <v-card border="sm" elevation="0" max-width="600" class="flex-grow-1 pa-4">
      <v-card-title>{{displayName}} 유저 정보</v-card-title>
      <v-divider/>
      <user-info-view :user-info="userInfo"/>
      <v-divider class="my-2"/>
      {{displayName}} 게시글
      <v-container>
        <post-list
            v-if="searchResult !== null"
            :posts="searchResult"
            v-model="page"
            v-slot="{ post }"
            paginationSize="x-small"
        >
          <minimalPost :post="post" />
        </post-list>
      </v-container>
    </v-card>
  </v-sheet>
</template>

<style scoped>

</style>