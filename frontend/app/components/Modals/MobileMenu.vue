<script setup lang="ts">
import Address from '../Address.vue'
import Button from '../Button.vue'
import Clock from '../Clock.vue'
import Nav from '../Nav.vue'
import Phone from '../Phone.vue'
import Search from '../Search.vue'
import VLink from '../VLink.vue'

const { activeModal } = useModal()
const classes = computed(() => [
  'mobile-menu',
  { 'mobile-menu-active': activeModal.value === 'burger' },
])
</script>

<template>
  <div :class="classes" role="dialog" aria-modal="true">
    <div class="container">
      <div class="mobile-menu__wrapper">
        <Search />
        <Nav />
        <div class="mobile-menu__actions">
          <VLink
            to="/basket"
            variant="basket-outline"
            content-position="center"
          >
            <template #icon>
              <img src="@assets/img/icons/basket.svg" alt="basket icon" />
            </template>
            <template #default>
              Корзина
            </template>
          </VLink>
          <div class="mobile-menu__contacts">
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
</template>

<style lang="scss" scoped>
.mobile-menu {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 3.5rem 0 2rem;
  background: var(--Modals-Bg);
  overflow: auto;
  &-active {
    transition: all 0.3s ease;
    transform: translateX(0);
  }
}

.mobile-menu__wrapper {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.mobile-menu__actions {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.mobile-menu__contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
