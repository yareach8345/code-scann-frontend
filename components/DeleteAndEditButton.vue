<script setup lang="ts">
interface Emits {
  (e: "updateButtonClicked"): void
  (e: "deleteButtonClicked"): void
}

const emits = defineEmits<Emits>()

const updateButtonClicked = () => {
  emits("updateButtonClicked")
}

const deleteButtonClicked = () => {
  emits("deleteButtonClicked")
}
</script>

<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-icon
          :class=" isHovering ? 'text-green' : '' "
          class="mr-2"
          v-bind="props"
          @click="updateButtonClicked"
      >
        mdi-pencil
      </v-icon>
    </v-hover>
    <v-hover v-slot="{ isHovering, props }">
      <v-icon
          :class=" isHovering ? 'text-red' : '' "
          v-bind="props"
          @click="deleteButtonClicked"
      >
        {{isHovering ? "mdi-delete-empty" : "mdi-delete"}}
      </v-icon>
    </v-hover>
  </div>
</template>

<style scoped>

</style>