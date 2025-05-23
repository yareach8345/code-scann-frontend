<script setup lang="ts">
import {rootCtx} from "@milkdown/core";
import {Milkdown, useEditor} from "@milkdown/vue";
import {commonmark} from "@milkdown/preset-commonmark";
import {nord} from "@milkdown/theme-nord";
import {Editor} from "@milkdown/core";
import {listener, listenerCtx} from "@milkdown/plugin-listener";

import 'prosemirror-view/style/prosemirror.css'

const content = defineModel<string>({
  default: ""
})

useEditor((root) => Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, root)
      ctx.get(listenerCtx).markdownUpdated((_ctx, markdown) => {
        content.value = markdown
      })
    })
    .config(nord)
    .use(commonmark)
    .use(listener)
)
</script>

<template>
  <Milkdown v-model="content"/>
</template>

<style scoped>

</style>