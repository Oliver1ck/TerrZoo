<script setup lang="ts">
import BreadCrumbs from '@components/Sections/BreadCrumbs.vue'
import { mockSalesDataArr } from '@data/catalogSales'
</script>

<template>
  <BreadCrumbs />
  <section class="promotion">
    <div class="container">
      <div class="promotion__wrapper">
        <Typography variant="heading-xl" tag="h1">
          Доступные акции
        </Typography>
      </div>
      <ul class="promotion__grid">
        <li
          v-for="value in mockSalesDataArr"
          :key="value.name"
          class="promotion__item"
        >
          <Typography variant="heading-md" tag="h3">
            {{ value.name }}
          </Typography>
          <Typography variant="body-md" color="Subdued">
            Процент скидки на определенные товары:
            {{ value.discount_percentage }}%
          </Typography>
          <Typography variant="body-md" color="Subdued">
            Начало: {{ value.start_date }} Конец: {{ value.end_date }}
          </Typography>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.promotion {
  margin-top: 1.5rem;

  &__grid {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 1.5rem;
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    background: var(--Surface-Default);
    border: 1px solid var(--Border-Default);
    border-radius: 0.5rem;
  }
}
</style>
