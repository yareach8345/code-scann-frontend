<script setup lang="ts">
import type PostUploadDto from "~/dto/post/PostUploadDto";
import LanguageSelector from "~/components/forms/inputs/LanguageSelector.vue";
import {type LanguageInfo, languagesMap} from "~/constants/LanguagesList";
import MarkdownEditor from "~/components/forms/editor/MarkdownEditor.vue";
import TagSelector from "~/components/forms/inputs/TagSelector.vue";

// todo 업로드 전 체크사항 확인하게 하기

definePageMeta({
  middleware: ['login-check']
})

const content = reactive<PostUploadDto>({
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

const uploadPost = async () => {
  //todo: 업로드 구현하기
  console.log(content)
  console.log("업로드!")
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
      <custom-btn submit>업로드!</custom-btn>
    </v-form>
  </v-card>
</template>

<style scoped>

</style>