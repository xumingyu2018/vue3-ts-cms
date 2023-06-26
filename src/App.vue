<template>
  <div class="app">
    <h2>App</h2>
    <router-link to="/main">主页</router-link>
    <router-link to="/login">登录</router-link>
    <router-view/>
  </div>
</template>

<script setup lang="ts">
</script>


<style scoped>
.app {
  /* 不能使用%，因为相对于父元素；vh相对于视口 */
  width: 100vw;
  height: 100vh;
  background-color: skyblue;
}
</style>
