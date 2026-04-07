<script setup lang="ts">
import CatalogFilters from '@components/CatalogFilters.vue'
import AnimalSection from '@components/Sections/AnimalSection.vue'
import BreadCrumbs from '@components/Sections/BreadCrumbs.vue'
import Slider from '@components/Sections/Slider.vue'
import { products } from '@data/product'
</script>

<template>
  <BreadCrumbs />
  <AnimalSection />
  <section class="catalog">
    <div class="container">
      <div class="catalog__wrapper">
        <div>
          <Typography variant="heading-xl" tag="h1">
            Каталог товаров для кого-то
          </Typography>
        </div>
        <div class="catalog__layout">
          <CatalogFilters />
          <ul class="catalog__products">
            <li v-for="product in products" :key="product.id">
              <Product :product="product" />
            </li>
          </ul>
        </div>
        <Slider title="Популярные товары для кого-то" />
        <Slider title="Полезные статьи" :article="true" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.catalog__wrapper {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
.catalog__layout {
  display: flex;
  align-items: flex-start;
  gap: 1.87rem;
}

.catalog__products {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16.875rem, 1fr));
  gap: 1.5rem;
}
</style>
