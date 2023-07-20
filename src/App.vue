<template>
    <div class="app">
      <!-- 国际化配置（将组件中的英文转为中文->日期组件） -->
      <el-config-provider :locale="zhCn">
        <router-view />
      </el-config-provider>
    </div>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<style scoped>
.app {
  /* 不能使用%，因为相对于父元素；vh相对于视口 */
  width: 100vw;
  height: 100vh;
}
</style>
