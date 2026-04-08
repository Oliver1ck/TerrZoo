<script setup lang="ts">
import type { ProductType } from '@data/product'

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
const productSales = computed(() => {
  if (!props.product.sales) {
    return null
  }

  return {
    ...props.product.sales,
    discount_price: (
      props.product.price
      * (1 - props.product.sales.discount_percentage / 100)
    ).toFixed(2),
  }
})
</script>

<template>
  <article :class="classes">
    <NuxtLink to="/" class="product__title-wrap">
      <div class="product__img-wrap">
        <img :src="product.img" :alt="product.name" />
      </div>
      <Typography variant="heading-sm" tag="h3">
        {{ product.name }}
      </Typography>
    </NuxtLink>
    <PackageUnitList :data="product.numberOfPackages" />
    <div class="product__basket-wrap">
      <div class="product__basket-sales">
        <Typography
          v-if="product.sales"
          tag="p"
          variant="body-md"
          color="Disabled"
        >
          <b>
            <s>{{ product.price }} BYN</s>
          </b>
        </Typography>
        <Typography tag="p" variant="body-md">
          <b>
            {{ productSales?.discount_price || product.price.toFixed(2) }} BYN
          </b>
        </Typography>
      </div>
      <Button variant="product-basket" icon-pos="right">
        <template #default>
          +
        </template>
        <template #icon>
          <img src="@assets/img/icons/basket.svg" alt="basket icon" />
        </template>
      </Button>
    </div>
    <Button variant="outlined">
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
.product__img-wrap {
  & img {
    max-height: 8.125rem;
    width: 100%;
    height: 100%;
    object-fit: contain;
    mix-blend-mode: darken;
  }
}

.product__basket-wrap {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.product__basket-sales {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
