<script setup lang="ts">
import { Notification, Notivue } from 'notivue'
</script>

<template>
  <div class="wrapper">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <ModalProvider />
    <Notivue v-slot="item">
      <NotivueSwipe :item="item">
        <Notification :item="item" />
      </NotivueSwipe>
    </Notivue>
  </div>
</template>
