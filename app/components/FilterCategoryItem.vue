<script setup lang="ts">
import type { ModelCategories } from '@components/CatalogFilters.vue'
import type { Brand } from '@data/catalogBrands'
import type { Category } from '@data/catalogCategories'
import type { Sales } from '@data/catalogSales'

const props = defineProps<{
  item: Category | Brand | Sales
}>()

const modelValue = defineModel<ModelCategories | string[]>()

function isCategoryType(item: Category | Brand): item is Category {
  return 'subcategories' in item
}

watch(
  () => {
    if (isCategoryType(props.item)) {
      return (modelValue.value as ModelCategories).mainCategory
    }

    return modelValue.value as string[]
  },
  newCategory => {
    if (isCategoryType(props.item) && newCategory === props.item.title) {
      const catModel = modelValue.value as ModelCategories

      if (props.item.subcategories && props.item.subcategories.length > 0) {
        catModel.subCategories = props.item.subcategories.map(sub => sub.title)
      } else {
        catModel.subCategories = []
      }
    }
  }
)
</script>

<template>
  <li class="filter-category__item">
    <VRadio
      v-if="isCategoryType(item)"
      v-model="(modelValue as ModelCategories).mainCategory"
      :title="item.title"
      :value="item.title"
      name="category"
    />
    <VChecked
      v-else
      v-model="modelValue as string[]"
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
        v-model="(modelValue as ModelCategories).subCategories"
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
