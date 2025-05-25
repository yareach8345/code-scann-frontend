<script setup lang="ts">
const tagList = ['test-tag1', 'test-tag2', 'test-tag3']

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