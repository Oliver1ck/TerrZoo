<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src: string
    alt: string
    maxHeight?: string
  }>(),
  {
    maxHeight: '8.125rem',
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
    max-height: v-bind('props.maxHeight');
    width: 100%;
    height: 100%;
    object-fit: contain;
    mix-blend-mode: darken;
  }
}
</style>
