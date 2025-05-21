<script setup lang="ts">
import type PostSearchDto from "~/dto/post/PostSearchDto";
import type PostSearchResultDto from "~/dto/post/PostSearchResultDto";

useHead({
  title: "게시판"
})

const config = useRuntimeConfig()

const route = useRoute()

// const searchOptions = ref<PostSearchDto>()

const page = ref(route.query.page ? parseInt(route.query.page as string) : 1)

watch(() => route.query, () => {
  if(route.query.page === undefined) {
    page.value=1
  }
})

const searchOptions = computed<PostSearchDto>(() => ({
  page: page.value,
  pageSize: 10,
  ...route.query
}))

const { data: searchResult, pending } = await useFetch<PostSearchResultDto>("/posts?", {
  method: "get",
  baseURL: config.public.API_BASE_URL,
  credentials: "include",
  headers: {
    ...useRequestHeaders(['cookie'])
  },
  params: searchOptions,
  watch: [ searchOptions ]
})
</script>

<template>
  <div v-if="pending">
    loading...
  </div>
  <PostList
      v-else-if="searchResult !== null"
      :posts="searchResult"
      v-model="page"
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