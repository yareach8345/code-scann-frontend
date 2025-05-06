<script setup lang="ts">
import type {UserInfoDto} from "~/dto/user/UserInfoDto";

interface Props {
  userInfo: UserInfoDto,
}

const { userInfo } = defineProps<Props>()
const displayName = getDisplayName(userInfo)
const showAdminInfo = computed(() => userInfo?.banned == false && userInfo?.role === 'ADMIN')
</script>

<template>
  <info-raw th="유저 아이콘"><v-icon>{{userInfo.icon}}</v-icon></info-raw>
  <info-raw th="id">{{userInfo.id}}</info-raw>
  <info-raw th="닉네임">{{ displayName }}<sub v-if="userInfo?.nickName === null">(기본값 id 사용)</sub></info-raw>
  <info-raw th="경고">{{userInfo.warnCnt}}</info-raw>
  <user-info-card
      color="success"
      icon="mdi-shield-crown-outline"
      v-if="showAdminInfo"
  >
    어드민
  </user-info-card>
  <user-info-card
      color="error"
      icon="mdi-account-cancel"
      v-if="userInfo?.banned"
  >
    차단 된 유저입니다.
  </user-info-card>
  <user-info-card
      color="warning"
      icon="mdi-account-cancel"
      v-if="userInfo?.quit"
  >
    탈퇴한 유저입니다.
  </user-info-card>
</template>
<style scoped>

</style>