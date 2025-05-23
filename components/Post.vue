<script setup lang="ts">
import 'github-markdown-css/github-markdown-light.css'

import type PostInfoResponseDto from "~/dto/post/PostInfoResponseDto";
import { languagesInfo } from '~/constants/Languages'

interface Props {
  post: PostInfoResponseDto
}

const router = useRouter()

const { post } = defineProps<Props>()

const displayName = getDisplayName( post.writer )

const { $highlighter } = useNuxtApp()
const codeHtml = $highlighter.codeToHtml(post.code, { lang: post.language, theme: "snazzy-light" })

const languageInfo = languagesInfo.get(post.language)

const markdownContent = renderMarkdown(post.content)

const moveToUserInfo = async () => {
  await router.push(`/user/${post.writer.id}`)
}

const searchWithLanguage = async () => {
  await router.push(`/?lang=${post.language}`)
}

const searchWithTag = async (tag: string) => {
  await router.push(`/?tags=${tag}`)
}
</script>

<template>
  <v-card class="border-sm my-5" elevation="0">
    <v-card-title>{{ post.title }}</v-card-title>
    <v-divider/>
    <v-card-item>
      <div v-html="codeHtml"/>
      <div class="d-flex align-center" @click="searchWithLanguage">
        <v-icon>{{ languageInfo?.mdiIcon }}</v-icon>
        {{ languageInfo?.displayName }}
      </div>
    </v-card-item>
    <v-card-item>
      <div class="markdown-body" v-html="markdownContent"/>
    </v-card-item>
    <v-card-item>
      <v-chip
          v-for="tag in [...post.tags].sort()"
          :key="tag"
          variant="outlined"
          size="small"
          class="mr-1"
          clickable
          @click="() => searchWithTag(tag)"
      >
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