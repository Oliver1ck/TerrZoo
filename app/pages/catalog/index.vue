<script setup lang="ts">
import CatalogFilters from '@components/CatalogFilters.vue'
import AnimalSection from '@components/Sections/AnimalSection.vue'
import BreadCrumbs from '@components/Sections/BreadCrumbs.vue'
import Slider from '@components/Sections/Slider.vue'
import { catalogSortOptions } from '@data/catalogSort'
import { products } from '@data/product'

const selectedSort = ref<string | null>(catalogSortOptions[0]?.value ?? null)
const { filteredProducts } = useFilteredProducts(products)
const { resetFilters } = useFilterProducts()
const { open } = useModal()
</script>

<template>
  <BreadCrumbs />
  <AnimalSection />
  <section class="catalog">
    <div class="container">
      <div class="catalog__wrapper">
        <div class="catalog__title">
          <Typography variant="heading-xl" tag="h1">
            Каталог товаров для кого-то
          </Typography>
          <VSelect
            v-model="selectedSort"
            :options="catalogSortOptions"
            label="Сортировать по:"
          />
          <Button
            class="filters_btn"
            gap="0.5rem"
            variant="outlined-secondary"
            :full-width="true"
            content-align="center"
            @click="open('filters')"
          >
            <template #default>
              Фильтры
            </template>
            <template #icon>
              <img src="@assets/img/icons/filter_major.svg" alt="fitler icon" />
            </template>
          </Button>
        </div>
        <div class="catalog__layout">
          <CatalogFilters />
          <ul v-if="filteredProducts.length > 0" class="catalog__products">
            <li v-for="product in filteredProducts" :key="product.id">
              <Product :product="product" />
            </li>
          </ul>
          <div v-else class="catalog__plug">
            <img
              src="@assets/img/catalogPlug.png"
              alt="No products found Cat"
            />
            <Typography
              variant="heading-lg"
              text-align="center"
              class="catalog__plug__title"
            >
              По вашему запросу ничего не найдено. Cбросьте фильтр и попробуйте
              снова
            </Typography>
            <Button @click="resetFilters">
              Сбросить фильтры
            </Button>
          </div>
        </div>
        <Slider title="Популярные товары для кого-то" />
        <Slider title="Полезные статьи" :article="true" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.catalog__wrapper {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
.catalog__layout {
  display: flex;
  align-items: flex-start;
  gap: 1.87rem;
}

.catalog__products {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16.875rem, 1fr));
  gap: 1.5rem;
}
.catalog__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.filters_btn {
  display: none;
}

.catalog__plug {
  flex: 1 1 auto;
  padding-top: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  &__title {
    max-width: 42.375rem;
  }

  & img {
    max-width: 13.34106rem;
    width: 100%;
    height: 100%;
    object-fit: contain;
    mix-blend-mode: darken;
  }
}

@media (max-width: 992px) {
  .catalog__title {
    flex-direction: column;
  }
  .filters_btn {
    display: block;
  }

  .catalog__plug {
    padding-top: 0;
  }
}
</style>
