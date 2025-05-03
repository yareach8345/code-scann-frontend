<script setup lang="ts">
import { useDisplay } from "vuetify/framework";

const isMobile = ref(false)
const showNav = ref(true)
if(import.meta.client) {
  const { mobile } = useDisplay()
  isMobile.value = mobile.value
  watch(mobile, (c) => {
    console.log(`mobile changed to=${c}`)
    isMobile.value = mobile.value
    showNav.value = !mobile.value
  })
}

watch(isMobile, (c) => {
  console.log(`isMobile changed to=${c}`)
})

provide("show-nav", showNav)
</script>

<template>
  <v-layout>
    <custom-app-bar :mobile="isMobile"/>
    <custom-navigation-drawer :mobile="isMobile"/>
    <v-main>
      <slot/>
    </v-main>
  </v-layout>
</template>

<style scoped>

</style>