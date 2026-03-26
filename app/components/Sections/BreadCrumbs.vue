<script setup lang="ts">
interface Routes {
  label: string
  path: string
}
const routes: Routes[] = [
  { label: 'Главная', path: '/' },
  { label: 'Каталог', path: '/catalog' },
  { label: 'Статьи', path: '/articles' },
  { label: 'Акции', path: '/promotions' },
  { label: 'Корзина', path: '/basket' },
]
const route = useRoute()
const routeLabel = computed(
  () => routes.find(r => r.path === route.path)?.label
)
</script>

<template>
  <section class="bread-crumbs">
    <div class="container">
      <nav>
        <ul class="bread-crumbs__list">
          <li class="bread-crumbs__item">
            <VLink to="/" variant="breadCrumbs" size="sm">
              Главная
            </VLink>
          </li>
          <li class="bread-crumbs__item">
            <img src="@assets/img/icons/right_chevron.svg" alt="chevron" />
          </li>
          <li v-if="!routeLabel" class="bread-crumbs__item">
            <VLink to="/catalog" variant="breadCrumbs" size="sm">
              Каталог
            </VLink>
          </li>
          <li v-if="!routeLabel" class="bread-crumbs__item">
            <img src="@assets/img/icons/right_chevron.svg" alt="chevron" />
          </li>
          <li class="bread-crumbs__item">
            <Typography variant="body-sm" color="Subdued">
              {{ routeLabel }}
              <slot name="product"></slot>
            </Typography>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.bread-crumbs {
  padding-top: 1rem;
}

.bread-crumbs__list {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
