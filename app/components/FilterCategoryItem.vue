<script setup lang="ts">
import type { Brand } from '@custom-types/catalogBrand'
import type { Category } from '@custom-types/catalogCategory'
import type { CheckedSales } from '@custom-types/catalogSales'
import type { FilterCategories } from '@custom-types/filter'

const props = defineProps<{
  item: Category | Brand | CheckedSales
}>()

const modelValue = defineModel<FilterCategories | string[]>()

function isCategoryType(
  item: Category | Brand | CheckedSales,
): item is Category {
  return 'subcategories' in item
}

const categoryModel = computed<FilterCategories>({
  get() {
    return modelValue.value as FilterCategories
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

  return props.item.subcategories || []
})

watch(
  () => categoryModel.value.mainCategory,
  mainCategory => {
    if (!isCategoryType(props.item) || mainCategory !== String(props.item.id)) {
      return
    }

    categoryModel.value.subCategories = subcategories.value.map(sub =>
      String(sub.id),
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
      :value="String(item.id)"
      name="category"
    />
    <VChecked
      v-else
      v-model="checkedModel"
      :value="String(item.id)"
      :label="item.title"
      :name="`item-${item.id}`"
    />

    <div
      v-if="isCategoryType(item) && subcategories.length"
      class="filter__inner"
      :class="{
        'filter__inner--active': categoryModel.mainCategory === String(item.id),
      }"
    >
      <div class="filter__inner-content">
        <VChecked
          v-for="checkItem in subcategories"
          :key="checkItem.id"
          v-model="categoryModel.subCategories"
          :value="String(checkItem.id)"
          :name="`subcategory-${item.id}`"
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
