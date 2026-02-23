<!-- @format -->

<script setup lang="ts">
type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
type ColorVars =
  | 'Default'
  | 'On-Interactive'
  | 'Subdued'
  | 'Highlight'
  | 'Interactive-Default'
  | 'Success'
type Variant =
  | 'heading-xl'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'body-sm'
  | 'body-md'
  | 'body-lg'
type TypographyIconPos = 'left' | 'right'
const props = withDefaults(
  defineProps<{
    tag?: Tag
    variant?: Variant
    iconPosition?: TypographyIconPos
    color?: ColorVars
  }>(),
  {
    tag: 'p',
    variant: 'body-sm',
    iconPosition: 'left',
    color: 'Default',
  }
)

const computedColor = computed(() => {
  const colorVars: ColorVars[] = [
    'Default',
    'On-Interactive',
    'Subdued',
    'Highlight',
    'Interactive-Default',
    'Success',
  ]
  return colorVars.includes(props.color)
    ? `var(--Text-${props.color})`
    : props.color
})

const classes = computed(() => [
  'typography',
  `typography--${props.variant}`,
  `typography-position--${props.iconPosition}`,
])
</script>

<template>
  <component :is="tag" :class="classes">
    <slot name="icon" />
    <span>
      <slot />
    </span>
  </component>
</template>

<style lang="scss" scoped>
.typography {
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.38rem;
  color: v-bind(computedColor);
  &--heading-xl {
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-family: 'SF Pro Display';
    font-size: 2.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 3.15rem */
  }
  &--heading-lg {
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-family: 'SF Pro Display';
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2rem; /* 114.286% */
  }

  &--heading-md {
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-family: 'SF Pro Display';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 1.625rem */
  }

  &--heading-sm {
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-family: 'SF Pro Text';
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 1.3rem */
  }

  &--body-sm {
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-family: 'SF Pro Text';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 142.857% */
  }

  &--body-md {
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-family: 'SF Pro Text';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
  }
}
</style>
