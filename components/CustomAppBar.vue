<script setup lang="ts">
interface Props {
  mobile?: boolean
}

const { mobile } = defineProps<Props>()

const showNav = inject<Ref<boolean>>("show-nav")
const loggedIn = ref(false)

if(import.meta.client) {
  //todo: 이 후 세션을 다루는 코드 추가할 것
  const sessionId = useCookie("sessionId")
  loggedIn.value = sessionId.value !== undefined
}

const toggleNavDrawer = () => {
  if(showNav && mobile)
    showNav.value = !showNav.value
}
</script>

<template>
  <v-app-bar elevation="0" class="border-b-sm border-opacity-100">
    <v-expand-x-transition>
      <v-app-bar-nav-icon v-if="mobile" @click="toggleNavDrawer"/>
    </v-expand-x-transition>
    <v-app-bar-title>
      Code Snacc
    </v-app-bar-title>
    <custom-btn-with-icon icon="mdi-login" v-if="!loggedIn">
      login
    </custom-btn-with-icon>
    <custom-btn-with-icon icon="mdi-logout" v-else>
      logout
    </custom-btn-with-icon>
  </v-app-bar>
</template>

<style scoped>

</style>