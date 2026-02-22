<script setup lang="ts">
import type {UserInfoDto} from "~/dto/user/UserInfoDto";
import type PostSearchResultDto from "~/dto/post/PostSearchResultDto";
import {useLoginStore} from "~/stores/loginStore";

interface Props {
  userInfo: UserInfoDto
}

const { userInfo } = defineProps<Props>()

const config = useRuntimeConfig()


const { userInfo: myInfo } = storeToRefs(useLoginStore())
const isItMe = computed(() =>
    myInfo.value !== null &&
    userInfo.id === myInfo.value?.id
)

const page = ref(1)

const { data: searchResult } = useFetch<PostSearchResultDto>("/posts", {
  method: "GET",
  key: `posts-writerId-${userInfo.id}`,
  baseURL: config.public.API_BASE_URL,
  query: {
    page,
    writerId: userInfo.id,
  },
  watch: [ page ]
})
</script>

<template>
  <user-info-view :user-info="userInfo"/>
  <custom-btn to="/my-page/edit" class="mx-2" v-if="isItMe">정보수정</custom-btn>
  <v-divider class="my-2"/>
  <div>게시글</div>
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
</template>

<style scoped>

</style>