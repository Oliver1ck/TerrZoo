<script setup lang="ts"></script>

<template>
  <div class="accent-text">
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
    background: #98C6CD;
    border-radius: 1rem;
  }
}
</style>
