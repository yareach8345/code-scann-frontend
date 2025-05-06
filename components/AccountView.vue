<script setup lang="ts">
import type {UserInfo} from "~/model/UserInfo";

interface Props {
  viewonly?: boolean,
  displayedName: string,
  userInfo: UserInfo
}

const props = defineProps<Props>()
const viewonly = props.viewonly ? props.viewonly : false
const { userInfo, displayedName } = toRefs(props)

const linkToMyPage = viewonly ? undefined : "/my-page"
</script>

<template>
  <v-list-item :to="linkToMyPage" :active="false">
    <template v-slot:prepend>
      <user-account-icon :user-info="userInfo"/>
    </template>
    <v-list-item-title>{{displayedName}}</v-list-item-title>
    <v-list-item-subtitle>{{userInfo?.id}}</v-list-item-subtitle>
  </v-list-item>
</template>

<style scoped>

</style>