<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tag?: string
    padding?: string
    radius?: string
    mobilePadding?: string
  }>(),
  {
    tag: 'div',
    padding: '1rem',
    radius: '0.3125rem',
    mobilePadding: '',
  },
)
</script>

<template>
  <component :is="props.tag" class="white-surface">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.white-surface {
  padding: v-bind('props.padding');
  border-radius: v-bind('props.radius');
  background: var(--Surface-Default);
}

@media (max-width: 992px) {
  .white-surface {
    padding: v-bind('props.mobilePadding || props.padding');
  }
}
</style>
