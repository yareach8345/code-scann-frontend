<script setup lang="ts">
import LoginForm from "~/components/forms/LoginForm.vue";

const router = useRouter()

const onOpen = async () => {
  const active = useState<boolean>("active-login-dialog")
  active.value = true
  await router.replace("/")
}

const onClose = async () => {
  await router.push("/")
}

onOpen()
</script>

<template>
  <v-container>
    <v-card color="warning" class="mb-5">
      <v-card-title>주의</v-card-title>
      <v-card-item>
        원래 이 페이지에 들어 오는 것은 의도된 사항이 아닙니다<br>
        의도된 사항이 아닌 만큼 이 페이지는 완벽하게, 꼼꼼하게 설계되지 않았습니다.<br>
        <a href="/">Home</a>으로 돌아가서 상단의 Login 버튼을 눌러 로그인해주세요.
      </v-card-item>
    </v-card>
    <login-form @close="onClose" />
  </v-container>
</template>

<style scoped>

</style>