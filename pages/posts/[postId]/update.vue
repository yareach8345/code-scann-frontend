<script setup lang="ts">
import type PostInfoResponseDto from "~/dto/post/PostInfoResponseDto";
import type PostInputs from "~/model/PostInputs";
import type PostUpdateDto from "@/dto/post/PostUpdateDto"
import WritePostForm from "~/components/forms/WritePostForm.vue";

const config = useRuntimeConfig()

const route = useRoute()

const id = route.params.postId

const postInfo = await $fetch<PostInfoResponseDto>(`/posts/${id}`, {
  method: "get",
  baseURL: config.public.API_BASE_URL,
})

console.log(postInfo)

const postInputs: PostInputs = {
  title: postInfo.title,
  code: postInfo.code,
  language: postInfo.language,
  content: postInfo.content,
  tags: postInfo.tags,
}

const updatePost = async (postInputs: PostInputs) => {
  const postUpdateDto: PostUpdateDto = { ...postInputs }
  await $fetch(`/posts/${id}`, {
    method: "patch",
    baseURL: config.public.API_BASE_URL,
    credentials: "include",
    headers: {
      ...useRequestHeaders(['cookie'])
    },
    body: postUpdateDto
  })

  alert("수정완료")
  useRouter().back()
}
</script>

<template>
  <write-post-form
      :post-inputs="postInputs"
      :submit-text="'수정'"
      @post="updatePost"
  />
</template>

<style scoped>

</style>