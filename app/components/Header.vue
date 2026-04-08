<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

const isDesktop = useMediaQuery('(min-width: 993px)', {
  ssrWidth: 1200,
})
const mounted = ref<boolean>(false)
onMounted(() => {
  mounted.value = true
})
const { toggleBurger, activeModal } = useModal()
</script>

<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__top-wrapper">
          <Logo v-if="!isDesktop" variant="secondary" index="active" />
          <Address v-if="isDesktop" />
          <Clock v-if="isDesktop" />
          <Phone v-if="isDesktop" />
          <Button v-if="isDesktop" variant="callback">
            Обратный звонок
          </Button>
          <div v-if="!isDesktop" class="header__top-controls">
            <Button variant="search" @click="toggleBurger">
              <template #icon>
                <img src="@assets/img/icons/searchIcon.svg" alt="search icon" />
              </template>
            </Button>
            <VLink to="/basket" variant="basket">
              <template #icon>
                <img src="@assets/img/icons/basket.svg" alt="basket icon" />
              </template>
              <template #default>
                0
              </template>
            </VLink>
            <Button
              variant="burger"
              :state="activeModal === 'burger' || activeModal === 'filters'"
              @click="toggleBurger"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="header__bottom"
      :class="{ burger__active: activeModal === 'burger' }"
      :role="!isDesktop && activeModal === 'burger' ? 'dialog' : undefined"
      :aria-modal="!isDesktop && activeModal === 'burger' ? 'true' : undefined"
      aria-label="Основное меню"
      :aria-hidden="!isDesktop && activeModal !== 'burger'"
      :inert="!isDesktop && activeModal !== 'burger'"
    >
      <div class="container">
        <div class="header__bottom-wrapper">
          <Logo v-if="isDesktop" variant="primary" index="active" />
          <Search :drop="true" />
          <div class="header__bottom-controls">
            <Nav />
            <VLink v-if="isDesktop" to="/basket" variant="basket">
              <template #icon>
                <img src="@assets/img/icons/basket.svg" alt="basket icon" />
              </template>
              <template #default>
                0
              </template>
            </VLink>
          </div>
          <div v-if="!isDesktop" class="burger__controls">
            <VLink
              to="/basket"
              variant="basket-outline"
              content-position="center"
              position="fullWidth"
            >
              <template #icon>
                <img src="@assets/img/icons/basket.svg" alt="basket icon" />
              </template>
              <template #default>
                Корзина
              </template>
            </VLink>
            <div class="burger__contacts">
              <Address />
              <Phone />
              <Clock />
              <Button variant="callback">
                Обратный звонок
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  &__top {
    background: var(--Surface-Default);
    padding: 0.75rem 0;
  }
}
.header__top-wrapper {
  display: flex;
  align-items: center;
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

.header__bottom-controls {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  gap: 2.5rem;
}

.header__top-controls {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.burger__controls {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}

.burger__contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

@media (max-width: 992px) {
  .header__bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    background: var(--Header-Mob-Bg);
    padding: 3.5rem 0 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    overflow-y: auto;
  }
  .header__top {
    padding: 0.5rem 0;
  }
  .burger__active {
    transform: translateX(0);
  }
  .header__bottom-wrapper {
    flex-direction: column;
    gap: 3rem;
  }
  .header__bottom-controls {
    width: 100%;
    align-items: stretch;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1.5rem;
  }
}
</style>
