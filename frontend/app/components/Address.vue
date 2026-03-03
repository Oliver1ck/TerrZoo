<script setup lang="ts">
import Typography from '@components/Typography.vue'
</script>

<template>
  <div class="address">
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
        <img src="@assets/img/icons/metro.svg" alt="" />
      </template>
      <template #default>
        Малиновка
      </template>
    </Typography>
  </div>
</template>

<style lang="scss" scoped>
.address {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
</style>
