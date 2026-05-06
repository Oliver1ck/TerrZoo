<script setup lang="ts">
import BreadCrumbs from '@components/Sections/BreadCrumbs.vue'
import Slider from '@components/Sections/Slider.vue'
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
                {{ pricePerUnit.toFixed(2) }} BYN
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
  <section class="product-description">
    <div class="container">
      <Typography
        tag="h2"
        variant="heading-lg"
        class="product-description__title"
      >
        Описание
      </Typography>
      <div class="product-description__grid">
        <div class="product-description__main">
          <div class="product-description__block">
            <Typography tag="p" variant="body-sm">
              {{
                product ? product.description : 'Описание продукта не найдено'
              }}
            </Typography>
          </div>
          <div class="product-description__block">
            <Typography tag="h3" variant="heading-sm">
              Ключевые особенности
            </Typography>
            <ul class="product-description__list">
              <li
                v-for="(item, index) in product?.keyFeatures || []"
                :key="`key-feature-${index}`"
              >
                <Typography tag="p" variant="body-sm">
                  {{ item }}
                </Typography>
              </li>
            </ul>
          </div>
          <div class="product-description__block">
            <Typography tag="h3" variant="heading-sm">
              Состав
            </Typography>
            <Typography tag="p" variant="body-sm">
              {{ product?.ingredients || 'Состав не указан' }}
            </Typography>
          </div>
        </div>
        <div class="product-description__aside">
          <div
            v-if="product?.guaranteedAnalysis.length"
            class="product-description__block"
          >
            <Typography tag="h3" variant="heading-sm">
              Гарантированный анализ
            </Typography>
            <ul class="product-description__specs">
              <li
                v-for="(item, index) in product?.guaranteedAnalysis || []"
                :key="`analysis-${index}`"
              >
                <Typography tag="p" variant="body-sm">
                  {{ item.name }} - {{ item.value }}
                </Typography>
              </li>
            </ul>
          </div>
          <div class="product-description__block">
            <Typography
              v-if="product?.nutritionalAdditives.length"
              tag="h3"
              variant="heading-sm"
            >
              Пищевые добавки
            </Typography>
            <div class="product-description__additives">
              <div
                v-if="product?.nutritionalAdditives?.length"
                class="product-description__additives-group"
              >
                <Typography
                  v-for="(item, index) in product?.nutritionalAdditives || []"
                  :key="`nutrient-${index}`"
                  tag="span"
                  variant="body-sm"
                  class="product-description__inline"
                >
                  {{ item.name }} -
                  {{
                    index < (product?.nutritionalAdditives?.length ?? 0) - 1
                      ? `${item.value}, `
                      : `${item.value}.`
                  }}
                </Typography>
              </div>
              <div
                v-if="product?.techAdditives?.length"
                class="product-description__additives-group"
              >
                <Typography
                  tag="span"
                  variant="body-sm"
                  class="product-description__inline"
                >
                  Технологические добавки:
                </Typography>
                <Typography
                  v-for="(item, index) in product?.techAdditives || []"
                  :key="`nutrient-${index}`"
                  tag="span"
                  variant="body-sm"
                  class="product-description__inline"
                >
                  {{
                    index < (product?.techAdditives?.length ?? 0) - 1
                      ? `${item}, `
                      : `${item}.`
                  }}
                </Typography>
              </div>
              <Typography
                v-if="product?.feedingRecommendations"
                tag="p"
                variant="body-sm"
              >
                {{ product.feedingRecommendations }}
              </Typography>
              <Typography tag="p" variant="body-sm">
                Следите, чтобы у Вашего питомца всегда был доступ к чистой
                свежей воде.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Slider title="Популярные товары для собак" class="product__slider" />
  <Slider title="Вместе с этим товаром покупают" class="product__slider" />
  <Slider
    title="Полезные статьи про собак"
    :article="true"
    class="product__slider"
  />
</template>

<style lang="scss" scoped>
.product {
  margin-top: 1.5rem;

  &__title {
    max-width: 54.375rem;
    display: flex;
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

.product__slider {
  margin-top: 4rem;
}

.product-description {
  margin-top: 4rem;
}

.product-description__title {
  margin-bottom: 1.5rem;
}

.product-description__main {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.product-description__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  gap: 2.5rem;
}

.product-description__aside {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.product-description__block {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.product-description__list {
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & li {
    list-style: initial;
    &::marker {
      color: var(--Text-Default);
      font-size: 0.875rem;
    }
  }
}

.product-description__specs {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 1.25rem;

  li {
    list-style: initial;
    &::marker {
      font-size: 0.875rem;
      color: var(--Text-Default);
    }
  }
}

.product-description__inline {
  display: inline;
}

.product-description__additives {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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

  .product-description__grid {
    grid-template-columns: 1fr;
  }

  .product-description {
    margin-top: 2rem;
  }
  .product-description__title {
    margin-bottom: 1rem;
  }
  .product-description__main {
    gap: 1rem;
  }
  .product-description__grid {
    gap: 1rem;
  }
}
</style>
