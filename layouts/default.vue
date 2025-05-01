<script setup lang="ts">
provide("show-nav", ref(false))
</script>

<template>
  <v-layout>
    <custom-app-bar/>
    <custom-navigation-drawer/>
    <v-main>
      <slot/>
    </v-main>
  </v-layout>
</template>

<style scoped>

</style>