<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isFold ? '60px' : '210px'">
        <!-- 父传子（defineProps） -->
        <main-menu :is-fold="isFold"/>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <!-- emit子传父（defineEmits） -->
          <main-header @fold-change="handleFoldChange"/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache'; 
import { useRouter } from 'vue-router';
import MainMenu from '@/components/main-menu/main-menu.vue'
import MainHeader from '@/components/main-header/main-header.vue'
import { ref } from 'vue';

const isFold = ref(false)
function handleFoldChange(isFoldValue: boolean) {
  isFold.value = isFoldValue
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;

  .main-content {
    height: 100%;

    .el-aside {
      overflow-x: hidden;
      overflow-y: auto;
      line-height: 200px;
      text-align: left;
      cursor: pointer;
      background-color: #001529;
      transition: width 0.3s linear;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .el-main {
      background-color: #f0f2f5;
    }
  }
}
</style>