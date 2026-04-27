<script setup lang="ts">
type PickupInfoVariant = 'primary' | 'secondary'

const props = withDefaults(
  defineProps<{
    variant?: PickupInfoVariant
  }>(),
  {
    variant: 'primary',
  },
)

const classes = computed(() => ['pickup-info', `pickup-info--${props.variant}`])
</script>

<template>
  <div :class="classes">
    <img
      src="@assets/img/icons/box.svg"
      alt="box icon"
      class="pickup-info__icon"
    />

    <div class="pickup-info__content">
      <Typography
        tag="h4"
        variant="heading-md"
        :color="variant === 'secondary' ? 'Default' : 'On-Interactive'"
        font-weight="600"
      >
        Самовывоз
      </Typography>

      <Typography
        v-if="variant === 'secondary'"
        variant="body-sm"
        color="Subdued"
        class="pickup-info__description"
      >
        В данный момент товар можно забрать только самовывозом из нашего уютного
        магазина по адресу:
      </Typography>

      <Typography v-if="variant === 'primary'" color="On-Interactive">
        <template #icon>
          <img src="@assets/img/icons/location_white.svg" alt="location icon" />
        </template>
        <template #default>
          Минск, ул. Чюрлёниса, 6.
        </template>
      </Typography>
      <Address v-else />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pickup-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &--secondary {
    gap: 1.12rem;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 0.38rem;
  }
}

.pickup-info__description {
  max-width: 26.5rem;
}
</style>
