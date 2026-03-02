<script setup lang="ts">
import Button from '@components/Button.vue'
import Search from '@components/Search.vue'
import VLink from '@components/VLink.vue'
import { useMediaQuery } from '@vueuse/core'
import Address from './Address.vue'
import Clock from './Clock.vue'
import Phone from './Phone.vue'

const isDesktop = useMediaQuery('(min-width: 992px)')
const { toggleBurger, activeModal } = useModal()
</script>

<template>
  <header class="header">
    <div v-if="isDesktop" class="header__top">
      <div class="container">
        <div class="header__top-wrapper">
          <Address />
          <Clock />
          <Phone />
          <Button variant="call"> Обратный звонок </Button>
        </div>
      </div>
    </div>
    <div class="header__bottom">
      <div class="container">
        <div class="header__bottom-wrapper">
          <Logo :variant="isDesktop ? 'primary' : 'secondary'" />
          <div class="header__controls">
            <Search v-if="isDesktop" />
            <Nav v-if="isDesktop" />
            <Button v-else variant="search" @click="toggleBurger" />
            <VLink to="/basket" variant="basket">
              <template #icon>
                <img src="@assets/img/icons/basket.svg" alt="basket icon" />
              </template>
              <template #default>
                0
              </template>
            </VLink>
            <Button v-if="!isDesktop" variant="burger" :state="activeModal === 'burger'" @click="toggleBurger" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  &__top {
    padding: 0.75rem 0;
  }
}
.header__top-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 0.875rem;
}

.header__bottom {
  background: var(--Icon-Highlight);
  padding: 0.5rem 0;
}

.header__bottom-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
}

.header__controls {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  gap: 2.5rem;
}

@media (max-width: 991px) {
  .header__bottom-wrapper {
    gap: 1rem;
  }
  .header__bottom {
    background: var(--Header-Mob-Bg);
  }
  .header__controls {
    gap: 1.5rem;
    justify-content: flex-end;
  }
}
</style>
