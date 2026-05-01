<template>
  <router-view />
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease;
}
</style>
