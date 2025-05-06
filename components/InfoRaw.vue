<script setup lang="ts">
interface Props {
  th: string,
}

const { th } = defineProps<Props>()
</script>

<template>
  <v-row no-gutters class="ma-3">
    <v-col cols="4" class="text-right pr-3">
      <b>{{th}} :</b>
    </v-col>
    <v-col cols="8" class="text-left">
      <slot></slot>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>