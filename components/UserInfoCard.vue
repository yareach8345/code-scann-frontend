<script setup lang="ts">
interface Props {
  color: string,
  icon?: string,
}

const { color, icon } = defineProps<Props>()
</script>

<template>
  <v-card :color="color" class="ma-1 border-md" elevation="0">
    <v-card-title>
      <v-icon v-if="icon != undefined">{{icon}}</v-icon>
      <slot></slot>
    </v-card-title>
  </v-card>
</template>

<style scoped>

</style>