<script setup lang="ts">
import { storeToRefs } from 'pinia'

import BreadCrumbs from '@components/Sections/BreadCrumbs.vue'

const basketStore = useBasketProductsStore()
const { products } = storeToRefs(basketStore)
const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <BreadCrumbs />
  <section class="basket">
    <div class="container">
      <div class="basket__wrap">
        <Typography class="basket__title" variant="heading-lg" tag="h1">
          Моя корзина
        </Typography>
        <div class="basket__content">
          <ul class="basket__list">
            <li
              v-for="product in products"
              :key="product.id"
              class="basket__item"
            ></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.basket {
  &__content {
    border-radius: 0.5rem;
    background: var(--Surface-Default);
    padding: 0 0.75rem;
  }

  &__list {
    display: flex;
    flex-direction: column;
  }

  &__item {
    &:last-child {
      :deep(.cart-item) {
        border-bottom: none;
      }
    }
  }

  &__title {
    margin: 1.5rem 0;
  }

  &__wrap {
    display: flex;
    flex-direction: column;
  }
}
</style>
