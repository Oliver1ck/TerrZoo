<script setup lang="ts">
import type { BrandType } from '@custom-types/brand'

defineProps<{
  brand: BrandType
}>()
</script>

<template>
  <WhiteSurface
    tag="li"
    class="brand"
    padding="0.88rem 1.25rem"
    mobile-padding="0.5rem"
    radius="0.25rem"
  >
    <img :src="brand.imageUrl" :alt="brand.name" />
  </WhiteSurface>
</template>

<style lang="scss" scoped>
.brand {
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
