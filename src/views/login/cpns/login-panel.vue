<template>
  <div class="login-panel">
    <!-- 顶部标题 -->
    <h1 class="title">后台管理系统</h1>
    <!-- tabs标签页 -->
    <div class="tabs">
      <el-tabs v-model="activeName" type="border-card" stretch="true">
        <el-tab-pane label="帐号登录" name="account">
          <!-- 图标插槽 -->
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">帐号登录</span>
            </div>
          </template>

          <!-- pane-account -->
          <pane-account ref="accountRef"/>
        </el-tab-pane>

        <el-tab-pane label="手机登录" name="phone">
          <!-- 图标插槽 -->
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
    <el-button class="login-btn" type="primary" size="large" @click="handleLoginBtnClick">
      立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import paneAccount from './pane-account.vue'

const activeName = ref('account')
const isRemPwd = ref(false)
const accountRef = ref<InstanceType<typeof paneAccount>>()

// 按钮监听
const handleLoginBtnClick = () => {
  if (activeName.value === 'account') {
    // 父组件调用子组件方法
    accountRef.value?.loginAction()
  } else {
    console.log('手机登录')
  }
}
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
