<script setup lang="ts">
import type { NumberOfPackages } from '@custom-types/product'

const {
  unit = {
    id: 1,
    count: 1,
    unit: 'г',
    value: 85,
    price: 12,
  },
  isActive = false,
  variant = 'primary',
} = defineProps<{
  unit?: NumberOfPackages
  isActive?: boolean
  variant?: 'primary' | 'secondary'
}>()

const emit = defineEmits<{
  (e: 'click', isActive: boolean): void
}>()

const classes = computed(() => [
  'package-unit',
  `package-unit--${variant}`,
  { 'package-unit--active': isActive },
])
</script>

<template>
  <li :class="classes" @click="emit('click', isActive)">
    <Typography v-if="variant === 'primary'" tag="p" variant="body-sm">
      {{ unit.value }} {{ unit.unit }}
    </Typography>
    <Typography
      v-if="variant === 'secondary'"
      text-align="center"
      tag="p"
      variant="heading-sm"
      style="font-weight: 700"
    >
      {{ unit.value.toFixed(1) }} {{ unit.unit }}
    </Typography>
    <Typography
      v-if="variant === 'secondary'"
      tag="p"
      variant="body-md"
      color="Subdued"
    >
      {{ unit.price }} BYN
    </Typography>
  </li>
</template>

<style lang="scss" scoped>
.package-unit {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 0.125rem;
  &--primary {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.12rem 0.5rem;
    background: var(--Package-Unit-Default-Bg);

    &:hover {
      background: var(--Border-Highlight-Default);
      :deep(p) {
        color: var(--Surface-Default);
      }
    }
  }

  &--secondary {
    padding: 0.375rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    background: var(--Surface-Neutral-Default);

    &:hover {
      background: var(--Action-Primary-Default);
      :deep(p) {
        color: var(--Surface-Default);
      }
    }
  }

  &--active {
    &.package-unit--primary {
      background: var(--Border-Highlight-Default);
    }

    &.package-unit--secondary {
      background: var(--Action-Primary-Default);
    }

    :deep(p) {
      color: var(--Surface-Default);
    }
  }
}
</style>
