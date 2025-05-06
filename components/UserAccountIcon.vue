<script setup lang="ts">
import type {UserInfo} from "~/model/UserInfo";

interface Props {
  userInfo: UserInfo
}

const {userInfo} = defineProps<Props>()
</script>

<template>
  <v-badge dot location="bottom right" color="success" v-if="userInfo?.role === 'ADMIN'">
    <v-icon border="thin">{{userInfo?.icon}}</v-icon>
  </v-badge>
  <v-icon v-else>{{userInfo?.icon}}</v-icon>
</template>

<style scoped>

</style>