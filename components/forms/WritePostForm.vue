<script setup lang="ts">
import MarkdownEditor from "~/components/forms/editor/MarkdownEditor.vue";
import TagSelector from "~/components/forms/inputs/TagSelector.vue";
import LanguageSelector from "~/components/forms/inputs/LanguageSelector.vue";
import {type LanguageInfo, languages, languagesMap} from "~/constants/LanguagesList";
import type PostInputs from "~/model/PostInputs";

interface Props {
  postInputs: PostInputs,
  submitText: string
}

const props = defineProps<Props>()
const postInputs = reactive<PostInputs>(props.postInputs)

interface Emits {
  (e: 'post', post: PostInputs): void
}

const emits = defineEmits<Emits>();

const selectedLanguage = ref<LanguageInfo | undefined>(languagesMap.get(postInputs.language) ?? undefined)
watch(selectedLanguage, () => {
  postInputs.language = selectedLanguage.value?.value ?? 'text'
})

const editorLanguage = computed(() =>
    postInputs.language === undefined
        ? "plaintext"
        : languagesMap.get(postInputs.language ?? "plaintext")?.monacoEditorLanguage ?? "plaintext"
)

const submitable = computed(() =>
    postInputs.title.length > 0 &&
    postInputs.code.length > 0 &&
    languages.filter(l => l.value === postInputs.language).length !== 0 &&
    postInputs.content.length > 0
)

const onSubmit = () => {
  if(submitable.value) {
    emits('post', postInputs)
  }
}

const titleField = useTemplateRef<HTMLElement>('title-field')
onMounted(() => {
  titleField.value?.focus()
})
</script>

<template>
  <v-form
      @submit.prevent="onSubmit"
  >
    <v-text-field
        label="게시글 제목"
        v-model="postInputs.title"
    />
    <language-selector v-model="selectedLanguage"/>
    <div class="border-sm mb-5 pa-1 text-left">
      <MonacoEditor
          v-model="postInputs.code"
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
          v-model="postInputs.content"
      />
    </div>
    <tag-selector
        v-model="postInputs.tags"
    />
    <custom-btn
        submit
        :class="{
            'opacity-50' : !submitable,
          }"
    >{{props.submitText}}</custom-btn>
  </v-form>
</template>

<style scoped>

</style>