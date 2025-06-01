<script setup lang="ts">
import type PostInfoResponseDto from "~/dto/post/PostInfoResponseDto";

interface Props {
  post: PostInfoResponseDto
}

const { post } = defineProps<Props>()

const moveToPost = async () => {
  const router = useRouter()
  await router.push(`/posts/${post.id}`)
}
</script>

<template>
  <v-card class="border-sm my-2 pa-1" elevation="0">
    <v-card-title class="d-flex justify-sm-space-between" @click="moveToPost">
      <div>
        {{post.title}}
      </div>
      <post-comment-and-recommend :post="post"/>
    </v-card-title>
  </v-card>
</template>

<style scoped>

</style>