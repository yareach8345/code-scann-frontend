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
    ...postInputs,
  }
  await $fetch<PostUploadResponseDto>("/posts", {
    method: "post",
    baseURL: config.public.API_BASE_URL,
    credentials: "include",
    headers: {
      ...useRequestHeaders(['cookie'])
    },
    body: uploadDto
  })
  const router = useRouter()
  alert("게시글 등록 완료")
  await router.push('/')
}
</script>

<template>
  <v-card class="text-center border-sm ma-7 pa-2" elevation="0">
    <v-card-title>게시글 작성</v-card-title>
    <v-divider class="my-2"/>
    <WritePostForm :post-inputs="defaultInputs" :submit-text="'업로드'" @post="uploadPost"/>
  </v-card>
</template>

<style scoped>

</style>