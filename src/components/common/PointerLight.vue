<template>
  <div
    class="pointer-light"
    :style="{ top: pointerPosition.y + 'px', left: pointerPosition.x + 'px' }"
  ></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

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
