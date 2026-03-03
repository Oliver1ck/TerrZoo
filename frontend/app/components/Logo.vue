<script setup lang="ts">
type Variant = 'primary' | 'secondary'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    index?: 'active' | 'default'
  }>(),
  {
    variant: 'primary',
    index: 'default',
  }
)

const classes = computed(() => [
  'logo',
  `logo--${props.variant}`,
  { 'logo--index': props.index === 'active' },
])
</script>

<template>
  <NuxtLink to="/" :class="classes">
    <img
      v-if="props.variant === 'primary'"
      src="@assets/img/icons/logoWhite.svg"
      alt="Logo"
    />
    <img v-else src="@assets/img/icons/logoBlack.svg" alt="Logo" />
    <span>Территория <b>ZOO</b></span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.logo {
  flex: 0 0 11.5rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  position: relative;
  &--primary {
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
  &--secondary {
    color: var(--Text-Default, #202223);
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-family: 'SF Pro Text';
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 150% */
    text-transform: uppercase;

    & b {
      color: var(--Text-Success);
    }
  }
  &--index {
    z-index: 10;
  }
}
</style>
