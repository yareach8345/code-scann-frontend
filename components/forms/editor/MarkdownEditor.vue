<script setup lang="ts">
import MilkdownEditor from "~/components/forms/editor/MilkdownEditor.vue";
import { MilkdownProvider } from "@milkdown/vue";

const content = defineModel<string>({
  default: ""
})
</script>

<template>
  <milkdown-provider>
    <milkdown-editor v-model="content"/>
  </milkdown-provider>
</template>

<style scoped>

</style>