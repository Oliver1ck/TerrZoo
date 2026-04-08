<script setup lang="ts">
import type { ModelCategories } from '@components/CatalogFilters.vue'
import type { Brand } from '@data/catalogBrands'
import type { Category } from '@data/catalogCategories'
import type { CheckedSales } from '@data/catalogSales'

const props = defineProps<{
  item: Category | Brand | CheckedSales
}>()

const modelValue = defineModel<ModelCategories | string[]>()

function isCategoryType(
  item: Category | Brand | CheckedSales,
): item is Category {
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
      sub => sub.title,
    )
  },
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
      :class="{
        'filter__inner--active': categoryModel.mainCategory === item.title,
      }"
    >
      <div class="filter__inner-content">
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
    </div>
  </li>
</template>

<style lang="scss" scoped>
.filter-category__item {
  display: grid;
  grid-template-rows: 1fr;
}

.filter__inner {
  display: grid;
  grid-template-rows: 0fr;
  transition: all 0.3s ease;
  padding-left: 1.5rem;

  &--active {
    margin-top: 0.5rem;
    grid-template-rows: 1fr;
  }
}

.filter__inner-content {
  min-height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
