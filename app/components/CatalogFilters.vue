<script setup lang="ts">
import { mockBrands } from '@data/catalogBrands'
import { categories } from '@data/catalogCategories'
import { checkedSales } from '@data/catalogSales'

export interface ModelValue {
  sales: string[] | undefined
  categories: ModelCategories
  brands: string[] | undefined
}
export interface ModelCategories {
  mainCategory: string | undefined
  subCategories: string[] | []
}

const checkedCategory = ref<ModelValue>({
  sales: [],
  categories: {
    mainCategory: '',
    subCategories: [],
  },
  brands: [],
})

watch(
  checkedCategory,
  newValue => {
    console.log(
      'Checked sales',
      newValue.sales,
      'Checked categories',
      newValue.categories,
      'Checked brands',
      newValue.brands
    )
  },
  { deep: true }
)
</script>

<template>
  <aside class="catalog__filters">
    <FilterBox
      v-model="checkedCategory.sales"
      variant="secondary"
      :data="checkedSales"
    />
    <FilterBox
      v-model="checkedCategory.categories"
      title="Тип товара"
      :data="categories"
    />
    <FilterBox
      v-model="checkedCategory.brands"
      title="Бренд"
      :searchField="true"
      :data="mockBrands"
    />
  </aside>
</template>

<style lang="scss" scoped>
.catalog__filters {
  flex: 0 1 16.875rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
