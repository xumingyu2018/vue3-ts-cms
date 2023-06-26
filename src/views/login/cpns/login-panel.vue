<template>
  <div class="login-panel">
    <!-- 顶部标题 -->
    <h1 class="title">后台管理系统</h1>
    <!-- tabs标签页 -->
    <div class="tabs">标签页</div>
    <!-- 底部区域 -->
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large "></el-checkbox>
      <el-link type="primary" href="">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" size="large">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isRemPwd = ref(false)
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;

  .title {
    text-align: center;
  }

  .controls {
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
