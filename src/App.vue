<script setup>
import { RouterView, useRoute } from 'vue-router';

import TopBar from './components/TopBar.vue';

</script>

<template>
  <TopBar />
  <transition>
    <RouterView />
  </transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>