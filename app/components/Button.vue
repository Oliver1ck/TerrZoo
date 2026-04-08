<script setup lang="ts">
type Variant =
  | 'callback'
  | 'outlined'
  | 'burger'
  | 'search'
  | 'product-basket'
  | 'control'
  | 'select'

type ControlVariant = 'primary' | 'secondary'
type TextAlign = 'left' | 'center' | 'right' | 'inherit'
type IconPos = 'left' | 'right'

interface IconPosition {
  absolute?: boolean
  top?: string
  right?: string
  bottom?: string
  left?: string
  transform?: string
}

const props = withDefaults(
  defineProps<{
    variant?: Variant
    state?: boolean
    controlVariant?: ControlVariant
    selectActive?: boolean
    textAlign?: TextAlign
    iconPos?: IconPos
    position?: IconPosition
  }>(),
  {
    variant: 'callback',
    state: false,
    controlVariant: 'primary',
    selectActive: false,
    textAlign: 'inherit',
    iconPos: 'left',
    position: () => ({
      absolute: false,
    }),
  },
)

const classes = computed(() => [
  'button',
  `button--${props.variant}`,
  { 'button--burger--active': props.state },
  { [`button--control-${props.controlVariant}`]: props.variant === 'control' },
])

const contentClasses = computed(() => [
  'button__content',
  { [`button__content--${props.textAlign}`]: props.textAlign !== 'inherit' },
])

const innerClasses = computed(() => [
  'button__inner',
  `button__inner--${props.iconPos}`,
  { 'button__inner--icon-absolute': props.position.absolute },
])

const iconClasses = computed(() => [
  'button__icon',
  {
    'button__icon--absolute': props.position.absolute,
    'button__icon--active': props.variant === 'select' && props.selectActive,
  },
])

const iconStyle = computed(() => {
  if (!props.position.absolute) {
    return undefined
  }

  return {
    top: props.position.top,
    right: props.position.right,
    bottom: props.position.bottom,
    left: props.position.left,
    transform: props.position.transform,
  }
})
</script>

<template>
  <button type="button" :class="classes">
    <div :class="innerClasses">
      <span v-if="$slots.icon" :class="iconClasses" :style="iconStyle">
        <slot name="icon" />
      </span>
      <span v-if="$slots.default" :class="contentClasses">
        <slot />
      </span>
    </div>
    <span v-if="variant === 'burger'" class="burger-span"></span>
  </button>
</template>

<style lang="scss" scoped>
.button {
  background: none;
  transition: all 0.3s ease;
  position: relative;

  &__inner {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    &--left {
      flex-direction: row;
    }

    &--right {
      flex-direction: row-reverse;
    }

    &--icon-absolute {
      flex-direction: row;
    }
  }

  &__content {
    display: block;
    width: 100%;

    &--left {
      text-align: left;
    }

    &--center {
      text-align: center;
    }

    &--right {
      text-align: right;
    }
  }

  &--callback {
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
    position: relative;
    top: 0;
    left: 0;

    &:active {
      top: 1px;
    }

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
  &--product-basket {
    padding: 0.31rem 0.5rem 0.31rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid var(--Button-border-gradient);
    background: var(--Action-Secondary-Default);
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);
    color: #5c5f62;
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-family: 'SF Pro Text';
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    position: relative;
    top: 0;
    left: 0;

    &:active {
      top: 1px;
    }
  }
  &--control {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: var(--Icon-Highlight);
      & :deep(path) {
        fill: #fff;
      }
    }
    &-primary {
      background: #fff;
    }
    &-secondary {
      background: var(--Background-Default);
    }

    &:active {
      position: relative;
      top: 0;
      left: 0;

      &:active {
        top: 1px;
      }
    }
  }
  &--select {
    border-radius: 0.25rem;
    border: 1px solid var(--Button-border-gradient);
    background: var(--Surface-Default);
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);
    padding: 0.5rem 0.5rem 0.5rem 0.75rem;
    color: var(--Text-Default);
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-family: 'SF Pro Text';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    width: 100%;
    position: relative;
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
    flex: 0 0 auto;

    & :deep(img),
    & :deep(svg) {
      width: 1.25rem;
      height: 1.25rem;
      display: block;
    }

    &--absolute {
      position: absolute;
    }

    &--active {
      transform: translateY(-50%) rotate(180deg);
    }
  }
}
</style>
