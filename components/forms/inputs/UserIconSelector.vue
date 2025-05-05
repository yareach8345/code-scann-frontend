<script setup lang="ts">
import type {SelectItem} from "~/model/SelectItem";

interface Props {
  value: string,
}

interface Emits {
  (e: 'update:value', value: string): void
}

const { value } = defineProps<Props>()
const emits = defineEmits<Emits>()

const selectedIcon = ref(value)

const icons: SelectItem[] = [
  { title: "account", value: "mdi-account-circle" },
  { title: "angular", value:  "mdi-angularjs" },
  { title: "kafka", value:  "mdi-apache-kafka" },
  { title: "bash", value:  "mdi-bash" },
  { title: "braces", value:  "mdi-code-braces" },
  { title: "json", value:  "mdi-code-json" },
  { title: "tag", value:  "mdi-code-tags" },
  { title: "dotnet", value:  "mdi-dot-net" },
  { title: "eslint", value:  "mdi-eslint" },
  { title: "git", value:  "mdi-git" },
  { title: "github", value:  "mdi-github" },
  { title: "gitlab", value:  "mdi-gitlab" },
  { title: "hexa", value:  "mdi-hexadecimal" },
  { title: "kubernetes", value:  "mdi-kubernetes" },
  { title: "c", value:  "mdi-language-c" },
  { title: "c++", value:  "mdi-language-cpp" },
  { title: "c#", value:  "mdi-language-csharp" },
  { title: "css", value:  "mdi-language-css3" },
  { title: "fortran", value:  "mdi-language-fortran" },
  { title: "go", value:  "mdi-language-go" },
  { title: "haskell", value:  "mdi-language-haskell" },
  { title: "html", value:  "mdi-language-html5" },
  { title: "java", value:  "mdi-language-java" },
  { title: "javascript", value:  "mdi-language-javascript" },
  { title: "kotlin", value:  "mdi-language-kotlin" },
  { title: "lua", value:  "mdi-language-lua" },
  { title: "markdown", value:  "mdi-language-markdown" },
  { title: "php", value:  "mdi-language-php" },
  { title: "python", value:  "mdi-language-python" },
  { title: "r", value:  "mdi-language-r" },
  { title: "ruby", value:  "mdi-language-ruby" },
  { title: "ruby on rails", value:  "mdi-language-ruby-on-rails" },
  { title: "rust", value:  "mdi-language-rust" },
  { title: "swift", value:  "mdi-language-swift" },
  { title: "typescript", value:  "mdi-language-typescript" },
  { title: "xaml", value:  "mdi-language-xaml" },
  { title: "nuxt", value:  "mdi-nuxt" },
  { title: "react", value:  "mdi-react" },
  { title: "vuejs", value:  "mdi-vuejs" },
  { title: "xml", value:  "mdi-xml" },
  { title: "unicode", value:  "mdi-unicode" },
  { title: "sass", value:  "mdi-sass" },
  { title: "branch", value:  "mdi-source-branch" },
  { title: "pull", value:  "mdi-source-pull" },
  { title: "nix", value:  "mdi-nix" },
  { title: "file-code", value:  "mdi-file-code" },
  { title: "question", value:  "mdi-help" },
  { title: "exclamation", value:  "mdi-exclamation" },
  { title: "alert", value:  "mdi-alert-outline" },
  { title: "database", value:  "mdi-database-outline"}
].sort((a, b) => a.title.localeCompare(b.title))
</script>

<template>
  <v-select
      label="유저 아이콘(선택)"
      :items="icons"
      :item-title="item => item.title"
      :item-value="item => item.value"
      v-model="selectedIcon"
      @update:menu="() => emits('update:value', selectedIcon)"
  >
    <template #item="{ props, item }">
      <v-list-item v-bind="props" :prepend-icon="item.value">
        <template v-slot:title>{{item.title}}</template>
      </v-list-item>
    </template>
    <template #selection="{ item }">
      <v-icon start class="me-2">{{ item.value }}</v-icon>
      {{ item.title }}
    </template>
  </v-select>
</template>

<style scoped>

</style>