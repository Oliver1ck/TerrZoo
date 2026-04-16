<script setup lang="ts">
import { mockBrands } from '@data/catalogBrands'
import { categories } from '@data/catalogCategories'
import { checkedSales } from '@data/catalogSales'

const filterStore = useFilterProducts()
const { filters } = storeToRefs(filterStore)

const { activeModal, close } = useModal()
</script>

<template>
  <aside
    class="catalog__filters"
    :class="{ 'catalog__filters--active': activeModal === 'filters' }"
  >
    <div class="container">
      <div class="catalog__filters-wrap">
        <FilterBox
          v-model="filters.sales"
          variant="secondary"
          :data="checkedSales"
        />
        <hr />
        <FilterBox
          v-model="filters.categories"
          title="Тип товара"
          :data="categories"
        />
        <hr />
        <FilterBox
          v-model="filters.brands"
          title="Бренд"
          :searchField="true"
          :data="mockBrands"
        />
        <Button
          class="filters__btn"
          variant="primary"
          :fullWidth="true"
          contentAlign="center"
          @click="close"
        >
          Применить фильтры
        </Button>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.catalog__filters {
  flex: 0 0 16.875rem;

  & .container {
    padding: 0;
  }

  & hr {
    display: none;
  }
}

.catalog__filters-wrap {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.filters__btn {
  display: none;
}

@media (max-width: 992px) {
  .catalog__filters {
    padding: 3rem 0 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100dvh;
    background: var(--Surface-Default);
    transform: translateX(-100%);
    transition: all 0.3s ease;
    gap: 0.75rem;
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;

    & .container {
      padding: 0.62rem;
    }

    & hr {
      display: block;
      width: 100%;
      height: 0.0625rem;
      background: #8c9196;
      padding: 0 1rem;
    }
  }
  .hr-wrap {
    display: block;
  }

  .filters__btn {
    display: block;
  }

  .catalog__filters--active {
    transform: translateX(0);
  }
}
</style>
