<script setup lang="ts">
import type PostInfoResponseDto from "~/dto/post/PostInfoResponseDto";

interface Props {
  post: PostInfoResponseDto
}

const router = useRouter()

const { post } = defineProps<Props>()

const displayName = getDisplayName( post.writer )

const moveToUserInfo = () => {
  router.push(`/user/${post.writer.id}`)
}
</script>

<template>
  <v-card class="border-sm my-5" elevation="0">
    <v-card-title>{{ post.title }}</v-card-title>
    <v-divider/>
    <v-card-item>
      <v-card>
        <v-card-item>{{ post.language }}</v-card-item>
        <v-card-text>{{ post.code }}</v-card-text>
      </v-card>
    </v-card-item>
    <v-card-item>
      {{ post.content }}
    </v-card-item>
    <v-divider class="mx-3 opacity-20"/>
    <v-card-item @click="moveToUserInfo">
      <v-icon>{{ post.writer.icon }}</v-icon>
      {{displayName}}
    </v-card-item>
  </v-card>
</template>

<style scoped>

</style>