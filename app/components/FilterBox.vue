<script setup lang="ts">
import type { Brand } from '@custom-types/catalogBrand'
import type { Category } from '@custom-types/catalogCategory'
import type { CheckedSales } from '@custom-types/catalogSales'
import type { FilterCategories } from '@custom-types/filter'

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
const fullPadding = computed(() => `${computedPadding.value || '1rem'} 1rem`)
const modelValue = defineModel<FilterCategories | number[]>()
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
  <WhiteSurface
    class="filter-box"
    :class="`filter-box--${variant}`"
    :padding="fullPadding"
    mobile-padding="0"
  >
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
  </WhiteSurface>
</template>

<style lang="scss" scoped>
.filter-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.filter-box__list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
