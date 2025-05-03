<script setup lang="ts">
import {useLoginStore} from "~/stores/loginStore";

const loginStore = useLoginStore()
const { loggedIn, displayedName, userInfo } = storeToRefs(loginStore)
</script>

<template>
  <v-list-item prepend-icon="mdi-account-circle" to="/my-page" v-if="loggedIn">
    <v-list-item-title>{{displayedName}}</v-list-item-title>
    <v-list-item-subtitle>{{userInfo?.id}}</v-list-item-subtitle>
  </v-list-item>
  <v-list-item prepend-icon="mdi-login" to="/login" v-else>
    <v-list-item-title>로그인 하러 가기!</v-list-item-title>
    <v-list-item-subtitle>로그인 되지 않음</v-list-item-subtitle>
  </v-list-item>
</template>

<style scoped>

</style>