<script setup lang="ts">
import type { Category } from '~/data/catalogCategories'

const props = defineProps<{
  item: Category
}>()

const modelValue = defineModel<string | undefined>()
const innerCategory = ref<string[] | undefined>([])

watch(modelValue, newVal => {
  if (newVal !== props.item.title || newVal === undefined) {
    innerCategory.value = []
  } else {
    innerCategory.value = props.item.subcategories?.map(sub => sub.title) || []
  }
})
</script>

<template>
  <li class="filter-category__item">
    <VRadio
      v-model="modelValue"
      :title="item.title"
      :value="item.title"
      name="category"
    />
    <div v-if="item.subcategories?.length" class="filter__inner">
      <VChecked
        v-for="checkItem in item.subcategories"
        :key="checkItem.id"
        v-model="innerCategory"
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
