<template>
  <div class="fixed bottom-4 right-4 z-10">
    <button @click="toggleTheme" class="p-2 rounded-full shadow-lg bg-white dark:bg-gray-800">
      <span v-if="currentTheme === THEME_MODE.dark">🌞</span>
      <span v-else>🌙</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { THEME_MODE } from '@/constants/config'
import { useStore } from 'vuex'

const store = useStore()
const currentTheme = computed(() => store.getters['theme/currentTheme'])
const toggleTheme = () => {
  store.dispatch('theme/toggleTheme')
}
</script>
