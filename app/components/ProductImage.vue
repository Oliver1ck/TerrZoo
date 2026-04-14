<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src: string
    alt: string
    maxWidth?: string
    maxHeight?: string
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  }>(),
  {
    maxHeight: '8.125rem',
    objectFit: 'contain',
  },
)
</script>

<template>
  <div class="product-image">
    <img :src="props.src" :alt="props.alt" />
  </div>
</template>

<style lang="scss" scoped>
.product-image {
  & img {
    max-width: v-bind(maxWidth);
    max-height: v-bind(maxHeight);
    width: 100%;
    height: 100%;
    object-fit: v-bind(objectFit);
    mix-blend-mode: darken;
  }
}
</style>
