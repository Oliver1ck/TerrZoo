<script setup lang="ts">
import Link from './Link.vue'

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary'
}>(), {
  variant: 'primary',
})
</script>

<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item">
        <Link to="/" :variant="props.variant" size="sm">
          Главная
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/catalog" :variant="props.variant" size="sm">
          Каталог
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/promotions" :variant="props.variant" size="sm">
          Акции
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/articles" :variant="props.variant" size="sm">
          Статьи
        </Link>
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
</style>
