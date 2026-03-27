<script setup lang="ts">
import BreadCrumbs from '@components/Sections/BreadCrumbs.vue'
</script>

<template>
  <BreadCrumbs :parent-routes="[{ label: 'Статьи', path: '/articles' }]">
    <template #current>
      какая-то статья
    </template>
  </BreadCrumbs>
</template>

<style lang="scss" scoped></style>
