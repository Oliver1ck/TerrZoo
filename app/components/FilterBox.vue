<script setup lang="ts">
import type { Brand } from '@data/CatalogBrands'
import type { Category } from '@data/catalogCategories'
import type { Sales } from '@data/catalogSales'

import Search from '@/components/Search.vue'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary'
    title?: string
    padding?: string
    data?: Category[] | Brand[] | Sales[]
    searchField?: boolean
  }>(),
  {
    variant: 'primary',
    searchField: false,
  }
)

const computedPadding = computed(() => {
  if (props.padding) {
    return props.padding
  }

  switch (props.variant) {
    case 'primary':
      return '1rem'

    case 'secondary':
      return '1.12rem'

    default:
      return '1rem'
  }
})

export interface ModelValue {
  mainCategory: string
  subCategories: string[] | undefined
}

const checkedCategory = ref<ModelValue>({
  mainCategory: '',
  subCategories: [],
})
</script>

<template>
  <div class="filter-box" :class="`filter-box--${variant}`">
    <Typography v-if="title" tag="h3" variant="heading-sm">
      {{ title }}
    </Typography>
    <Search v-if="searchField" />
    <ul class="filter-box__list">
      <FilterCategoryItem
        v-for="item in data"
        :key="item.id"
        v-model="checkedCategory"
        :item="item"
      />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.filter-box {
  padding: v-bind(computedPadding);
  border-radius: 0.3125rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &--primary {
    background: var(--Surface-Default);
  }
  &--secondary {
    background: var(--Product-Secondary-Bg);
  }
}

.filter-box__list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
