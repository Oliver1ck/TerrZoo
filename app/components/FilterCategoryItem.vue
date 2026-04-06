<script setup lang="ts">
import type { ModelValue } from './FilterBox.vue'
import type { Category } from '~/data/catalogCategories'

const props = defineProps<{
  item: Category
}>()

const modelValue = defineModel<ModelValue>({
  default: {
    mainCategory: '',
    subCategories: [],
  },
})

watch(
  () => modelValue.value?.mainCategory,
  newCategory => {
    if (newCategory === props.item.title) {
      if (props.item.subcategories && props.item.subcategories.length > 0) {
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
      v-model="modelValue.mainCategory"
      :title="item.title"
      :value="item.title"
      name="category"
    />

    <div v-if="item.subcategories?.length" class="filter__inner">
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
