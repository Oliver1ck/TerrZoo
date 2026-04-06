<script setup lang="ts">
import { mockBrands } from '@data/CatalogBrands'
import { categories } from '@data/catalogCategories'
import { sales } from '@data/catalogSales'
</script>

<template>
  <aside class="catalog__filters">
    <FilterBox variant="secondary" :data="sales" />
    <FilterBox title="Тип товара" :data="categories" />
    <FilterBox title="Бренд" :searchField="true" :data="mockBrands" />
  </aside>
</template>

<style lang="scss" scoped>
.catalog__filters {
  flex: 0 1 16.875rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
