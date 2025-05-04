<script setup lang="ts">
interface Props {
  icon?: string,
  to?: string,
  submit?: boolean,
}

interface Emits {
  (e: 'click'): void
}

const { icon, to, submit } = defineProps<Props>()

const btnType = computed(() => submit !== undefined && submit ? 'submit' : 'button')

const emits = defineEmits<Emits>()
</script>

<template>
  <v-btn :type="btnType" border="md opacity-100" class="ma-1" elevation="0" :to="to" @click="() => emits('click')">
    <ClientOnly v-if="icon !== undefined">
      <v-icon>{{icon}}</v-icon>
    </ClientOnly>
    <slot></slot>
  </v-btn>
</template>

<style scoped>

</style>