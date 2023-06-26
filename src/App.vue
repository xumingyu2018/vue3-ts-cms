<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.app {
  /* 不能使用%，因为相对于父元素；vh相对于视口 */
  width: 100vw;
  height: 100vh;
}
</style>
