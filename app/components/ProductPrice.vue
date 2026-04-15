<script setup lang="ts">
import type { ProductType } from '@custom-types/product'

const props = defineProps<{
  product: ProductType
  checkedUnit?: number | null
}>()

const selectedPackagePrice = computed(() => {
  if (props.checkedUnit == null) {
    return props.product.pricePerUnit
  }

  return (
    props.product.numberOfPackages.find(unit => unit.id === props.checkedUnit)
      ?.price ?? props.product.pricePerUnit
  )
})

const discountPrice = computed(() => {
  if (!props.product.sales) {
    return null
  }

  return (
    selectedPackagePrice.value
    * (1 - props.product.sales.discount_percentage / 100)
  ).toFixed(2)
})
</script>

<template>
  <div class="product-price">
    <Typography
      v-if="props.product.sales"
      tag="p"
      variant="body-sm"
      color="Disabled"
    >
      <b>
        <s>{{ selectedPackagePrice.toFixed(2) }} BYN</s>
      </b>
    </Typography>
    <Typography tag="p" variant="body-sm">
      <b> {{ discountPrice || selectedPackagePrice.toFixed(2) }} BYN </b>
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
