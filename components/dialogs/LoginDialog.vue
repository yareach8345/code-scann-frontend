<script setup lang="ts">
import LoginForm from "~/components/forms/LoginForm.vue";

const route = useRoute()
const { openLoginDialog, ...rest } = route.query

const active = useState("active-login-dialog", () => false)

if( openLoginDialog === 'true' ) {
  const router = useRouter()
  active.value = true
  router.replace({ query: rest })
}

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