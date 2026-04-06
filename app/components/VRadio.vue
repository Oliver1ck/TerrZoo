<script setup lang="ts">
defineProps<{
  title?: string
  padding?: string
  name?: string
  value?: string | number
}>()

const modelValue = defineModel<string | number | boolean>()
const inputId = useId()
</script>

<template>
  <div class="v-radio">
    <input
      :id="inputId"
      v-model="modelValue"
      :value="value"
      type="radio"
      :name="name"
    />
    <label v-if="title" :for="inputId">
      <Typography variant="body-sm">
        {{ title }}
      </Typography>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.v-radio {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & input {
    cursor: pointer;
    accent-color: var(--Action-Primary-Default);
    width: 1.125rem;
    height: 1.125rem;
  }
  & label {
    flex: 1 1 auto;
    cursor: pointer;
  }
}
</style>
