<script setup lang="ts">
import navigationItems from "@/constants/navigationItems";
import {useLoginStore} from "~/stores/loginStore";

interface Props {
  mobile?: boolean
}

const { mobile } = defineProps<Props>()

const showNav = inject<Ref<boolean>>("show-nav")

const { userInfo } = storeToRefs(useLoginStore())

const useable = (needLogin: boolean) => needLogin ? !!userInfo.value : true
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
        <account-view-item/>
        <v-divider class="mx-2"/>
        <v-list-item
            v-for="navigationItem in navigationItems"
            :prepend-icon="navigationItem.icon"
            :to="navigationItem.to"
            :disabled="!useable(navigationItem.needLogin)"
        >
          <v-list-item-title>{{navigationItem.title}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </client-only>
</template>

<style scoped>

</style>