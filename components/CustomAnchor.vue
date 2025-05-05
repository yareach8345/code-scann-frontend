<script setup lang="ts">
interface Props {
  icon?: string,
  to?: string,
}

const { icon, to } = defineProps<Props>()
</script>

<template>
  <v-btn class="ma-1 border-0" elevation="0" :to="to">
    <ClientOnly v-if="icon !== undefined">
      <v-icon>{{icon}}</v-icon>
    </ClientOnly>
    <slot></slot>
  </v-btn>
</template>

<style scoped>

</style>