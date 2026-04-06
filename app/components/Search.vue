<script setup lang="ts">
import type { Product } from '@data/searchData'

import { useTimeout, watchDebounced } from '@vueuse/core'

import VInput from '@components/Input.vue'
import { searchList } from '@data/searchData'

const props = withDefaults(
  defineProps<{
    drop?: boolean
  }>(),
  {
    drop: false,
  }
)
const newSearchList = ref<Product[]>([])
const searchModel = defineModel<string>('searchModel')
const searchListVisible = ref<boolean>(false)
const searchProductListClass = computed(() => [
  'search--product--list',
  { 'search--product--list--visible': searchListVisible.value },
])
watchDebounced(
  searchModel,
  (newValue: string | undefined) => {
    if (!newValue) {
      searchListVisible.value = false
      useTimeout(300, {
        callback: () => {
          newSearchList.value = []
        },
      })
      return
    }
    for (const i of searchList) {
      if (i.name.toLowerCase().includes(newValue.toLowerCase())) {
        newSearchList.value.push(i)
        searchListVisible.value = true
      }
    }
  },
  { debounce: 500 }
)
function handleFocusOut() {
  searchListVisible.value = false
}
function handleFocusIn() {
  if (searchModel.value) {
    searchListVisible.value = true
  }
}
</script>

<template>
  <form class="search">
    <VInput
      v-model="searchModel"
      type="text"
      name="search"
      placeholder="Поиск"
      @focusout="handleFocusOut"
      @focusin="handleFocusIn"
    >
      <template #prepend>
        <img src="@assets/img/icons/searchIcon.svg" alt="search icon" />
      </template>
    </VInput>
    <ul v-if="props.drop" :class="searchProductListClass">
      <li v-for="item in newSearchList" :key="item.name" class="item">
        <VLink to="/" variant="searchItem">
          <template #icon>
            <img :src="item.img" alt="product image" />
          </template>
          <template #default>
            {{ item.name }}
          </template>
        </VLink>
      </li>
    </ul>
  </form>
</template>

<style lang="scss" scoped>
.search {
  position: relative;
  width: 100%;
}

.search--product--list {
  transition: all 0.3s ease;
  opacity: 0;
  pointer-events: none;
  width: 100%;
  position: absolute;
  max-height: 22.5rem;
  top: 2.62rem;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  background: var(--Surface-Default);
  box-shadow:
    0 0 2px 0 rgba(0, 0, 0, 0.2),
    0 2px 10px 0 rgba(0, 0, 0, 0.1);
  overflow: auto;

  &--visible {
    opacity: 1;
    pointer-events: auto;
  }
}
</style>
