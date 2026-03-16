<script setup lang="ts">
import type { AnimalType } from '@custom-types/animal'

const props = withDefaults(
  defineProps<{
    animal?: AnimalType
  }>(),
  {
    animal: () => ({
      id: 0,
      name: 'Собака',
      image: '@assets/img/animals/dog.png',
      description: 'Собака',
    }),
  }
)
// `catalog/${props.animal.id}`
</script>

<template>
  <NuxtLink to="/" class="animal">
    <img :src="props.animal.image" :alt="props.animal.description" />
    <Typography tag="h3" variant="heading-sm">
      {{ props.animal.name }}
    </Typography>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.animal {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-right: 3.25rem;
  border-radius: 0.3125rem;
  background: var(--Animal-Bg);
  transition: all 0.3s ease;

  & img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 0.3125rem;
  }

  &:hover {
    box-shadow:
      0 0 2px 0 rgba(0, 0, 0, 0.06),
      0 12px 32px 0 rgba(0, 0, 0, 0.1);

    &:deep(h3) {
      color: var(--Icon-Highlight);
    }
  }
}

@media (max-width: 992px) {
  .animal {
    padding-right: 1rem;
    gap: 0.5rem;

    & img {
      max-width: 3.5rem;
      max-height: 3.5rem;
      object-position: bottom;
    }
  }
}
</style>
