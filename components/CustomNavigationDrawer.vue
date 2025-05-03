<script setup lang="ts">
import navigationItems from "@/constants/navigationItems";
import {useLoginStore} from "~/stores/loginStore";

interface Props {
  mobile?: boolean
}

const { mobile } = defineProps<Props>()

const showNav = inject<Ref<boolean>>("show-nav")

const loginStore = useLoginStore()
const { loggedIn, displayedName, userInfo } = toRefs(loginStore)

</script>

<template>
  <client-only>
    <v-navigation-drawer
        elevation="0"
        class="border-b-sm border-opacity-100"
        :expand-on-hover="!mobile"
        :rail="!mobile"
        v-model="showNav"
    >
      <v-list>
        <v-list-item prepend-icon="mdi-account-circle" to="/my-page">
          <v-list-item-title>{{displayedName}}</v-list-item-title>
          <v-list-item-subtitle>{{userInfo?.id}}</v-list-item-subtitle>
        </v-list-item>
        <v-divider class="border-opacity-100 mx-2"/>
        <v-list-item v-for="navigationItem in navigationItems" :prepend-icon="navigationItem.icon" :to="navigationItem.to">
          <v-list-item-title>{{navigationItem.title}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </client-only>
</template>

<style scoped>

</style>