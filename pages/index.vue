<script setup lang="ts">
import type PostSearchDto from "~/dto/post/PostSearchDto";
import type PostSearchResultDto from "~/dto/post/PostSearchResultDto";

useHead({
  title: "게시판"
})

const config = useRuntimeConfig()

const route = useRoute()

const searchOptions = reactive<PostSearchDto>({
  page: 1,
  pageSize: 10,
  ...route.query
})

const { data: searchResult, pending, refresh } = await useFetch<PostSearchResultDto>("/posts?", {
  method: "get",
  baseURL: config.public.API_BASE_URL,
  credentials: "include",
  headers: {
    ...useRequestHeaders(['cookie'])
  },
  params: searchOptions,
  watch: [ () => searchOptions.page ]
})
</script>

<template>
  <div v-if="pending">
    loading...
  </div>
  <PostList
      v-else-if="searchResult !== null"
      :posts="searchResult"
      v-model="searchOptions.page"
      v-slot="{ post }"
  >
    <post :post="post" />
  </PostList>
  <div v-else>
    no...
  </div>
</template>

<style scoped>

</style>