<script setup lang="ts">
import Typography from '@components/Typography.vue'
</script>

<template>
  <div class="clock">
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
</template>

<style lang="scss" scoped>
.clock {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.38rem;
  container: clock / inline-size;
  flex-wrap: wrap;
}
@container clock (width < 21.375rem) {
  :deep(p:nth-child(2)) {
    display: none;
  }
}

@media(max-width:992px) {
  .clock {
    width: 100%;
  }
}
</style>
