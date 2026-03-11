<script setup lang="ts">
import type { NumberOfPackages } from '../data/product'

import PackageUnit from './PackageUnit.vue'

const props = defineProps<{
  data: NumberOfPackages[]
}>()

const activeUnitId = ref<number | null>(null)

function handleUnitClick(unitId: number, isActive: boolean) {
  activeUnitId.value = unitId
  if (isActive) {
    activeUnitId.value = null
  }
}
</script>

<template>
  <ul class="package-unit-list">
    <li v-for="unit in data" :key="unit.id" class="package-unit-list-item">
      <PackageUnit
        :unit="unit"
        :is-active="activeUnitId === unit.id"
        @click="(isActive) => handleUnitClick(unit.id, isActive) "
      />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.package-unit-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.38rem 0.25rem;
}
</style>
