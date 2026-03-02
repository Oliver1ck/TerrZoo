<script setup lang="ts">
type Variant = 'call' | 'outlined' | 'burger' | 'search'
const props = withDefaults(
  defineProps<{
    variant?: Variant
    state?: boolean
  }>(),
  {
    variant: 'call',
    state: false,
  }
)

const classes = computed(() => [
  'button',
  `button--${props.variant}`,
  { 'button--burger--active': props.state },
])
</script>

<template>
  <button type="button" :class="classes">
    <slot />
    <span v-if="variant === 'burger'" class="burger-span"></span>
    <img
      v-if="variant === 'search'"
      src="@assets/img/icons/searchIcon.svg"
      alt="search icon"
    />
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
  &--burger {
    width: 1.25rem;
    height: 1.25rem;
    position: relative;
    z-index: 10;

    & span {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
      height: 0.125rem;
      background: var(--Icon-Default);
      border-radius: 1rem;
      transition: all 0.3s ease;
    }
    &::after,
    &::before {
      transition: all 0.3s ease;
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 0.125rem;
      background: var(--Icon-Default);
      border-radius: 1rem;
    }
    &::after {
      top: 0.125rem;
    }
    &::before {
      bottom: 0.125rem;
    }
    &--active {
      & span {
        opacity: 0;
      }
      &::after {
        transform: rotate(45deg);
        top: 50%;
      }
      &::before {
        transform: rotate(-45deg);
        top: 50%;
      }
    }
  }
}
</style>
