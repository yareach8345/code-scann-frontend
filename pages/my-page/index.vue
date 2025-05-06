<script setup lang="ts">
import {useLoginStore} from "~/stores/loginStore";

const loginStore = useLoginStore()
const { userInfo, displayName } = storeToRefs(loginStore)

const showAdminInfo = computed(() => userInfo.value?.banned == false && userInfo.value?.role === 'ADMIN')
</script>

<template>
  <v-sheet class="ma-5 d-flex justify-center">
    <v-card border="sm" elevation="0" max-width="600" class="flex-grow-1 pa-4">
      <v-card-title>내 정보</v-card-title>
      <v-divider class="mx-2"/>
      <account-view class="border-thin mx-2 my-4 py-2" :user-info="userInfo!" :display-name="displayName" viewonly/>
      <info-raw th="유저 아이콘"><v-icon>{{userInfo?.icon}}</v-icon></info-raw>
      <info-raw th="id">{{userInfo?.id}}</info-raw>
      <info-raw th="닉네임">{{ displayName }}<sub v-if="userInfo?.nickName === null">(기본값 id 사용)</sub></info-raw>
      <info-raw th="경고">{{userInfo?.warnCnt}}</info-raw>
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
      <custom-btn to="/my-page/edit" class="mx-2">수정</custom-btn>
    </v-card>
  </v-sheet>
</template>

<style scoped>

</style>