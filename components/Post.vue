<script setup lang="ts">
import 'github-markdown-css/github-markdown-light.css'

import type PostInfoResponseDto from "~/dto/post/PostInfoResponseDto";
import {languagesMap} from "~/constants/LanguagesList";
import {POST_REFRESH_SYMBOL} from "~/constants/Symbols";
import {useLoginStore} from "~/stores/loginStore";
import DeleteAndEditButton from "~/components/DeleteAndEditButton.vue";

interface Props {
  post: PostInfoResponseDto,
  showComments?: boolean,
}

const router = useRouter()

const config = useRuntimeConfig()

const props = defineProps<Props>()
const post = props.post
const showComments = props.showComments ?? false

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
  await router.push(`/posts/${post.id}`)
}
</script>

<template>
  <v-card class="border-sm my-5" elevation="0">
    <v-card-title class="d-flex justify-space-between">
      <div @click="moveToPost">
        <!-- 제목 -->
        {{ post.title }}
      </div>
      <DeleteAndEditButton
          v-if="showControlBtns"
          @update-button-clicked="moveToUpdatePostPage"
          @delete-button-clicked="deletePost"
      />
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
        <post-comment-and-recommend
            :post="post"
        />
      </div>
    </v-card-item>
    <template
        v-if="showComments"
    >
      <v-divider/>
      <comments-view
          :postId="post.id"
      />
    </template>
  </v-card>
</template>

<style scoped>

</style>