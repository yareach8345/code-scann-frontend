<script setup lang="ts">
import type PostInfoResponseDto from "~/dto/post/PostSearchResultDto";

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
    <v-card-item>
      <v-chip variant="outlined" v-for="tag in post.tags.sort()" size="small" class="mr-1">
        #{{tag}}
      </v-chip>
    </v-card-item>
    <v-divider class="mx-3 opacity-20"/>
    <v-card-item>
      <div class="d-flex justify-sm-space-between">
        <div @click="moveToUserInfo">
          <v-icon>{{ post.writer.icon }}</v-icon>
          {{displayName}}
        </div>
        <post-comment-and-recommend :post="post"/>
      </div>
    </v-card-item>
  </v-card>
</template>

<style scoped>

</style>