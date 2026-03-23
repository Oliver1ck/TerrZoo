<script setup lang="ts"></script>

<template>
  <section class="about">
    <div class="container">
      <div class="about__wrapper">
        <div class="about__text">
          <div class="about__owner">
            <Typography tag="h2" variant="heading-lg">
              Здравствуйте, счастливый хозяин любимого питомца!
            </Typography>
            <Typography variant="body-md">
              Меня зовут Ирина, 2 года назад моя бесконечная любовь к животным
              трансформировалась в магазин «Территория ZOO». Место, главная цель
              которого — забота о полноценной жизни питомцев, здоровой, долгой,
              радостной и гармоничной. Наш долг — создавать лучшее предложение
              для ваших домашних любимцев.
            </Typography>
          </div>
          <ul class="about__list">
            <li class="about__item">
              <AccentText>
                <div class="about__accent-item">
                  <Typography tag="h3" variant="heading-sm">
                    <b> За 7 минут соберем заказ </b>
                  </Typography>
                  <Typography variant="body-md">
                    Выбирайте товары на сайте, забирайте в удобное время в нашем
                    магазине. Уже через 30 минут собранный и упакованный заказ
                    будет ждать вас.
                  </Typography>
                </div>
              </AccentText>
            </li>
            <li class="about__item">
              <AccentText accent-gap="secondary">
                <div class="about__accent-item">
                  <Typography tag="h3" variant="heading-sm">
                    <b> Поможем с выбором товаров </b>
                  </Typography>
                  <Typography variant="body-md">
                    Задавайте вопросы профессионалам, получайте консультации по
                    кормлению и содержанию питомца.
                  </Typography>
                </div>
              </AccentText>
            </li>
            <li class="about__item">
              <AccentText accent-gap="secondary">
                <div class="about__accent-item">
                  <Typography tag="h3" variant="heading-sm">
                    <b> Поставим товар на заказ! </b>
                  </Typography>
                  <Typography variant="body-md">
                    Мы работаем с лучшими поставщиками сертифитированного товара
                    для животных. Если нужного Вам товара не будет в наличии мы
                    в кратчайшие сроки договоримся о его поставке и сообщим Вам.
                  </Typography>
                </div>
              </AccentText>
            </li>
          </ul>
        </div>
        <div class="about__image">
          <img src="@assets/img/aboutSection.png" alt="About Section" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  background: var(--Surface-Default);
  margin-top: 3.5rem;
}

.about__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.about__text {
  flex: 0 1 37.3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about__owner {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.about__list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.about__accent-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@media (max-width: 992px) {
  .about {
    padding: 1rem 0;
    margin-top: 2rem;
  }
  .about__list {
    flex-direction: initial;
    flex-wrap: wrap;
  }

  .about__text {
    flex: initial;
  }

  .about__item {
    flex: 1 1 20.875rem;
  }
  .about__image {
    display: none;
  }
}
</style>
