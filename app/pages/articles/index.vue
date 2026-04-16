<script setup lang="ts">
import AnimalSection from '@components/Sections/AnimalSection.vue'
import BreadCrumbs from '@components/Sections/BreadCrumbs.vue'
import Contacts from '@components/Sections/Contacts.vue'
import Slider from '@components/Sections/Slider.vue'
import { articles } from '@data/articles'
</script>

<template>
  <BreadCrumbs />
  <AnimalSection />
  <section class="articles">
    <div class="container">
      <div class="articles__wrapper">
        <Typography variant="heading-xl" tag="h1">
          Полезные статьи о ком-то
        </Typography>
        <ul class="articles__list">
          <li
            v-for="article in articles"
            :key="article.id"
            class="article__item"
          >
            <Article :article="article" />
          </li>
        </ul>
        <Button variant="outlined">
          Показать ещё
        </Button>
      </div>
    </div>
  </section>
  <Slider title="Популярные товары" />
  <Contacts />
</template>

<style lang="scss" scoped>
.articles {
  margin-bottom: 4.25rem;
}
.articles__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.articles__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2.5rem 0 1.5rem;
}
</style>
