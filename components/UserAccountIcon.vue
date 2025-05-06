<script setup lang="ts">
import {useLoginStore} from "~/stores/loginStore";

const store = useLoginStore()
const { userInfo } = storeToRefs(store)
</script>

<template>
  <v-badge location="bottom right" color="success" v-if="userInfo?.role === 'ADMIN'">
    <v-icon border="thin">{{userInfo?.icon}}</v-icon>
  </v-badge>
  <v-icon v-else>{{userInfo?.icon}}</v-icon>
</template>

<style scoped>

</style>