<script setup lang="ts">
import AnimalSection from '@components/Sections/AnimalSection.vue'
import BreadCrumbs from '@components/Sections/BreadCrumbs.vue'
</script>

<template>
  <BreadCrumbs />
  <AnimalSection />
  <div class="container">
    <Typography variant="heading-xl" tag="h1">
      Страница каталога
    </Typography>
  </div>
</template>

<style lang="scss" scoped></style>
