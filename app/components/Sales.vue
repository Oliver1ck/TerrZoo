<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary'
    postion?: {
      top?: string
      left?: string
      right?: string
      bottom?: string
    }
  }>(),
  {
    variant: 'primary',
  },
)
</script>

<template>
  <div
    class="sales"
    :class="[`sales--${props.variant}`]"
    :style="props.postion"
  >
    <Typography
      v-if="props.variant === 'primary'"
      tag="p"
      color="On-Interactive"
      variant="body-sales"
    >
      Акция
    </Typography>
    <Typography v-else tag="p" color="Critical-Default" variant="body-sales">
      Акция
    </Typography>
  </div>
</template>

<style lang="scss" scoped>
.sales {
  position: absolute;

  &--primary {
    border-radius: 0.125rem;
    background: var(--Text-Critical-Default);
    padding: 0 0.38rem;
  }
}
</style>
