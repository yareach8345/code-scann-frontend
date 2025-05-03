<script setup lang="ts">
import {useLoginStore} from "~/stores/loginStore";

const loginStore = useLoginStore()
const { logout } = loginStore
const { loggedIn, displayedName } = storeToRefs(loginStore)
</script>

<template>
  <custom-btn-with-icon icon="mdi-login" to="/login" v-if="!loggedIn">
    login
  </custom-btn-with-icon>
  <div v-else>
    hello {{displayedName}}!
    <custom-btn-with-icon icon="mdi-logout" @click="logout">
      logout
    </custom-btn-with-icon>
  </div>
</template>

<style scoped>

</style>