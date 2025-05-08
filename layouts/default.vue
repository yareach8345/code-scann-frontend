<script setup lang="ts">
import { useDisplay } from "vuetify/framework";
import LoginDialog from "~/components/dialogs/LoginDialog.vue";

const isMobile = ref(false)

/**
 * 네비게이션 상태 (생각 정리하며 한 메모)
 *
 * PC
 *  상시 열려있음 - true
 *
 * Mobile
 *  default로 평소에 닫혀있다가 - false
 *  버튼을 눌리면 toggle
 */
// console.log(isMobile.value)
const showNav = ref(!isMobile.value)
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
    <login-dialog/>
    <v-main>
      <slot/>
    </v-main>
  </v-layout>
</template>

<style scoped>

</style>