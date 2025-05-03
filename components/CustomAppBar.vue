<script setup lang="ts">
import { useTheme } from "vuetify";

interface Props {
  mobile?: boolean
}

const { mobile } = defineProps<Props>()

const showNav = inject<Ref<boolean>>("show-nav")

const theme = useTheme()

const iconPath = computed(() => {
  const imageName = theme.global.current.value.dark ? 'dark-icon.png' : 'light-icon.png'
  return `/icons/${imageName}`
})

const toggleNavDrawer = () => {
  if(showNav && mobile)
    showNav.value = !showNav.value
}
</script>

<template>
  <v-app-bar elevation="0" class="border-b-sm border-opacity-100">
    <client-only>
      <v-expand-x-transition>
          <v-app-bar-nav-icon v-if="mobile" @click="toggleNavDrawer"/>
      </v-expand-x-transition>
    </client-only>
    <v-app-bar-title class="ml-3">
      <div class="d-flex align-center">
        <v-img max-height="40" max-width="40" cover :src="iconPath"/>
        Code Snacc
      </div>
    </v-app-bar-title>
    <login-logout-button/>
  </v-app-bar>
</template>

<style scoped>

</style>