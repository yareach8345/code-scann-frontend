<script setup lang="ts">
import {getNPosts} from "~/constants/useApi/postRequests";

useHead({
  title: "게시판"
})
console.log("hello")

const posts = await getNPosts()
</script>

<template>
  <PostList :posts="posts"/>
</template>

<style scoped>

</style>