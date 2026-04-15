<script setup lang="ts">
import { storeToRefs } from 'pinia'

import BreadCrumbs from '@components/Sections/BreadCrumbs.vue'
import Slider from '@components/Sections/Slider.vue'

const basketStore = useBasketProductsStore()
const { products } = storeToRefs(basketStore)
const sumPrice = computed(() => {
  return products.value.reduce((acc, curr) => {
    const checkedUnit = curr.numberOfPackages.find(
      unit => unit.id === curr.checkedPackageUnit,
    )
    const checkedUnitPrice = checkedUnit ? checkedUnit.price : curr.pricePerUnit
    if (curr.sales) {
      return (
        acc
        + checkedUnitPrice
        * curr.count
        * (1 - curr.sales.discount_percentage / 100)
      )
    }
    return acc + checkedUnitPrice * curr.count
  }, 0)
})
</script>

<template>
  <BreadCrumbs />
  <div class="basket-page">
    <section class="basket">
      <div class="container">
        <Typography class="basket__title" variant="heading-lg" tag="h1">
          Моя корзина
        </Typography>
        <div class="basket__wrap">
          <WhiteSurface
            class="basket__content"
            padding="1.5rem 1rem"
            radius="0.5rem"
          >
            <ul class="basket__list">
              <li
                v-for="product in products"
                :key="product.id"
                class="basket__item"
              >
                <ProductBasket :product="product" />
              </li>
            </ul>
          </WhiteSurface>
          <div class="basket__action">
            <div class="basket__total">
              <Typography
                tag="h3"
                variant="heading-lg"
                color="On-Interactive"
                font-weight="700"
              >
                {{ sumPrice.toFixed(2) }} BYN
              </Typography>
              <Typography
                tag="h3"
                variant="heading-sm"
                color="On-Interactive"
                text-align="center"
              >
                {{ products.length }}
                {{ products.length > 1 ? 'товара' : 'товар' }}
              </Typography>
            </div>
            <div class="basket__pickup">
              <img src="@assets/img/icons/box.svg" alt="box icon" />
              <div class="basket__pickup-info">
                <Typography
                  tag="h4"
                  variant="heading-md"
                  color="On-Interactive"
                  font-weight="600"
                >
                  Самовывоз
                </Typography>
                <Typography color="On-Interactive">
                  <template #icon>
                    <img
                      src="@assets/img/icons/location_white.svg"
                      alt="location icon"
                    />
                  </template>
                  <template #default>
                    Минск, ул. Чюрлёниса, 6.
                  </template>
                </Typography>
              </div>
            </div>
            <VLink
              to="/"
              variant="outline"
              size="sm"
              position="fullWidth"
              content-position="center"
              padding="0.75rem 1rem"
            >
              Оформить заказ
            </VLink>
          </div>
        </div>
      </div>
    </section>
    <Slider title="Популярные товары" />
    <WhiteSurface padding="1.5rem 0" radius="0">
      <Slider title="Просмотренные товары" variant="secondary" />
    </WhiteSurface>
    <Slider :article="true" title="Полезные статьи" />
  </div>
</template>

<style lang="scss" scoped>
.basket-page {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
.basket {
  &__content {
    flex: 0 1 48.125rem;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &__item {
    &:last-child {
      :deep(.cart-item) {
        border-bottom: none;
      }
    }
  }

  &__title {
    margin: 1.5rem 0;
  }

  &__wrap {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem;
  }

  &__action {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-radius: 0.5rem;
    background: var(--Action-Primary-Default, #008060);
    padding: 1rem 1.5rem;
    flex: 0 1 23.1875rem;
  }

  &__total {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__pickup {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    &-info {
      display: flex;
      flex-direction: column;
      gap: 0.38rem;
    }
  }
}

@media (max-width: 992px) {
  .basket-page {
    gap: 2rem;
  }
  .basket {
    &__content {
      flex: initial;
      width: 100%;
    }
    &__wrap {
      flex-direction: column;
    }
    &__action {
      flex: none;
      width: 100%;
    }
  }
}
</style>
