<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header height="50px">Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
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
.main {
  color: red;
  height: 100%;

  .main-content {
    height: 100%;
    .el-aside {
      background: yellowgreen;
    }

    .el-header {
      background: skyblue;
    }

    .el-main {
      background: pink;
    }

  }
}
</style>