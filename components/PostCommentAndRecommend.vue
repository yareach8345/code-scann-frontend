<script setup lang="ts">
import type PostInfoResponseDto from "~/dto/post/PostInfoResponseDto";
import type RecommendResponse from '~/dto/post/recommendResponse'
import { FetchError } from 'ofetch'

interface Props {
  post: PostInfoResponseDto,
}

const { post } = defineProps<Props>()

const config = useRuntimeConfig()

const didIRecommend = ref(post.didIRecommend)

const displayRecommendCount = ref(post.recommendCnt)

const calcHeartColor = (didIRecommend: boolean, isHovering: boolean) => {
  if(isHovering) {
    return 'red-darken-3'
  }

  return didIRecommend? 'red-darken-1' : 'black'
}

const clickRecommendButton = async () => {
  try {
    const method = didIRecommend.value === true ? "delete" : "post"
    console.log(`recommend ${method} 작업 수행`)

    const recommendResponse = await $fetch<RecommendResponse>(`/posts/${post.id}/recommend`, {
      method: method,
      baseURL: config.public.API_BASE_URL,
      credentials: "include",
      headers: {
        ...useRequestHeaders(['cookie'])
      }
    })

    didIRecommend.value = recommendResponse.didIRecommended
    displayRecommendCount.value = recommendResponse.recommendCnt
  } catch (error) {
    if(error instanceof FetchError && error.status === 401) {
      alert('본 기능은 로그인 이후 사용하실 수 있습니다.')
    }
    else {
      console.error(error)
    }
  }
}
</script>

<template>
  <div class="d-flex ga-sm-1">
    <div>
      <v-icon>mdi-comment-outline</v-icon>
      <span>{{post.commentCnt}}</span>
    </div>
    <div>
      <v-hover v-slot="{ isHovering, props }" >
        <v-icon
            :color="calcHeartColor(didIRecommend, isHovering ?? false)"
            class="mr-2"
            v-bind="props"
            @click="clickRecommendButton"
        >
          {{ didIRecommend ? 'mdi-heart' : 'mdi-heart-outline' }}
          mdi-heart
        </v-icon>
      </v-hover>
      <span>{{displayRecommendCount}}</span>
    </div>
  </div>
</template>

<style scoped>

</style>