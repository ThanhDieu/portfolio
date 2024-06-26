<template>
  <li class="lg:mr-5 text-xs shrink-0">
    <a class="block" :href="link" target="_blank" rel="noreferrer noopener"
      :aria-label="`${title} (opens in a new tab)`" :title="title">
      <span class="sr-only">
        {{ title }}
      </span>
      <slot name="icon"></slot>
    </a>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  link: string
}>()
</script>
<style scoped></style>
