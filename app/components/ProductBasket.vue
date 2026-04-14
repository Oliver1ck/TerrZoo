<script setup lang="ts">
import type { BasketProductType } from '~/types/product'

const props = withDefaults(
  defineProps<{
    product: BasketProductType
  }>(),
  {},
)

const checkedUnit = ref<number | null>(props.product.checkedPackageUnit)
const controlsIconPosition = {
  absolute: true,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}
const {
  removeProductById,
  incrementProductCount,
  getProductCount,
  decrementProductCount,
} = useBasketProductsStore()

watch(checkedUnit, newValue => {
  console.log(newValue)
})
</script>

<template>
  <article class="product-basket">
    <NuxtLink class="img-wrap" :to="`/product/${product.id}`">
      <ProductImage
        :src="product.img"
        :alt="product.name"
        max-width="3.5rem"
        object-fit="cover"
      />
    </NuxtLink>
    <div class="product-basket__content">
      <VLink :to="`/product/${product.id}`" variant="title" size="md">
        {{ product.name }}
      </VLink>
      <PackageUnitList v-model="checkedUnit" :data="product.numberOfPackages" />
    </div>
    <div class="product-basket__controls-wrap">
      <div class="product-basket__details">
        <div class="product-basket__actions">
          <div class="product-basket__controls">
            <Button
              variant="control-square"
              :position="controlsIconPosition"
              @click="decrementProductCount(product.id)"
            >
              <template #icon>
                <img src="@assets/img/icons/minus.svg" alt="" />
              </template>
            </Button>
            <div class="control-state">
              <Typography variant="body-sales" text-align="center">
                {{ getProductCount(product.id) }}
              </Typography>
            </div>
            <Button
              variant="control-square"
              :position="controlsIconPosition"
              @click="incrementProductCount(product.id)"
            >
              <template #icon>
                <img src="@assets/img/icons/plus.svg" alt="" />
              </template>
            </Button>
          </div>
          <Button variant="none" @click="removeProductById(product.id)">
            <template #icon>
              <img src="@assets/img/icons/trash.svg" alt="trash icon" />
            </template>
          </Button>
        </div>
        <ProductPrice :product="product" />
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
}

.control-state {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.25rem;
  border: 1px solid var(--Button-border-gradient);
  background: var(--Action-Secondary-Default);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);
}
.product-basket__controls {
  display: flex;
  align-items: center;
  gap: 0.38rem;
}

.product-basket__controls-wrap {
  flex: 1 1 auto;
}

.product-basket__details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
