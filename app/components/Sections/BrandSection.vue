<script setup lang="ts">
import Brand from '~/components/Brand.vue'
import { brandsData } from '~~/app/data/brand'
</script>

<template>
  <section class="brands">
    <div class="container">
      <div class="brands__wrapper">
        <Typography tag="h2" variant="heading-lg">
          Популярные бренды
        </Typography>
        <ul class="brands__list">
          <Brand v-for="brand in brandsData" :key="brand.id" :brand="brand" />
        </ul>
        <VLink to="/" variant="primary-button" size="sm" position="center">
          Смотреть больше брендов
        </VLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.brands {
  padding: 3.5rem 0;
}

.brands__wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.brands__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8.38rem, 12rem));
  justify-content: space-between;
  gap: 1.5rem;
}

@media (max-width: 992px) {
  .brands__list {
    gap: 1rem 0.5rem;
    grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  }
}
</style>
