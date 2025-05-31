<script setup lang="ts">
import type PostUploadDto from "~/dto/post/PostUploadDto";
import {useLoginStore} from "~/stores/loginStore";
import type PostUploadResponseDto from "~/dto/post/PostUploadResponseDto";
import WritePostForm from "~/components/forms/WritePostForm.vue";
import type PostInputs from "~/model/PostInputs";

definePageMeta({
  middleware: ['login-check']
})

const config = useRuntimeConfig()

const { userInfo } = storeToRefs(useLoginStore())

const defaultInputs: PostInputs ={
  title: "",
  code: "",
  language: "text",
  content: "",
  tags: []
}

const uploadPost = async (postInputs: PostInputs) => {
  const uploadDto: PostUploadDto = {
    writerId: userInfo.value!.id,
    ...postInputs,
  }
  const response = await $fetch<PostUploadResponseDto>("/posts", {
    method: "post",
    baseURL: config.public.API_BASE_URL,
    credentials: "include",
    headers: {
      ...useRequestHeaders(['cookie'])
    },
    body: uploadDto
  })
  const router = useRouter()
  console.log("업로드 링크. 새 게시글 링크 :", response.postId)
  await router.push(`/posts/${response.postId}`)
}
</script>

<template>
  <v-card class="text-center border-sm ma-7 pa-2" elevation="0">
    <v-card-title>게시글 작성</v-card-title>
    <v-divider class="my-2"/>
    <WritePostForm :post-inputs="defaultInputs" @post="uploadPost"/>
  </v-card>
</template>

<style scoped>

</style>