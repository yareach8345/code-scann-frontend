<script setup lang="ts">
import type PostInfoResponseDto from "~/dto/post/PostInfoResponseDto";

interface Props {
  posts: PostInfoResponseDto[]
}

const { posts } = defineProps<Props>()
</script>

<template>
  <v-sheet class="pa-7">
    <post
        v-for="post in posts"
        :post="post"
    />
  </v-sheet>
</template>

<style scoped>

</style>