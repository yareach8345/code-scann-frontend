<script setup lang="ts">
import type CommentDto from '@/dto/comment/CommentDto'
import {useLoginStore} from '@/stores/loginStore'

interface Props {
  postId: number
}

const { postId } = defineProps<Props>()

const config = useRuntimeConfig()

const { data: comments } = await useFetch<CommentDto[]>(`/posts/${postId}/comments`, {
  baseURL: config.public.API_BASE_URL,
})

const { userInfo } = storeToRefs(useLoginStore())

const useDisplayNickname = (comment: CommentDto) => comment.writerNickname ?? comment.writerId

const router = useRouter()
const onUserClick = (userId: string) => {
  router.push(`/user/${userId}`)
}

const isCommentDataNotEmpty = computed(() => comments.value?.length !== 0)
const isMyComment = (comment: CommentDto) => comment.writerId === userInfo.value?.id
</script>

<template>
  <v-card>
    <v-card-item class="font-weight-bold">댓글</v-card-item>
    <v-card-item>
      <div v-if="isCommentDataNotEmpty">
        <table>
          <tr v-for="comment in comments">
            <td class="pr-2" @click="() => onUserClick(comment.writerId)">
              <v-icon class="mr-2">{{comment.writerIcon}}</v-icon>
              {{useDisplayNickname(comment)}}
            </td>
            <td class="d-flex justify-space-between">
              <div>{{comment.content}}</div>
              <delete-and-edit-button v-if="isMyComment(comment)" class="ml-3"/>
            </td>
          </tr>
        </table>
      </div>
      <div v-else>댓글이 없습니다.</div>
    </v-card-item>
  </v-card>
</template>

<style scoped>

</style>