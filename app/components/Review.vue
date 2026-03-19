<script setup lang="ts">
import type { ReviewType } from '~/data/review'

import Typography from '~/components/Typography.vue'

defineProps<{
  review: ReviewType
}>()
</script>

<template>
  <article class="review">
    <Typography tag="h3" variant="heading-sm" text-align="center">
      {{ review.name }}
    </Typography>
    <Typography text-align="center" variant="body-sm" color="Default">
      {{ review.description }}
    </Typography>
    <div class="review__who">
      <Typography tag="p" variant="body-md" color="Subdued">
        <template #icon>
          <img src="@assets/img/icons/phone.svg" alt="Phone icon" />
        </template>
        <template #default>
          {{ review.phone_number }}
        </template>
      </Typography>
      <Typography variant="body-md" color="Subdued">
        Питомец: {{ review.pet }}
      </Typography>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.review {
  max-width: 44.875rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;
}

.review__who {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

@media (max-width: 992px) {
  .review__who {
    gap: 0.5rem;
  }
}
</style>
