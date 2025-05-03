<script setup lang="ts">
interface Props {
  mobile?: boolean
}

const { mobile } = defineProps<Props>()

const showNav = inject<Ref<boolean>>("show-nav")

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
    <login-logout-button/>
  </v-app-bar>
</template>

<style scoped>

</style>