<script setup lang="ts">
import type {UserInfoDto} from "~/dto/user/UserInfoDto";

interface Props {
  userInfo: UserInfoDto,
}

const { userInfo } = defineProps<Props>()
const displayName = getDisplayName(userInfo)
</script>

<template>
  <account-view class="border-thin mx-2 my-4 py-2" :user-info="userInfo" :display-name="displayName" viewonly/>
  <user-info-detail :user-info="userInfo"/>
</template>

<style scoped>

</style>