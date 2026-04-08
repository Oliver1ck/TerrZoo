<script setup lang="ts">
import type { ModelCategories } from '@components/CatalogFilters.vue'
import type { Brand } from '@data/catalogBrands'
import type { Category } from '@data/catalogCategories'
import type { CheckedSales } from '@data/catalogSales'

import { watchDebounced } from '@vueuse/core'

import Search from '@/components/Search.vue'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary'
    title?: string
    padding?: string
    data?: Category[] | Brand[] | CheckedSales[]
    searchField?: boolean
  }>(),
  {
    variant: 'primary',
    searchField: false,
  },
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
      return null
  }
})
const modelValue = defineModel<ModelCategories | string[]>()
const searchValue = ref<string>('')
const filterData = ref<Category[] | Brand[] | CheckedSales[]>(props.data || [])
watchDebounced(
  searchValue,
  newValue => {
    console.log('Search value:', newValue)
    if (!newValue) {
      filterData.value = props.data || []
      return
    }

    filterData.value =
      props.data?.filter(item =>
        item.title.toLowerCase().includes(newValue.toLowerCase()),
      ) || []
  },
  { debounce: 300 },
)
</script>

<template>
  <div class="filter-box" :class="`filter-box--${variant}`">
    <Typography v-if="title" tag="h3" variant="heading-sm">
      {{ title }}
    </Typography>
    <Search v-if="searchField" v-model:search-model="searchValue" />
    <ul class="filter-box__list">
      <FilterCategoryItem
        v-for="item in filterData"
        :key="item.id"
        v-model="modelValue"
        :item="item"
      />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.filter-box {
  padding: v-bind(computedPadding) 1rem;
  border-radius: 0.3125rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--Surface-Default);
}

.filter-box__list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

@media (max-width: 992px) {
  .filter-box {
    padding: 0;
  }
}
</style>
