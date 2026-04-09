<script setup lang="ts">
import type { NumberOfPackages } from '@custom-types/product'

defineProps<{
  data: NumberOfPackages[]
}>()

const modelValue = defineModel<number | null>()

function handleUnitClick(unitId: number, isActive: boolean) {
  modelValue.value = unitId
  if (isActive) {
    modelValue.value = null
  }
}
</script>

<template>
  <ul class="package-unit-list">
    <PackageUnit
      v-for="unit in data"
      :key="unit.id"
      :unit="unit"
      :is-active="modelValue === unit.id"
      @click="isActive => handleUnitClick(unit.id, isActive)"
    />
  </ul>
</template>

<style lang="scss" scoped>
.package-unit-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.38rem 0.25rem;
}
</style>
