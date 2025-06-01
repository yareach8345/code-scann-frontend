<script setup lang="ts">
import {rootCtx, editorViewCtx, defaultValueCtx} from "@milkdown/core";
import {Milkdown, useEditor} from "@milkdown/vue";
import {commonmark} from "@milkdown/preset-commonmark";
import {nord} from "@milkdown/theme-nord";
import {Editor} from "@milkdown/core";
import {listener, listenerCtx} from "@milkdown/plugin-listener";

import 'prosemirror-view/style/prosemirror.css'

const content = defineModel<string>({
  default: ""
})

const editor = useEditor((root) => Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, root)
      ctx.set(defaultValueCtx, content.value)
      ctx.get(listenerCtx).markdownUpdated((_ctx, markdown) => {
        content.value = markdown
      })
    })
    .config(nord)
    .use(commonmark)
    .use(listener)
)

const onClick = () => {
  editor.get()?.action((ctx) => {
    const view = ctx.get(editorViewCtx)
    view?.focus()
  })

}
</script>

<template>
  <Milkdown
      @click="onClick"
  />
</template>

<style scoped>

</style>