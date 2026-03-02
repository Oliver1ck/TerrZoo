<script setup lang="ts">
import VLink from '@components/VLink.vue'

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary'
  size?: 'sm'
}>(), {
  variant: 'primary',
  size: 'sm',
})
</script>

<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item">
        <VLink to="/" :variant="props.variant" :size="props.size">
          Главная
        </VLink>
      </li>
      <li class="nav-item">
        <VLink to="/catalog" :variant="props.variant" :size="props.size">
          Каталог
        </VLink>
      </li>
      <li class="nav-item">
        <VLink to="/promotions" :variant="props.variant" :size="props.size">
          Акции
        </VLink>
      </li>
      <li class="nav-item">
        <VLink to="/articles" :variant="props.variant" :size="props.size">
          Статьи
        </VLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav-list {
  display: flex;
  align-items: center;
  gap: 2rem;
}

@media (max-width: 992px) {
  .nav-list {
    flex-direction: column;
  }
}
</style>
