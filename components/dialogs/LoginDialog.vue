<script setup lang="ts">
import LoginForm from "~/components/forms/LoginForm.vue";

const active = useState<boolean>("active-login-dialog")

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