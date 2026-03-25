<script setup lang="ts">
import introImg from '@assets/img/intro.png'
</script>

<template>
  <section class="intro">
    <div class="container">
      <div class="intro__wrapper">
        <div class="intro__description">
          <Typography variant="heading-xl" tag="h1">
            Всё, что нужно вашему питомцу в 9 мин от метро Малиновка
          </Typography>
          <div class="intro-description__text">
            <AccentText>
              <Typography variant="body-md" tag="p">
                <b>Более 5000 товаров для</b> животных в наличии
              </Typography>
            </AccentText>
            <AccentText>
              <Typography variant="body-md" tag="p">
                <b>Вкусные сюрпризы</b> для ваших питомцев в магазине
              </Typography>
            </AccentText>
          </div>
          <VLink
            to="/catalog/"
            variant="primary-button"
            content-position="center"
            size="sm"
          >
            Выбрать товар
          </VLink>
        </div>
        <div class="intro__image">
          <img :src="introImg" alt="Intro image" fetchpriority="high" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.intro {
  background: var(--Surface-Default);
  padding: 2.05rem 0 2.5rem;
  overflow: hidden;
}

.intro__wrapper {
  display: flex;
  justify-content: space-between;
}

.intro__description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  flex: 0 0 32.8rem;
}

.intro-description__text {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.intro__image {
  flex: 0 0 35.8rem;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

@media (max-width: 992px) {
  .intro {
    padding: 1.5rem 0;
  }
  .intro__description {
    gap: 1rem;
    flex: 0 0 16.7rem;
  }
  .intro__image {
    flex: 0 0 23.75rem;
    position: relative;
    left: -5rem;
  }
  .intro-description__text {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    max-width: 11.7rem;
  }
}
</style>
