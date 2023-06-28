<template>
  <div class="main">
    <h2>main</h2>
    <button @click="handleExitClick">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache';
import { useRouter } from 'vue-router';

const router = useRouter()
const handleExitClick = () => {
  localCache.deleteCache('token')
  router.push('/login')
}
</script>

<style lang="less" scoped>

</style>