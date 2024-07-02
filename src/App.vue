<template>
  <div class="relative">
    <div class="lg:flex lg:justify-between lg:gap-4">
      <HeaderPage />
      <main class="lg:pt-24 pt-5 lg:w-1/2 lg:py-24">
        <RouterView />
      </main>
    </div>
  </div>
  <div
    class="pointer-light"
    :style="{ top: pointerPosition.y + 'px', left: pointerPosition.x + 'px' }"
  ></div>
  <!-- <ThemeToggle /> -->
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import { HeaderPage } from './components/common'

const pointerPosition = ref({ x: 0, y: 0 })

const updatePointerPosition = (event: MouseEvent) => {
  pointerPosition.value = { x: event.clientX, y: event.clientY }
}

onMounted(() => {
  window.addEventListener('mousemove', updatePointerPosition)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updatePointerPosition)
})
</script>

<style scoped>
.pointer-light {
  position: fixed;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  pointer-events: none;
  background: radial-gradient(circle, rgb(103 232 249 / 0.1), transparent 80%);
  mix-blend-mode: screen;
  transform: translate(-50%, -50%);
  transition: transform 0.05s ease-out;
}
</style>
