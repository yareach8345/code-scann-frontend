<script setup lang="ts">
import type PostInfoResponseDto from "~/dto/post/PostInfoResponseDto";

const config = useRuntimeConfig()
const route = useRoute()

const id = route.params.postId

const postInfo = await $fetch<PostInfoResponseDto>(`/posts/${id}`, {
  method: "get",
  baseURL: config.public.API_BASE_URL,
})
</script>

<template>
  <post :post="postInfo" showComments class="ma-2"/>
</template>

<style scoped>

</style>