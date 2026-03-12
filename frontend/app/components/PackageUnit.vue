<script setup lang="ts">
import type { NumberOfPackages } from '../data/product'

const {
  unit = {
    id: 1,
    count: 85,
    unit: 'г',
  },
  isActive = false,
} = defineProps<{
  unit?: NumberOfPackages
  isActive?: boolean
}>()

const emit = defineEmits<{
  (e: 'click', isActive: boolean): void
}>()
</script>

<template>
  <li
    class="package-unit"
    :class="{ 'package-unit--active': isActive }"
    @click="emit('click', isActive)"
  >
    <Typography tag="p" variant="body-sm">
      {{ unit.count }} {{ unit.unit }}
    </Typography>
  </li>
</template>

<style lang="scss" scoped>
.package-unit {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  border-radius: 0.125rem;
  transition: all 0.3s ease;
  padding: 0.12rem 0.5rem;
  background: var(--Package-Unit-Default-Bg);
  cursor: pointer;

  &:hover {
    background: var(--Border-Highlight-Default);
    :deep(p) {
      color: var(--Surface-Default);
    }
  }

  &--active {
    background: var(--Border-Highlight-Default);
    :deep(p) {
      color: var(--Surface-Default);
    }
  }
}
</style>
