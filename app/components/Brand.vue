<script setup lang="ts">
import type { BrandType } from '@custom-types/brand'

defineProps<{
  brand: BrandType
}>()
</script>

<template>
  <li class="brand">
    <img :src="brand.imageUrl" :alt="brand.name" />
  </li>
</template>

<style lang="scss" scoped>
.brand {
  padding: 0.88rem 1.25rem;
  border-radius: 0.25rem;
  background: var(--Surface-Default);
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

@media (max-width: 992px) {
  .brand {
    padding: 0.5rem;
  }
}
</style>
