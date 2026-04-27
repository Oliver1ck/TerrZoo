<script setup lang="ts">
import type { ProductType } from '@custom-types/product'

const props = withDefaults(
  defineProps<{
    product: ProductType
    variant?: 'primary' | 'secondary'
  }>(),
  {
    variant: 'primary',
  },
)

const classes = computed(() => ['product', `product--${props.variant}`])
const checkedPackageUnit = ref<number | null>(null)

const { addProduct } = useBasketProductsStore()
</script>

<template>
  <article :class="classes">
    <NuxtLink
      :to="`/catalog/product/${product.id}`"
      class="product__title-wrap"
    >
      <ProductImage :src="product.img" :alt="product.name" />
      <Typography variant="heading-sm" tag="h3" class="product__title">
        {{ product.name }}
      </Typography>
    </NuxtLink>
    <PackageUnitList
      v-model="checkedPackageUnit"
      :data="product.numberOfPackages"
    />
    <div class="product__basket-wrap">
      <ProductPrice :product="product" :checked-unit="checkedPackageUnit" />
      <Button
        variant="product-basket"
        icon-pos="right"
        @click="
          () => {
            if (checkedPackageUnit !== null) {
              addProduct(product, checkedPackageUnit)
            }
          }
        "
      >
        <template #default>
          +
        </template>
        <template #icon>
          <img src="@assets/img/icons/basket.svg" alt="basket icon" />
        </template>
      </Button>
    </div>
    <Button variant="outlined" content-align="center">
      Купить в 1 клик
    </Button>
    <Sales v-if="product.sales" :postion="{ top: '0.5rem', left: '0.5rem' }" />
  </article>
</template>

<style lang="scss" scoped>
.product {
  padding: 0.5rem;
  border-radius: 0.3125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
  transition: all 0.3s ease;
  position: relative;

  &--primary {
    background: var(--Product-Primary-Bg);
  }

  &--secondary {
    background: var(--Product-Secondary-Bg);
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

  &:hover {
    box-shadow:
      0 0 2px 0 rgba(0, 0, 0, 0.06),
      0 12px 32px 0 rgba(0, 0, 0, 0.1);
  }
}

.product__title-wrap {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    :deep(h3) {
      color: var(--Icon-Highlight);
    }
  }
}

.product__basket-wrap {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
