<script setup lang="ts">
interface Props {
  showLevel: 'none' | 'deleteOnly' | 'all'
}

const { showLevel } = defineProps<Props>()

interface Emits {
  (e: "updateButtonClicked"): void
  (e: "deleteButtonClicked"): void
}

const emits = defineEmits<Emits>()

const updateButtonClicked = () => {
  emits("updateButtonClicked")
}

const deleteButtonClicked = () => {
  const confirmResult = confirm("정말로 삭제하시겠습니까?")
  if(!confirmResult) { return }

  emits("deleteButtonClicked")
}
</script>

<template>
  <div v-if="showLevel !== 'none'">
    <v-hover
        v-if="showLevel !== 'deleteOnly'"
        v-slot="{ isHovering, props }"
    >
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