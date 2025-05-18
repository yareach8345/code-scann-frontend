<script setup lang="ts">
import type PostInfoResponseDto from "~/dto/post/PostInfoResponseDto";

interface Props {
  post: PostInfoResponseDto,
}

const { post } = defineProps<Props>()
</script>

<template>
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
</template>

<style scoped>

</style>