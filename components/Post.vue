<script setup lang="ts">
import 'github-markdown-css/github-markdown-light.css'

import type PostInfoResponseDto from "~/dto/post/PostInfoResponseDto";
import {languagesMap} from "~/constants/LanguagesList";
import {POST_REFRESH_SYMBOL} from "~/constants/Symbols";
import {useLoginStore} from "~/stores/loginStore";

interface Props {
  post: PostInfoResponseDto
}

const router = useRouter()

const config = useRuntimeConfig()

const { post } = defineProps<Props>()

const { userInfo } = storeToRefs(useLoginStore())

const displayName = getDisplayName( post.writer )

const { $highlighter } = useNuxtApp()
const codeHtml = $highlighter.codeToHtml(post.code, { lang: post.language, theme: "snazzy-light" })

const languageInfo = languagesMap.get(post.language)

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

const refreshPost = inject(POST_REFRESH_SYMBOL)

const showControlBtns = computed(() => userInfo.value?.id === post.writer.id )
const moveToUpdatePostPage = async () => {
  await router.push(`/posts/${post.id}/update`)
}

const deletePost = async () => {
  await $fetch(`/posts/${post.id}`, {
    method: "delete",
    baseURL: config.public.API_BASE_URL,
    credentials: "include",
    headers: {
      ...useRequestHeaders(['cookie'])
    },
  })

  if(refreshPost) {
    alert("게시글 삭제 완료")
    await refreshPost()
  } else {
    console.error("refresh fail")
  }
}

const moveToPost = async () => {
  router.push(`/posts/${post.id}`)
}
</script>

<template>
  <v-card class="border-sm my-5" elevation="0">
    <v-card-title class="d-flex justify-space-between">
      <div @click="moveToPost">
        <!-- 제목 -->
        {{ post.title }}
      </div>
      <div v-if="showControlBtns">
        <!-- 삭제 수정등의 메뉴 -->
        <v-hover v-slot="{ isHovering, props }">
          <v-icon
              :class=" isHovering ? 'text-green' : '' "
              class="mr-2"
              v-bind="props"
              @click="moveToUpdatePostPage"
          >
            mdi-pencil
          </v-icon>
        </v-hover>
        <v-hover v-slot="{ isHovering, props }">
          <v-icon
              :class=" isHovering ? 'text-red' : '' "
              v-bind="props"
              @click="deletePost"
          >
            {{isHovering ? "mdi-delete-empty" : "mdi-delete"}}
          </v-icon>
        </v-hover>
      </div>
    </v-card-title>
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