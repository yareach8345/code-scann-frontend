<script setup lang="ts">
interface Props {
  show?: boolean
}

const { show } = defineProps<Props>()
</script>

<template>
  <v-expand-transition>
    <div v-if="show" class="w-100 text-center position-absolute top-100 text-error text-md-h6 pb-5">
      <slot></slot>
    </div>
  </v-expand-transition>
</template>

<style scoped>

</style>