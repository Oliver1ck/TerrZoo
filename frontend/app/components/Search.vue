<script setup lang="ts">
import type { Product } from '../data/searchData'
import { watchDebounced } from '@vueuse/core'
import { searchList } from '../data/searchData'
import Link from './Link.vue'

const newSearchList = ref<Product[]>([])
const searchModel = defineModel<string>('searchModel')
const searchListVisible = ref<boolean>(false)
const searchProductListClass = computed(() => [
  'search--product--list',
  { 'search--product--list--visible': searchListVisible.value },
])
watchDebounced(searchModel, (newValue: string | undefined) => {
  if (!newValue) {
    searchListVisible.value = false
    newSearchList.value = []
    return
  }
  for (const i of searchList) {
    console.log(i)
    if (i.name.toLowerCase().includes(newValue.toLowerCase())) {
      newSearchList.value.push(i)
      searchListVisible.value = true
    }
  }
}, { debounce: 500 })
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
    <div class="search--wrapper">
      <img src="@assets/img/icons/searchIcon.svg" alt="search icon" />
      <input
        v-model="searchModel"
        type="text"
        name="search"
        placeholder="Поиск"
        @focusout="handleFocusOut"
        @focusin="handleFocusIn"
      />
    </div>
    <ul :class="searchProductListClass">
      <li v-for="item in newSearchList" :key="item.name" class="item">
        <Link to="/" variant="searchItem">
          <template #icon>
            <img :src="item.img" alt="product image" />
          </template>
          <template #default>
            {{ item.name }}
          </template>
        </Link>
      </li>
    </ul>
  </form>
</template>

<style lang="scss" scoped>
.search {
  flex: 0 1 31.25rem;
  position: relative;
}
.search--wrapper {
  & input {
    border-radius: 0.25rem;
    border: 1px solid var(--Text-input-border);
    background: var(--Surface-Default);
    padding: 0.5rem 0.75rem 0.5rem 2.5rem;
    background: #fff;
    width: 100%;
    color: var(--Text-Subdued);
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-family: 'SF Pro Text';
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 133.333% */
  }
  & img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.88rem;
  }
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
