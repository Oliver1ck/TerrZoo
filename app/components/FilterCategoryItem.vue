<script setup lang="ts">
import type { ModelCategories } from '@components/CatalogFilters.vue'
import type { Brand } from '@data/catalogBrands'
import type { Category } from '@data/catalogCategories'
import type { Sales } from '@data/catalogSales'

const props = defineProps<{
  item: Category | Brand | Sales
}>()

const modelValue = defineModel<ModelCategories | string[]>()

function isCategoryType(item: Category | Brand | Sales): item is Category {
  return 'subcategories' in item
}

const categoryModel = computed<ModelCategories>({
  get() {
    return modelValue.value as ModelCategories
  },
  set(value) {
    modelValue.value = value
  },
})

const checkedModel = computed<string[]>({
  get() {
    return modelValue.value as string[]
  },
  set(value) {
    modelValue.value = value
  },
})

const subcategories = computed(() => {
  if (!isCategoryType(props.item)) {
    return []
  }

  return props.item.subcategories
})

watch(
  () => categoryModel.value.mainCategory,
  mainCategory => {
    if (!isCategoryType(props.item) || mainCategory !== props.item.title) {
      return
    }

    categoryModel.value.subCategories = subcategories.value.map(
      sub => sub.title
    )
  }
)
</script>

<template>
  <li class="filter-category__item">
    <VRadio
      v-if="isCategoryType(item)"
      v-model="categoryModel.mainCategory"
      :title="item.title"
      :value="item.title"
      name="category"
    />
    <VChecked
      v-else
      v-model="checkedModel"
      :value="item.title"
      :label="item.title"
      :name="item.title"
    />

    <div
      v-if="isCategoryType(item) && subcategories.length"
      class="filter__inner"
    >
      <VChecked
        v-for="checkItem in subcategories"
        :key="checkItem.id"
        v-model="categoryModel.subCategories"
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
