<script setup lang="ts"></script>

<template>
  <form class="search">
    <img src="@assets/img/icons/search.svg" alt="search icon" />
    <input type="text" name="search" placeholder="Поиск" />
  </form>
</template>

<style lang="scss" scoped>
.search {
  position: relative;
  flex: 0 1 31.25rem;

  & input {
    border-radius: 0.25rem;
    border: 1px solid var(--Text-input-border);
    background: var(--Surface-Default);
    padding: 0.5rem 0.75rem 0.5rem 2.5rem;
    background: #fff;
    width: 100%;
    color: var(--Text-Subdued);
    font-feature-settings:
      'liga' off,
      'clig' off;
    font-family: 'SF Pro Text';
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 133.333% */
  }
  & img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.88rem;
  }
}
</style>
