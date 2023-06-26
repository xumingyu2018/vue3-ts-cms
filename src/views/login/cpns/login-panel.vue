<template>
  <div class="login-panel">
    <!-- 顶部标题 -->
    <h1 class="title">后台管理系统</h1>
    <!-- tabs标签页 -->
    <div class="tabs">
      <el-tabs type="border-card" stretch="true">
        <el-tab-pane label="账号登录">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">账号登录</span>
            </div>
          </template>
          <el-form>
            <el-form-item label="账号">
              <el-input placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input placeholder="请输入密码"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="手机登录">
          <template #label>
            <div class="label">
              <el-icon><Cellphone /></el-icon>
              <div class="text">手机登录</div>
            </div>
          </template>
          <div>手机登录</div>
          <div>验证码</div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 底部区域 -->
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large"></el-checkbox>
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

  .label {
    display: flex;

    .text {
      margin-left: 5px;
    }
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
