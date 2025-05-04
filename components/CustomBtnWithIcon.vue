<script setup lang="ts">
interface Props {
  icon: string,
  to?: string,
}

interface Emits {
  (e: 'click'): void
}

const { icon } = defineProps<Props>()

const emits = defineEmits<Emits>()
</script>

<template>
  <v-btn border="md opacity-100" class="ma-1" :to="to" @click="() => emits('click')">
    <ClientOnly>
      <v-icon>{{icon}}</v-icon>
    </ClientOnly>
    <slot></slot>
  </v-btn>
</template>

<style scoped>

</style>