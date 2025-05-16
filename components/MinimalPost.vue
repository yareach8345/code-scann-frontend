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
      <div class="d-flex ga-sm-1">
        <div>
          <v-icon>mdi-comment-outline</v-icon>
          <span>{{post.commentCnt}}</span>
        </div>
        <div>
          <v-icon v-if="post.didIRecommend" color="red-darken-1">mdi-heart</v-icon>
          <v-icon v-else>mdi-heart-outline</v-icon>
          <span>{{post.recommendCnt}}</span>
        </div>
      </div>
    </v-card-title>
  </v-card>
</template>

<style scoped>

</style>