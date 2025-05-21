<script setup lang="ts">
import type PostSearchResponseDto from "~/dto/post/PostSearchResultDto";
import '@/styles/custom-shiki.css'

interface Props {
  posts: PostSearchResponseDto,
  paginationSize?: "x-small" | "small" | "default" | "large" | "x-large"
}

const { posts, paginationSize = "default" } = defineProps<Props>()

const page = defineModel<number>()

const numberOfPages = computed(() => Math.ceil(posts.numberOfPosts / posts.pageSize))
</script>

<template>
  <v-sheet class="px-2">
    <v-pagination
        v-model="page"
        :length="numberOfPages"
        :total-visible="7"
        border="opacity-25"
        :size="paginationSize"
    />
    <slot
        v-for="post in posts.posts"
        :key="post.id"
        :post="post"
    />
    <v-pagination
        v-model="page"
        :length="numberOfPages"
        :total-visible="7"
        border="opacity-25"
        :size="paginationSize"
    />
  </v-sheet>
</template>

<style scoped>

</style>