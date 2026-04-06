<script setup lang="ts">
import AnimalSection from '@components/Sections/AnimalSection.vue'
import BreadCrumbs from '@components/Sections/BreadCrumbs.vue'
</script>

<template>
  <BreadCrumbs />
  <AnimalSection />
  <section class="catalog">
    <div class="container">
      <div class="catalog__wrapper">
        <div>
          <Typography variant="heading-xl" tag="h1">
            Каталог товаров
          </Typography>
        </div>
        <div class="catalog__layout">
          <aside class="catalog__filters">
            <FilterBox title="Тип товара" />
          </aside>
        </div>
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
.catalog__filters {
  flex: 0 1 16.875rem;
}
</style>
