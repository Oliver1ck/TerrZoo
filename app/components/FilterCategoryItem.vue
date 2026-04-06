<script setup lang="ts">
import type { ModelValue } from './FilterBox.vue'
import type { Brand } from '@data/CatalogBrands'
import type { Category } from '@data/catalogCategories'
import type { Sales } from '@data/catalogSales'

const props = defineProps<{
  item: Category | Brand | Sales
}>()

const modelValue = defineModel<ModelValue>({
  default: {
    mainCategory: '',
    subCategories: [],
  },
})

function isCategoryType(item: Category | Brand): item is Category {
  return 'subcategories' in item
}

watch(
  () => modelValue.value?.mainCategory,
  newCategory => {
    if (newCategory === props.item.title) {
      if (
        isCategoryType(props.item)
        && props.item.subcategories
        && props.item.subcategories.length > 0
      ) {
        modelValue.value.subCategories = props.item.subcategories.map(
          sub => sub.title
        )
      } else {
        modelValue.value.subCategories = []
      }
    }
  }
)
</script>

<template>
  <li class="filter-category__item">
    <VRadio
      v-if="isCategoryType(item)"
      v-model="modelValue.mainCategory"
      :title="item.title"
      :value="item.title"
      name="category"
    />
    <VChecked
      v-else
      v-model="modelValue.subCategories"
      :value="item.title"
      :label="item.title"
      :name="item.title"
    />

    <div
      v-if="isCategoryType(item) && item.subcategories.length"
      class="filter__inner"
    >
      <VChecked
        v-for="checkItem in item.subcategories"
        :key="checkItem.id"
        v-model="modelValue.subCategories"
        :value="checkItem.title"
        :name="item.title"
      >
        {{ checkItem.title }}
      </VChecked>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.filter-category__item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filter__inner {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 1.5rem;
}
</style>
