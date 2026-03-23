<script setup lang="ts"></script>

<template>
  <section class="contacts">
    <div class="container">
      <div class="contacts__wrapper">
        <div class="contacts__map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A07c28dc989242e4012f672a515cc1cc361ce4399ce6ee6e743935be986104188&amp;source=constructor"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
        </div>
        <div class="contacts__info">
          <Typography tag="h2" variant="heading-md" class="contacts__title">
            Бесплатно проконсультируем по любому вопросу связанному с вашим
            любимцем
          </Typography>
          <Address />
          <div class="contacts__time">
            <Typography tag="h3" variant="heading-sm">
              Время работы
            </Typography>
            <Clock />
          </div>
          <div class="contacts__phone">
            <Typography tag="h3" variant="heading-sm">
              Телефон
            </Typography>
            <Phone :inst="false" />
          </div>
          <div class="contacts__social">
            <Typography tag="h2" variant="heading-sm">
              Пишите нам в социальных сетях
            </Typography>
            <VLink to="/">
              <img src="@assets/img/icons/inst.svg" alt="Instagram icon" />
            </VLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contacts {
  margin-top: 3.5rem;
}
.contacts__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-right: 4.38rem;
}

.contacts__title {
  max-width: 19.5625rem;
}

.contacts__map {
  flex: 0 1 41.875rem;
  height: 23.375rem;
}
.contacts__info {
  flex: 0 0 21.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contacts__time,
.contacts__phone,
.contacts__social {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@media (max-width: 992px) {
  .contacts {
    margin-top: 2rem;
  }
  .contacts__wrapper {
    align-items: initial;
    flex-direction: column;
    padding-right: 0;
  }
  .contacts__title {
    max-width: none;
  }
  .contacts__map {
    width: 100%;
    flex: 0 0 15.1875rem;
  }

  .contacts__info {
    flex: initial;
  }
}
</style>
