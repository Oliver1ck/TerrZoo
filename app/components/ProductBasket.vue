<script setup lang="ts">
import type { BasketProductType } from '~/types/product'

const props = withDefaults(
  defineProps<{
    product: BasketProductType
  }>(),
  {},
)

const checkedUnit = ref<number | null>(props.product.checkedPackageUnit)
const {
  removeProductById,
  incrementProductCount,
  getProductCount,
  decrementProductCount,
  setCheckedPackageUnit,
} = useBasketProductsStore()

watch(checkedUnit, newValue => {
  setCheckedPackageUnit(props.product.id, newValue)
})
</script>

<template>
  <article class="product-basket">
    <NuxtLink class="img-wrap" :to="`catalog/product/${product.id}`">
      <ProductImage
        :src="product.img"
        :alt="product.name"
        max-width="3.5rem"
        object-fit="cover"
      />
    </NuxtLink>
    <div class="product-basket__content">
      <VLink
        :to="`catalog/product/${product.id}`"
        variant="title"
        size="md"
        class="product-bakset__title"
      >
        {{ product.name }}
      </VLink>
      <PackageUnitList v-model="checkedUnit" :data="product.numberOfPackages" />
    </div>
    <div class="product-basket__controls-wrap">
      <div class="product-basket__details">
        <div class="product-basket__actions">
          <ProductCountControls
            :count="getProductCount(product.id)"
            @decrement="decrementProductCount(product.id)"
            @increment="incrementProductCount(product.id)"
          />
          <Button variant="none" @click="removeProductById(product.id)">
            <template #icon>
              <img src="@assets/img/icons/trash.svg" alt="trash icon" />
            </template>
          </Button>
        </div>
        <ProductPrice :product="product" :checked-unit="checkedUnit" />
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.img-wrap {
  max-width: 3.5rem;
  display: flex;
}
.product-basket {
  display: flex;
  gap: 1rem;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 0 1 29.4rem;
  }
  &__actions {
    display: flex;
    justify-content: space-between;
    gap: 2.19rem;
  }

  &__title {
    display: -webkit-box;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-wrap: anywhere;
    -webkit-box-orient: vertical;
    line-clamp: 3;
    -webkit-line-clamp: 3;
  }
}

.product-basket__controls-wrap {
  flex: 1 1 auto;
}

.product-basket__details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 992px) {
  .product-basket {
    // flex-direction: column;
    flex-wrap: wrap;

    &__content {
      flex: 1 1 29.4rem;
      // flex: initial;
      width: 100%;
    }
    &__actions {
      // justify-content: flex-start;
      justify-content: initial;
    }
    .img-wrap {
      flex: 0 0 3.5rem;
      height: 3.5rem;
    }
  }
}
</style>
