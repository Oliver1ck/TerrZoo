<script setup lang="ts">
import type { Promotion } from '@data/promotionData'

type Variant = 'primary' | 'secondary'
const props = withDefaults(
  defineProps<{
    variant?: Variant
    data: Promotion
  }>(),
  {
    variant: 'primary',
  }
)
const classes = computed(() => ['promo', `promo--${props.variant}`])
</script>

<template>
  <div :class="classes">
    <div class="promo__text">
      <Typography tag="h3" variant="heading-md">
        {{ props.data.title }}
      </Typography>
      <VLink to="/catalog" variant="outline" size="sm">
        Перейти к выбору товара
      </VLink>
    </div>
    <div class="promo__img">
      <img :src="data.img" alt="sdfs" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.promo {
  width: 100%;
  border-radius: 0.3125rem;
  padding: 1.5rem 9.6rem 1.5rem 1.5rem;
  position: relative;

  &--primary {
    background: var(--Promotion-Primary-Bg);
  }

  &--secondary {
    background: var(--Promotion-Secondary-Bg);
  }

  &--primary,
  &--secondary {
    & .promo__img {
      position: absolute;
      bottom: 0;
      right: 1.5rem;
      & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}

.promo__text {
  max-width: 24.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}
@media (max-width: 992px) {
  .promo {
    padding: 0.5rem 7rem 0.5rem 0.5rem;
    flex: 0 1 23rem;
    &--primary,
    &--secondary {
      .promo__img {
        right: 0;

        & img {
          max-width: 7.25rem;
          max-height: 7.25rem;
        }
      }
    }
  }
}
</style>
