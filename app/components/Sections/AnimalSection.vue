<script setup lang="ts">
import { animalList } from '@data/animal'
</script>

<template>
  <section class="animal-section">
    <div class="container">
      <div class="animal-section__wrapper">
        <ul class="animal__list">
          <li
            v-for="animal in animalList"
            :key="animal.id"
            class="animal__item"
          >
            <Animal :animal="animal" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.animal-section__wrapper {
  overflow: hidden;
}
.animal__list {
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  overflow: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
}

.animal__item {
  flex: 0 0 13.425rem;
}

@media (max-width: 992px) {
  .animal__list {
    gap: 0.5rem;
  }
  .animal__item {
    flex: 0 0 9rem;
  }
}
</style>
