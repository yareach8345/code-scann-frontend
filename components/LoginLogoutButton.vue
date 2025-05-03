<script setup lang="ts">
import {useLoginStore} from "~/stores/loginStore";

const loginStore = useLoginStore()
const { loggedIn, displayedName } = toRefs(loginStore)
</script>

<template>
  <custom-btn-with-icon icon="mdi-login" v-if="!loggedIn">
    login
  </custom-btn-with-icon>
  <div v-else>
    hello {{displayedName}}!
    <custom-btn-with-icon icon="mdi-logout">
      logout
    </custom-btn-with-icon>
  </div>
</template>

<style scoped>

</style>