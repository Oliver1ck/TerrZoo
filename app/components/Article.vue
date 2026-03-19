<script setup lang="ts">
import type { ArticleType } from '~/data/articles'

defineProps<{
  article: ArticleType
}>()
</script>

<template>
  <article class="article">
    <NuxtLink to="/article" class="article__link">
      <div class="article__img">
        <img :src="article.image_url" :alt="article.title" />
      </div>
      <Typography tag="h3" variant="heading-sm">
        <b>
          {{ article.title }}
        </b>
      </Typography>
    </NuxtLink>
    <div class="article__text">
      <Typography variant="body-sm">
        {{ article.description_short }}
      </Typography>
    </div>
    <div class="article__meta">
      <Typography variant="body-sm" color="Disabled">
        <template #icon>
          <img src="@assets/img/icons/clock.svg" alt="clock icon" />
        </template>
        <template #default>
          Время чтения: {{ article.time_to_read }} мин.
        </template>
      </Typography>
      <Typography variant="body-sm" color="Disabled">
        <template #icon>
          <img src="@assets/img/icons/calendar.svg" alt="calendar icon" />
        </template>
        <template #default>
          {{
            new Date(article.published_date)
              .toLocaleDateString('ru-RU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })
              .replace(' г.', '')
          }}
        </template>
      </Typography>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 0.3125rem;
  background: var(--Surface-Default);
  height: 100%;
  transition: all 0.3s ease;

  &:hover {
    box-shadow:
      0 0 2px 0 rgba(0, 0, 0, 0.06),
      0 12px 32px 0 rgba(0, 0, 0, 0.1);
  }
}

.article__img {
  overflow: hidden;
  border-radius: 0.3125rem;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 10rem;
  }
}

.article__meta {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.article__link {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.38rem;
  gap: 1rem;
}
</style>
