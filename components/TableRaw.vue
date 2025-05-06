<script setup lang="ts">
interface Props {
  th: string,
}

const { th } = defineProps<Props>()
</script>

<template>
<tr>
  <th class="text-right">{{th}} : </th>
  <td class="text-left"><slot></slot></td>
</tr>
</template>

<style scoped>

</style>