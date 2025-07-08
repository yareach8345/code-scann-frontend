<script setup lang="ts">
import type PostInfoResponseDto from "~/dto/post/PostInfoResponseDto";

interface Props {
  post: PostInfoResponseDto,
}

const { post } = defineProps<Props>()

const didIRecommend = ref<boolean>(post.didIRecommend)

const displayRecommendCount = computed(() => post.recommendCnt + (didIRecommend.value ? 1 : 0))

const calcHeartColor = (didIRecommend: boolean, isHovering: boolean) => {
  if(isHovering) {
    return 'red-darken-3'
  }

  return didIRecommend? 'red-darken-1' : 'black'
}

const clickRecommendButton = () => {
  didIRecommend.value = !didIRecommend.value
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