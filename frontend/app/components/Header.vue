<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

import Address from '@components/Address.vue'
import Button from '@components/Button.vue'
import Clock from '@components/Clock.vue'
import Phone from '@components/Phone.vue'
import Search from '@components/Search.vue'
import VLink from '@components/VLink.vue'

const isDesktop = useMediaQuery('(min-width: 992px)', {
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
    <div v-if="mounted && isDesktop" class="header__top">
      <div class="container">
        <div class="header__top-wrapper">
          <Address />
          <Clock />
          <Phone />
          <Button variant="call">
            Обратный звонок
          </Button>
        </div>
      </div>
    </div>
    <div class="header__bottom">
      <div class="container">
        <div class="header__bottom-wrapper">
          <Logo :variant="mounted && isDesktop ? 'primary' : 'secondary'" />
          <div class="header__controls">
            <Search v-if="mounted && isDesktop" />
            <Nav v-if="mounted && isDesktop" />
            <Button v-if="mounted && !isDesktop" variant="search" @click="toggleBurger" />
            <VLink to="/basket" variant="basket">
              <template #icon>
                <img src="@assets/img/icons/basket.svg" alt="basket icon" />
              </template>
              <template #default>
                0
              </template>
            </VLink>
            <Button v-if="mounted && !isDesktop" variant="burger" :state="activeModal === 'burger'" @click="toggleBurger" />
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
