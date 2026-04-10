<script setup lang="ts">
import type { ProductType } from '@custom-types/product'

const props = defineProps<{
  product: ProductType
}>()

const discountPrice = computed(() => {
  if (!props.product.sales) {
    return null
  }

  return (
    props.product.price
    * (1 - props.product.sales.discount_percentage / 100)
  ).toFixed(2)
})
</script>

<template>
  <div class="product-price">
    <Typography
      v-if="props.product.sales"
      tag="p"
      variant="body-md"
      color="Disabled"
    >
      <b>
        <s>{{ props.product.price }} BYN</s>
      </b>
    </Typography>
    <Typography tag="p" variant="body-md">
      <b> {{ discountPrice || props.product.price.toFixed(2) }} BYN </b>
    </Typography>
  </div>
</template>

<style lang="scss" scoped>
.product-price {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
