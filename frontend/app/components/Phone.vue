<script setup lang="ts">
import VLink from '@components/VLink.vue'
</script>

<template>
  <div class="phone">
    <VLink to="tel:+375445010355" variant="phone" size="sm">
      <template #icon>
        <img src="@assets/img/icons/phone.svg" alt="phone icon" />
      </template>
      <template #default>
        + 375 (44) 501 03 55
      </template>
    </VLink>
    <VLink to="https://www.instagram.com">
      <template #icon>
        <img src="@assets/img/icons/inst.svg" alt="instagram icon" />
      </template>
    </VLink>
  </div>
</template>

<style lang="scss" scoped>
.phone {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 0 0 auto;
}
</style>
