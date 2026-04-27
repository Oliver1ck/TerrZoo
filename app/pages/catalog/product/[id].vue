<script setup lang="ts">
import BreadCrumbs from '@components/Sections/BreadCrumbs.vue'
import { products } from '@data/product'
import PickupInfo from '~/components/PickupInfo.vue'
import VLink from '~/components/VLink.vue'

const route = useRoute()
const product = computed(() => {
  const id = route.params.id
  if (id) {
    return products.find(p => p.id === +id) ?? null
  }
  return null
})

const count = ref<number>(1)

const activeUnit = ref<number | null>(null)

watch(activeUnit, () => {
  count.value = 1
})

const pricePerUnit = computed(() => {
  if (!product.value) {
    return 0
  }

  const unit = product.value.numberOfPackages.find(
    unit => unit.id === activeUnit.value,
  )
  return (unit?.price ?? product.value.pricePerUnit) * count.value
})
const totalWeight = computed(() => {
  const unitPackage = product.value?.numberOfPackages.find(
    unit => unit.id === activeUnit.value,
  )
  return unitPackage
    ? (unitPackage.value * count.value).toFixed(3)
    : (1 * count.value).toFixed(3)
})

const unit = computed(() => {
  const unit = product.value?.numberOfPackages.find(
    unit => unit.id === activeUnit.value,
  )?.unit

  return unit ?? product.value?.numberOfPackages[0]?.unit
})

function incrementCount() {
  count.value++
}

function decrementCount() {
  if (count.value > 1) {
    count.value--
  }
}

const { addProduct } = useBasketProductsStore()
// костыль для моковых данных
function addCurrentProductToBasket() {
  if (!product.value) {
    return
  }

  addProduct(product.value, activeUnit.value, count.value)
}
</script>

<template>
  <BreadCrumbs>
    <template #current>
      {{ product ? product.name : 'Продукт не найден' }}
    </template>
  </BreadCrumbs>
  <section class="product">
    <div class="container">
      <div class="product__wrapper">
        <Typography variant="heading-lg" tag="h1" class="product__title">
          {{ product ? product.name : 'Продукт не найден' }}
        </Typography>
        <VLink
          :to="`/catalog?brands=${product ? product.brand.id : ''}`"
          variant="interactive"
          size="md"
          class="product__link-to-brand"
        >
          Смотреть все товары бренда {{ product ? product.brand.title : '' }}
        </VLink>
        <div class="product__about">
          <ProductGallery
            class="product__gallery"
            :images="product ? product.images : []"
            :product-name="product ? product.name : ''"
          />
          <div class="product__action">
            <div class="product__package-unit">
              <Typography
                tag="h3"
                variant="heading-md"
                style="font-weight: 600"
              >
                Варианты фасовки. Выберите удобный вес
              </Typography>
              <PackageUnitList
                v-model="activeUnit"
                :data="product ? product.numberOfPackages : null"
                variant="secondary"
              />
            </div>
            <PickupInfo variant="secondary" />
            <WhiteSurface class="product__price" padding="0.5rem 1rem">
              <Typography tag="h4" variant="heading-lg">
                {{ pricePerUnit }} BYN
              </Typography>
              <Typography tag="p" variant="heading-sm" text-align="center">
                Общий вес: {{ totalWeight }} {{ unit }}
              </Typography>
            </WhiteSurface>
            <div class="product__controls">
              <ProductCountControls
                :count="count"
                @decrement="decrementCount"
                @increment="incrementCount"
              />
              <Button
                variant="primary"
                size="lg"
                @click="addCurrentProductToBasket"
              >
                Добавить в корзину
              </Button>
              <Button variant="callback">
                Купить в 1 клик
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.product {
  margin-top: 1.5rem;

  &__title {
    max-width: 54.375rem;
  }

  &__link-to-brand {
    margin-top: 1.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  &__about {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  &__action {
    flex: 0 1 31.3125rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__gallery {
    flex: 0 0 36.1rem;
  }

  &__price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  &__controls {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
}

.product__package-unit {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

@media (max-width: 992px) {
  .product {
    &__about {
      flex-direction: column;
      gap: 2rem;
    }
    &__gallery {
      flex: initial;
    }

    &__action {
      flex: initial;
    }
  }
}
</style>
