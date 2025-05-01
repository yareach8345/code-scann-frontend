<script setup lang="ts">
import { useDisplay } from "vuetify/framework";

const isMobile = ref(false)
const showNav = inject<Ref<boolean>>("show-nav")
const logined = ref(false)

if(import.meta.client) {
  const { mobile } = useDisplay()
  watch(mobile, () => {
    isMobile.value = mobile.value
  })

  //todo: 이 후 세션을 다루는 코드 추가할 것
  const sessionId = useCookie("sessionId")
  logined.value = sessionId !== undefined
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
    <v-btn border="md opacity-100" v-if="logined">
      <v-icon>mdi-login</v-icon>
      login
    </v-btn>
    <v-btn border="md opacity-100" v-else>
      <v-icon>mdi-logout</v-icon>
      logout
    </v-btn>
  </v-app-bar>
</template>

<style scoped>

</style>