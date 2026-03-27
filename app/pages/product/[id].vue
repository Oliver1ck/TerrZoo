<script setup lang="ts">
import BreadCrumbs from '@components/Sections/BreadCrumbs.vue'
</script>

<template>
  <BreadCrumbs :parent-routes="[{ label: 'Каталог', path: '/catalog' }]">
    <template #current>
      какой-то товар
    </template>
  </BreadCrumbs>
  <Typography variant="heading-xl" tag="h1">
    Страница товара
  </Typography>
</template>

<style lang="scss" scoped></style>
