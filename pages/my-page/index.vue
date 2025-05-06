<script setup lang="ts">
import {useLoginStore} from "~/stores/loginStore";
import {useDisplay} from "vuetify/framework";

const loginStore = useLoginStore()
const { userInfo, displayedName } = storeToRefs(loginStore)

const showAdminInfo = computed(() => userInfo.value?.banned == false && userInfo.value?.role === 'ADMIN')
</script>

<template>
  <v-sheet class="ma-5 d-flex justify-center">
    <v-card border="sm" elevation="0" max-width="500" class="flex-0-0">
      <v-card-title>내 정보</v-card-title>
      <v-divider class="mx-2"/>
      <account-view-item class="border-thin ma-4 py-2" viewonly/>
        <v-table>
          <tbody>
            <table-raw th="유저 아이콘"><v-icon>{{userInfo?.icon}}</v-icon></table-raw>
            <table-raw th="id">{{userInfo?.id}}</table-raw>
            <table-raw th="닉네임">{{displayedName}}<sub v-if="userInfo?.nickName === null">(기본값 id 사용)</sub></table-raw>
            <table-raw th="경고">{{userInfo?.warnCnt}}</table-raw>
          </tbody>
      </v-table>
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
    </v-card>
  </v-sheet>
</template>

<style scoped>

</style>