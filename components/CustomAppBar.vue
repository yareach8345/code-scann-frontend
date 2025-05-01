<script setup lang="ts">
import { useDisplay } from "vuetify/framework";

const isMobile = ref(false)
const showNav = inject<Ref<boolean>>("show-nav")

if(import.meta.client) {
  const { mobile } = useDisplay()
  watch(mobile, () => {
    isMobile.value = mobile.value
  })
}

const toggleNavDrawer = () => {
  if(showNav)
    showNav.value = !showNav.value
}
</script>

<template>
  <v-app-bar elevation="0" class="border-b-sm border-opacity-100">
    <v-expand-x-transition>
      <v-app-bar-nav-icon v-if="isMobile" @click="toggleNavDrawer"/>
    </v-expand-x-transition>
    <v-app-bar-title>
      Code Snacc
    </v-app-bar-title>
  </v-app-bar>
</template>

<style scoped>

</style>