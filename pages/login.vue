<script setup lang="ts">
import LoginForm from "~/components/form/LoginForm.vue";

const router = useRouter()
const onClose = async () => {
  await router.push("/")
}
</script>

<template>
  <v-container>
    <login-form @close="onClose" />
  </v-container>
</template>

<style scoped>

</style>