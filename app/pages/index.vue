<script setup lang="ts">
import AnimalSection from '@components/Sections/AnimalSection.vue'
import BrandSection from '@components/Sections/BrandSection.vue'
import Intro from '@components/Sections/Intro.vue'
import Promotion from '@components/Sections/Promotion.vue'
import Reviews from '@components/Sections/Reviews.vue'
import Slider from '@components/Sections/Slider.vue'
</script>

<template>
  <AnimalSection />
  <Intro />
  <div class="promo-products">
    <Promotion />
    <Slider title="Популярные товары" />
  </div>
  <Slider title="Новинки" variant="secondary" theme="white" />
  <BrandSection />
  <Reviews />
</template>

<style lang="scss" scoped>
.promo-products {
  padding: 3.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

@media (max-width: 992px) {
  .promo-products {
    padding: 2rem 0;
    flex-direction: column-reverse;
    gap: 2rem;
  }
}
</style>
