<script setup lang="ts">
import type PostSearchDto from "~/dto/post/PostSearchDto";
import type PostSearchResultDto from "~/dto/post/PostSearchResultDto";
import SearchPostForm from "@/components/forms/SearchPostForm.vue";
import {POST_REFRESH_SYMBOL} from "~/constants/Symbols";

useHead({
  title: "게시판"
})

const config = useRuntimeConfig()

const route = useRoute()

const page = ref(route.query.page ? parseInt(route.query.page as string) : 1)

watch(() => route.query, () => {
  if(route.query.page === undefined) {
    page.value=1
  }
})

const searchOptions = computed<PostSearchDto>(() => ({
  page: page.value,
  pageSize: route.query.pageSize ? parseInt(route.query.pageSize as string) : undefined,
  tags: route.query.tags ? (route.query.tags as string).split(",") : undefined,
  lang: route.query.lang ? (route.query.lang as string) : undefined,
  title: route.query.title ? (route.query.title as string) : undefined,
}))

const { data: searchResult, refresh: postRefresh, pending } = await useFetch<PostSearchResultDto>("/posts?", {
  method: "get",
  baseURL: config.public.API_BASE_URL,
  credentials: "include",
  headers: {
    ...useRequestHeaders(['cookie'])
  },
  params: searchOptions,
  watch: [ searchOptions ]
})

provide(POST_REFRESH_SYMBOL, postRefresh)
</script>

<template>
  <div v-if="pending">
    loading...
  </div>
  <div v-else-if="searchResult !== null">
    <search-post-form :initOptions="searchOptions" />
    <PostList
        :posts="searchResult"
        v-model="page"
        v-slot="{ post }"
    >
      <post :post="post" />
    </PostList>
  </div>
  <div v-else>
    no...
  </div>
</template>

<style scoped>

</style>