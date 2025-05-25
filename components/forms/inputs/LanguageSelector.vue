<script setup lang="ts">
import {type LanguageInfo, languages} from '~/constants/LanguagesList'

const value = defineModel<LanguageInfo | undefined>()
</script>

<template>
  <v-select
      label="언어"
      :items="languages"
      :item-title="item => item.displayName"
      :item-value="item => item"
      v-model="value"
  >
    <template #item="{ props, item }">
      <v-list-item v-bind="props" :prepend-icon="item.value.mdiIcon">
        <template v-slot:title>{{item.title}}</template>
      </v-list-item>
    </template>
    <template #selection="{ item }">
      <v-icon start class="me-2">{{ item.value.mdiIcon }}</v-icon>
      {{ item.title }}
    </template>
  </v-select>
</template>

<style scoped>

</style>