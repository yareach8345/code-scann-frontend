<script setup lang="ts">
import type { NavigationMenu } from "~/model/NavigationMenu";
import { useDisplay } from "vuetify/framework";

const showNav = inject<Ref<boolean>>("show-nav")

const isMobile = ref(false)
if(import.meta.client) {
  const { mobile } = useDisplay()
  watch(mobile, () => {
    isMobile.value = mobile.value
  })
}

const showDrawer = computed(() => !isMobile.value || (showNav !== undefined && showNav.value) )

const menus: NavigationMenu[] = [
  {
    icon: "mdi-view-list",
    title: "게시글 목록",
    to: "/"
  },
  {
    icon: "mdi-pencil",
    title: "게시글 작성",
    to: "/write"
  },
  {
    icon: "mdi-information",
    title: "사이트 정보",
    to: "/about"
  }
]
</script>

<template>
  <client-only>
    <v-navigation-drawer
        elevation="0"
        class="border-b-sm border-opacity-100"
        :expand-on-hover="!isMobile"
        :rail="!isMobile"
        v-model="showDrawer"
    >
      <v-list>
        <v-list-item prepend-icon="mdi-account-circle" to="/my-page">
          <v-list-item-title>todo: Nickname 추가하기</v-list-item-title>
          <v-list-item-subtitle>todo: id 추가하기</v-list-item-subtitle>
        </v-list-item>
        <v-divider class="border-opacity-100 mx-2"/>
        <v-list-item v-for="menu in menus" :prepend-icon="menu.icon" :to="menu.to">
          <v-list-item-title>{{menu.title}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </client-only>
</template>

<style scoped>

</style>