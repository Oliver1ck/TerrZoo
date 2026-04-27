<script setup lang="ts">
defineProps<{
  count: number
}>()

const emit = defineEmits<{
  (e: 'decrement'): void
  (e: 'increment'): void
}>()

const controlsIconPosition = {
  absolute: true,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}
</script>

<template>
  <div class="product-count-controls">
    <Button
      variant="control-square"
      :position="controlsIconPosition"
      @click="emit('decrement')"
    >
      <template #icon>
        <img src="@assets/img/icons/minus.svg" alt="" />
      </template>
    </Button>
    <div class="control-state">
      <Typography variant="body-sales" text-align="center">
        {{ count }}
      </Typography>
    </div>
    <Button
      variant="control-square"
      :position="controlsIconPosition"
      @click="emit('increment')"
    >
      <template #icon>
        <img src="@assets/img/icons/plus.svg" alt="" />
      </template>
    </Button>
  </div>
</template>

<style lang="scss" scoped>
.product-count-controls {
  display: flex;
  align-items: center;
  gap: 0.38rem;
}

.control-state {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.25rem;
  border: 1px solid var(--Button-border-gradient);
  background: var(--Action-Secondary-Default);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);
}
</style>
