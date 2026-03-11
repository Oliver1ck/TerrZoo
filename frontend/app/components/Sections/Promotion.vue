<script setup lang="ts">
import { dataPromoStatic } from '~~/app/data/promotionData'

import Promo from '@components/Promo.vue'
</script>

<template>
  <section class="promotion">
    <div class="container">
      <div class="promotion__wrapper">
        <Promo v-for="data in dataPromoStatic" :key="data.id" :data="data" :variant="data.variant" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.promotion__wrapper {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

@media(max-width: 992px) {
  .promotion__wrapper {
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
}
</style>
