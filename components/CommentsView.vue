<script setup lang="ts">
import type CommentDto from '@/dto/comment/CommentDto'
import {useLoginStore} from '@/stores/loginStore'
import type CommentPostDto from "~/dto/comment/CommentPostDto";
import type CommentUpdateDto from "~/dto/comment/CommentUpdateDto";

interface Props {
  postId: number
}

const { postId } = defineProps<Props>()

const config = useRuntimeConfig()

const { data: comments, refresh } = await useFetch<CommentDto[]>(`/posts/${postId}/comments`, {
  baseURL: config.public.API_BASE_URL,
})

const { userInfo, loggedIn } = storeToRefs(useLoginStore())

const useDisplayNickname = (comment: CommentDto) => getDisplayName( comment.writer )

const router = useRouter()
const onUserClick = (userId: string) => {
  router.push(`/user/${userId}`)
}

const isCommentDataNotEmpty = computed(() => comments.value?.length !== 0)
const isMyComment = (comment: CommentDto) => comment.writer.id === userInfo.value?.id

const newComment = ref("")

const submitComment = async () => {
  const commentDto: CommentPostDto = {
    content: newComment.value
  }

  await $fetch(`/posts/${postId}/comments`, {
    method: 'POST',
    body: commentDto,
    credentials: 'include',
    baseURL: config.public.API_BASE_URL,
    headers: {
      ...useRequestHeaders(['cookie'])
    }
  })

  newComment.value = ""
  await refresh()
}

const deleteComment = async (id: number) => {
  await $fetch(`/comments/${id}`, {
    method: 'DELETE',
    credentials: 'include',
    baseURL: config.public.API_BASE_URL,
    headers: {
      ...useRequestHeaders(['cookie'])
    }
  })

  await refresh()
}

const showUpdateForm = ref<undefined | number>(undefined)
const newCommentForUpdate = ref<undefined | string>(undefined)
const updateBtnClick = (id: number) => {
  showUpdateForm.value = id
  newCommentForUpdate.value = comments.value?.find(comment => comment.commentId === id)?.content
}
const updateCancelBtnClick = () => {
  showUpdateForm.value = undefined
  newCommentForUpdate.value = undefined
}
const updateComment = async () => {
  if(newCommentForUpdate.value === undefined || showUpdateForm.value === undefined) {
    throw new Error("비정상적인 요청")
  }

  const commentUpdateDto: CommentUpdateDto = {
    content: newCommentForUpdate.value
  }

  await $fetch(`/comments/${showUpdateForm.value}`, {
    method: 'PATCH',
    body: commentUpdateDto,
    credentials: 'include',
    baseURL: config.public.API_BASE_URL,
    headers: {
      ...useRequestHeaders(['cookie'])
    }
  })

  showUpdateForm.value = undefined
  newCommentForUpdate.value = undefined

  await refresh()
}
</script>

<template>
  <v-card>
    <v-card-item class="font-weight-bold">댓글</v-card-item>
    <v-form class="mx-3" v-if="loggedIn" @submit.prevent="submitComment">
      <v-text-field label="댓글" v-model="newComment"/>
      <custom-btn submit>댓글 달기</custom-btn>
    </v-form>
    <v-card-item>
      <div v-if="isCommentDataNotEmpty">
        <div v-for="comment in comments">
          <v-divider class="my-1 opacity-20" />
          <div class="d-flex">
            <div @click="() => onUserClick(comment.writer.id)">
              <v-icon>{{comment.writer.icon}}</v-icon>
              {{useDisplayNickname(comment)}}
            </div>
            <delete-and-edit-button
                v-if="isMyComment(comment)" class="ml-3"
                @delete-button-clicked="() => deleteComment(comment.commentId)"
                @update-button-clicked="() => updateBtnClick(comment.commentId)"
            />
          </div>
          <div>
            <v-form
              v-if="showUpdateForm === comment.commentId"
              @submit.prevent="updateComment"
            >
              <v-text-field label="댓글" v-model="newCommentForUpdate"/>
              <custom-btn submit>댓글 수정</custom-btn>
              <custom-btn @click="updateCancelBtnClick">취소</custom-btn>
            </v-form>
            <div v-else>{{comment.content}}</div>
          </div>
        </div>
      </div>
      <div v-else>댓글이 없습니다.</div>
    </v-card-item>
  </v-card>
</template>

<style scoped>

</style>