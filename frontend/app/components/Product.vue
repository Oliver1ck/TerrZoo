<script setup lang="ts">
import type { ProductType } from '../data/product'

import Button from '@components/Button.vue'

const { variant = 'primary' } = defineProps<{
  variant?: 'primary' | 'secondary'
  product: ProductType
}>()

const classes = computed(() => ['product', `product--${variant}`])
</script>

<template>
  <article :class="classes">
    <NuxtLink to="/" class="product__title-wrap">
      <div class="product__img-wrap">
        <img :src="product.img" :alt="product.name" />
      </div>
      <Typography variant="heading-sm" tag="h3">
        {{ product.name }}
      </Typography>
    </NuxtLink>
    <PackageUnitList :data="product.numberOfPackages" />
    <div class="product__basket-wrap">
      <Typography tag="p" variant="body-md">
        <b>
          {{ product.price }} BYN
        </b>
      </Typography>
      <Button variant="product-basket">
        +
      </Button>
    </div>
    <Button variant="outlined">
      Купить в 1 клик
    </Button>
  </article>
</template>

<style lang="scss" scoped>
.product {
  padding: 0.5rem;
  border-radius: 0.3125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
  transition: all 0.3s ease;

  &--primary {
    background: var(--Product-Primary-Bg);
  }

  &--secondary {
    background: var(--Product-Secondary-Bg);
  }

  &:hover {
    box-shadow:
      0 0 2px 0 rgba(0, 0, 0, 0.06),
      0 12px 32px 0 rgba(0, 0, 0, 0.1);
  }
}

.product__title-wrap {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    :deep(h3) {
      color:var(--Icon-Highlight)
    }
  }
}
.product__img-wrap {
  & img {
    max-height: 8.125rem;
    width: 100%;
    height: 100%;
    object-fit: contain;
    mix-blend-mode: darken;
  }
}

.product__basket-wrap {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
