<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

import MobileMenu from './Modals/MobileMenu.vue'

const { activeModal } = useModal()
const isDesktop = useMediaQuery('(min-width: 993px)')
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition name="slide-right" mode="out-in">
        <MobileMenu v-if="!isDesktop && activeModal === 'burger'" />
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-active .modal-content,
.modal-fade-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-from .modal-content,
.modal-fade-leave-to .modal-content {
  transform: scale(0.95) translateY(-20px);
}

/* --- Анимации для бургера (выезд сбоку) --- */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}
.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(-100%);
}
</style>
