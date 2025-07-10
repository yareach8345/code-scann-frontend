<script setup lang="ts">
import type TagDto from '~/dto/tag/TagDto'

const config = useRuntimeConfig()
const { data } = await useFetch<TagDto>(`/tags`, {
  method: "get",
  baseURL: config.public.API_BASE_URL,
})
const tagList = data.value?.tags

const value = defineModel<string[]>()
</script>

<template>
  <v-select
      label="태그"
      :items="tagList"
      v-model="value"
      multiple
  />
</template>

<style scoped>

</style>