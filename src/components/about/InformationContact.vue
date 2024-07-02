<script setup lang="ts">
import { formatText } from '@/utils'

defineProps<{
  name: string
  title: string
  info: {
    [key: string]: string
  }
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="text-cyan-300 font-medium text-4xl relative -top-2 lg:text-left">{{ name }}</h1>
    <p class="mb-3">
      <i>{{ title }}</i>
    </p>
    <ul v-html="formatText(info)" class="flex flex-col gap-2"></ul>
  </div>
</template>
