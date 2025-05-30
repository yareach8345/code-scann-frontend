<script setup lang="ts">
import type PostUploadDto from "~/dto/post/PostUploadDto";
import LanguageSelector from "~/components/forms/inputs/LanguageSelector.vue";
import {type LanguageInfo, languages, languagesMap} from "~/constants/LanguagesList";
import MarkdownEditor from "~/components/forms/editor/MarkdownEditor.vue";
import TagSelector from "~/components/forms/inputs/TagSelector.vue";
import {useLoginStore} from "~/stores/loginStore";
import type PostUploadResponseDto from "~/dto/post/PostUploadResponseDto";
import type {Language} from "@/constants/LanguagesList";

definePageMeta({
  middleware: ['login-check']
})

const config = useRuntimeConfig()

const { userInfo } = storeToRefs(useLoginStore())

interface WrittenPost {
  title: string,
  code: string,
  language: Language,
  content: string,
  tags: string[]
}

const content = reactive<WrittenPost>({
  title: "",
  code: "",
  language: "text",
  content: "",
  tags: []
})

const selectedLanguage = ref<LanguageInfo | undefined>(undefined)
watch(selectedLanguage, () => {
  content.language = selectedLanguage.value?.value ?? 'text'
})

const editorLanguage = computed(() =>
    content.language === undefined
        ? "plaintext"
        : languagesMap.get(content.language ?? "plaintext")?.monacoEditorLanguage ?? "plaintext"
)

const submitable = computed(() =>
    content.title.length > 0 &&
    content.code.length > 0 &&
    languages.filter(l => l.value === content.language).length !== 0 &&
    content.content.length > 0
)

const uploadPost = async () => {
  if(submitable.value) {
    const uploadDto: PostUploadDto = {
      writerId: userInfo.value!.id,
      ...content,
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
}
</script>

<template>
  <v-card class="text-center border-sm ma-7 pa-2" elevation="0">
    <v-card-title>게시글 작성</v-card-title>
    <v-divider class="my-2"/>
    <v-form
      @submit.prevent="uploadPost"
    >
      <v-text-field
          label="게시글 제목"
          v-model="content.title"
      />
      <language-selector v-model="selectedLanguage"/>
      <div class="border-sm mb-5 pa-1 text-left">
        <MonacoEditor
            v-model="content.code"
            :lang="editorLanguage"
            :style="{
              height: '250px',
            }"
            :options="{
              theme: 'github-light'
            }"
        />
      </div>
      <div class="border-sm mb-5 text-left">
        <markdown-editor
            v-model="content.content"
        />
      </div>
      <tag-selector
          v-model="content.tags"
      />
      <custom-btn
          submit
          :class="{
            'opacity-50' : !submitable,
          }"
      >업로드!</custom-btn>
    </v-form>
  </v-card>
</template>

<style scoped>

</style>