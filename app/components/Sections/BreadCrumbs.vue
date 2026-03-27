<script setup lang="ts">
interface Routes {
  label: string
  path: string
}
const props = defineProps<{
  parentRoutes?: Routes[]
}>()
const routes: Routes[] = [
  { label: 'Главная', path: '/' },
  { label: 'Каталог', path: 'catalog' },
  { label: 'Статьи', path: 'articles' },
  { label: 'Акции', path: 'promotions' },
  { label: 'Корзина', path: 'basket' },
]
const route = useRoute()

const breadCrumbs = computed(() => {
  const currentRoute = route.fullPath.split('/').filter(Boolean)
  const crumbs = [{ label: 'Главная', path: '/' }]
  if (props.parentRoutes) {
    crumbs.push(...props.parentRoutes)
    return crumbs
  }
  crumbs.push(...routes.filter(r => currentRoute.includes(r.path)))
  return crumbs
})
</script>

<template>
  <section class="bread-crumbs">
    <div class="container">
      <nav>
        <ul class="bread-crumbs__list">
          <template v-for="(item, index) in breadCrumbs" :key="item.label">
            <li
              v-if="index !== breadCrumbs.length - 1 || $slots.current"
              class="bread-crumbs__item"
            >
              <VLink :to="item.path" variant="breadCrumbs" size="sm">
                {{ item.label }}
              </VLink>
            </li>
            <li v-else class="bread-crumbs__item">
              <Typography variant="body-sm" color="Subdued">
                {{ item.label }}
              </Typography>
            </li>
            <li
              v-if="index !== breadCrumbs.length - 1 || $slots.current"
              class="bread-crumbs__item"
            >
              <img src="@assets/img/icons/right_chevron.svg" alt="chevron" />
            </li>
          </template>
          <li v-if="$slots.current" class="bread-crumbs__item">
            <Typography variant="body-sm" color="Subdued">
              <slot name="current"></slot>
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
