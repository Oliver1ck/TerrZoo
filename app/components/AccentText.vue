<script setup lang="ts">
const { accentGap = 'primary' } = defineProps<{
  accentGap?: 'primary' | 'secondary'
}>()
</script>

<template>
  <div
    class="accent-text"
    :class="{ 'accent-text-secondary': accentGap === 'secondary' }"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.accent-text {
  padding-left: 0.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0.125rem;
    height: 100%;
    background: #98c6cd;
    border-radius: 1rem;
  }

  &-secondary {
    padding-left: 0.75rem;
  }
}
</style>
