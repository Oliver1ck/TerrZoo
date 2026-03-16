<script setup lang="ts">
import Address from '@components/Address.vue'
import Button from '@components/Button.vue'
import Clock from '@components/Clock.vue'
import Logo from '@components/Logo.vue'
import Nav from '@components/Nav.vue'
import VLink from '@components/VLink.vue'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__controls">
          <Logo variant="secondary" />
          <Nav variant="secondary" />
        </div>
        <hr />
        <div class="footer__contacts">
          <Address />
          <Phone />
          <Clock />
          <Button variant="callback">
            Обратный звонок
          </Button>
        </div>
        <hr class="footer__accent" />
        <div class="footer__politic">
          <div class="footer__design">
            <Typography variant="body-sm" color="Disabled">
              Дизайн сайта:
            </Typography>
            <VLink
              to="https://www.shkuratovdesigner.com/"
              variant="interactive"
            >
              shkuratovdesigner.com
            </VLink>
          </div>
          <Typography variant="body-sm" color="Disabled">
            © Все права защищены 2026
          </Typography>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: 3.5rem;
  background: var(--Footer-Bg);
}
.footer__wrapper {
  padding: 1rem 0;

  & hr {
    background: #d2d5d8;
    height: 0.0625rem;
    margin: 1rem 0;
  }
}

.footer__controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}
.footer__wrapper {
  container: footer-wrapper/ inline-size;
}

@container footer-wrapper (width < 32.5rem) {
  .footer__controls {
    justify-content: center;
  }
  .footer__politic {
    flex-direction: column;
    align-items: center;
  }
}
.footer__contacts {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer__politic {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.footer__design {
  display: flex;
  align-items: center;
  gap: 0.37rem;
}
.footer__accent {
  display: none;
}
@media (max-width: 992px) {
  .footer {
    margin-top: 2rem;
  }
  .footer__politic {
    margin: 0;
  }
  .footer__accent {
    display: block;
  }
}
</style>
