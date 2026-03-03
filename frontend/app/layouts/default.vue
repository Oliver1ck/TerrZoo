<script setup lang="ts">
import Footer from '@components/Footer.vue'
import Header from '@components/Header.vue'
</script>

<template>
  <Header />
  <main class="main">
    <slot />
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
</style>
