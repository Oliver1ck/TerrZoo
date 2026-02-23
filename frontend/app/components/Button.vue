<script setup lang="ts">
type Variant = 'call' | 'outlined'
const props = withDefaults(
  defineProps<{
    variant?: Variant
  }>(),
  {
    variant: 'call',
  }
)

const classes = computed(() => ['button', `button--${props.variant}`])
</script>

<template>
  <button type="button" :class="classes">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  background: none;
  &--call {
    color: var(--Interactive-Default, #2c6ecb);
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-family: 'SF Pro Text';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 142.857% */
  }
  &--outlined {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: 1px solid var(--Icon-Highlight);
    color: var(--Text-Default);
    text-align: center;
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-family: 'SF Pro Text';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem; /* 142.857% */

    &:hover {
      border-radius: 0.25rem;
      border: 1px solid var(--Icon-Highlight);
      background: var(--Icon-Highlight);
      color: #fff;
    }
  }
}
</style>
