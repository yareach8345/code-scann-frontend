<script setup lang="ts">
import type PostInfoResponseDto from "~/dto/post/PostInfoResponseDto";

interface Props {
  post: PostInfoResponseDto
}

const { post } = defineProps<Props>()
</script>

<template>
  <v-card class="border-sm my-2 pa-1" elevation="0">
    <v-card-title class="d-flex justify-sm-space-between">
      <div>
        {{post.title}}
      </div>
      <post-comment-and-recommend :post="post"/>
    </v-card-title>
  </v-card>
</template>

<style scoped>

</style>