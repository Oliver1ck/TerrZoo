<script setup lang="ts">
import type { NumberOfPackages } from '@custom-types/product'

const { variant = 'primary' } = defineProps<{
  data: NumberOfPackages[] | null
  variant?: 'primary' | 'secondary'
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
  <ul
    class="package-unit-list"
    :class="{ 'package-unit-list--secondary': variant === 'secondary' }"
  >
    <PackageUnit
      v-for="unit in data"
      :key="unit.id"
      :unit="unit"
      :is-active="modelValue === unit.id"
      :variant="variant"
      @click="isActive => handleUnitClick(unit.id, isActive)"
    />
  </ul>
</template>

<style lang="scss" scoped>
.package-unit-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.38rem 0.25rem;

  &--secondary {
    gap: 1rem;
  }
}
</style>
