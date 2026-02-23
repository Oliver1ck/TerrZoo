<script setup lang="ts">
type Variant = 'primary' | 'secondary'

const props = withDefaults(
  defineProps<{
    variant?: Variant
  }>(),
  {
    variant: 'primary',
  }
)

const classes = computed(() => ['logo', `logo--${props.variant}`])
</script>

<template>
  <NuxtLink to="/" :class="classes">
    <img
      v-if="props.variant === 'primary'"
      src="@assets/img/icons/logoWhite.svg"
      alt="Logo"
    />
    <img v-else src="@assets/img/icons/logoBlack.svg" alt="Logo" />
    <span>Территория ZOO</span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  color: var(--Text-On-Interactive);
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: 'SF Pro Text';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 150% */
  text-transform: uppercase;
}
</style>
