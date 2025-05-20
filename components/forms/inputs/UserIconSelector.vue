<script setup lang="ts">
import icons from '@/constants/UserIconList'

interface Props {
  value: string,
}

interface Emits {
  (e: 'update:value', value: string): void
}

const { value } = defineProps<Props>()
const emits = defineEmits<Emits>()

const selectedIcon = ref(value.length === 0 ? "mdi-account-circle" : value)
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