<script setup lang="ts">
import Button from './Button.vue'
import Link from './Link.vue'
import Search from './Search.vue'
</script>

<template>
  <header>
    <div class="header__top">
      <div class="container">
        <div class="header-top__wrapper">
          <div class="header__address">
            <Typography variant="body-sm">
              <template #icon>
                <img src="@assets/img/icons/location.svg" alt="location icon" />
              </template>
              <template #default>
                Минск, ул. Чюрлёниса, 6.
              </template>
            </Typography>
            <Typography variant="body-sm">
              <template #icon>
                <img src="@assets/img/icons/metro.svg" alt="">
              </template>
              <template #default>
                Малиновка
              </template>
            </Typography>
          </div>
          <div class="header__clock">
            <Typography variant="body-sm">
              <template #icon>
                <img src="@assets/img/icons/clock.svg" alt="clock icon" />
              </template>
              <template #default>
                Пон.-Пят. 10:00-21:00
              </template>
            </Typography>
            <Typography variant="body-sm">
              |
            </Typography>
            <Typography variant="body-sm">
              Суб.-Вос. 10:00-20:00
            </Typography>
          </div>
          <div class="header__phone">
            <Link to="tel:+375445010355" variant="phone" size="sm">
              <template #icon>
                <img src="@assets/img/icons/phone.svg" alt="phone icon">
              </template>
              <template #default>
                + 375 (44) 501 03 55
              </template>
            </Link>
            <Link to="https://www.instagram.com">
              <template #icon>
                <img src="@assets/img/icons/inst.svg" alt="instagram icon">
              </template>
            </Link>
          </div>
          <Button variant="call">
            Обратный звонок
          </Button>
        </div>
      </div>
    </div>
    <div class="header__bottom">
      <div class="container">
        <div class="header-bottom__wrapper">
          <Logo variant="primary"></Logo>
          <Search />
          <Nav />
          <Link to="/basket" variant="basket">
            <template #icon>
              <img src="@assets/img/icons/basket.svg" alt="basket icon">
            </template>
            <template #default>
              0
            </template>
          </Link>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header{
  &__top {
    padding: 0.75rem 0;
  }
}
.header-top__wrapper {
  display: flex;
  justify-content: space-between;
}

.header__address {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.header__clock {
  display: flex;
  align-items: center;
  gap: 0.38rem;
}
.header__phone {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.header__bottom {
  background: var(--Icon-Highlight);
  padding: 0.5rem 0;
}

.header-bottom__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
}
</style>
