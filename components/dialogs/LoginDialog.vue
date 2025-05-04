<script setup lang="ts">
import LoginForm from "~/components/form/LoginForm.vue";

const active = useState("active-login-dialog", () => false)
const onClose = () => {
  active.value = false
}
</script>

<template>
  <v-dialog
      v-model="active"
      :scrim="false"
      max-width="400"
      min-width="100"
  >
    <login-form @close="onClose"/>
  </v-dialog>
</template>

<style scoped>

</style>