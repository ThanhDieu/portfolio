<template>
  <div>
    <div class="relative">
      <div class="lg:flex lg:justify-between lg:gap-4">
        <HeaderPage />
        <main class="lg:pt-24 pt-5 lg:w-1/2 lg:py-24">
          <RouterView v-slot="{ Component, route }">
            <Transition name="route" mode="out-in" appear>
              <div :key="route.name || 'name'">
                <component :is="Component"></component>
              </div>
            </Transition>
          </RouterView>
        </main>
      </div>
    </div>
    <PointerLight />
    <!-- <ThemeToggle /> -->
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { HeaderPage } from './components/common'
import PointerLight from './components/common/PointerLight.vue'
</script>
<style scope>
.route-enter-active {
  animation: slide-scale 0.3s ease-out;
}

.route-leave-active {
  animation: slide-scale 0.3s ease-in reverse;
  /* animation: name duration timing-function delay iteration-count direction fill-mode; */
}
@keyframes slide-scale {
  from {
    transform: translateY(120px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
