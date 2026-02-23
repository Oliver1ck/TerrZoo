<script setup lang="ts">
type Variant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outline'
  | 'phone'
  | 'basket'
type Size = 'sm' | 'md' | 'lg'
type LinkIconPos = 'left' | 'right'

const props = withDefaults(
  defineProps<{
    to: string
    variant?: Variant
    size?: Size
    iconPosition?: LinkIconPos
  }>(),
  {
    variant: 'primary',
    size: 'md',
    iconPosition: 'left',
  }
)

const classes = computed(() => [
  'link',
  `link--${props.variant}`,
  `link--${props.size}`,
  `link--icon-${props.iconPosition}`,
])
</script>

<template>
  <NuxtLink :to="props.to" :class="classes">
    <slot name="icon" />
    <span>
      <slot />
    </span>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  &--primary {
    color: var(--Text-On-Interactive, #fff);
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 0.25rem;
    }
  }
  &--secondary {
    color: var(--Text-Default, #202223);
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 500;
  }
  &--outline {
    border-radius: 0.25rem;
    border: 1px solid var(--Border-Default);
    background: #fff;
    padding: 0.5rem 1rem;
    color: var(--Text-Default);
    text-align: center;
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 500;
  }
  &--phone {
    color: var(--Text-Default, #202223);
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 600;
  }
  &--basket {
    border-radius: 0.25rem;
    border: 1px solid var(--Button-border-gradient);
    background: var(--Action-Secondary-Hovered);
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);
    padding: 0.5rem 0.88rem 0.5rem 0.75rem;
    color: var(--Text-Default);
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-family: 'SF Pro Text';
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem; /* 133.333% */
  }
  &--sm {
    font-size: 0.875rem;
    line-height: 1.25rem; /* 142.857% */
  }
  &--md {
    font-size: 1rem;
    line-height: 130%; /* 1.3rem */
  }
}

.link--icon {
  &-left {
    flex-direction: row;
  }
  &-right {
    flex-direction: row-reverse;
  }
}
</style>
