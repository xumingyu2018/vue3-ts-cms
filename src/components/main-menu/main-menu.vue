<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="图标" />
      <h2 class="title" v-show="!isFold">后台管理系统</h2>
    </div>
    <div class="menu">
      <el-menu
        :default-active="defaultValue"
        :collapse="isFold"
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"        
      >
        <template v-for="item in userMenus" :key="item.id">
          <!-- 子菜单 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <component :is="item.icon.split('-icon-')[1]"/>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>

            <!-- 子菜单的每一项 -->
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.id + ''" @click="handleItemClick(subItem)">{{ subItem.name }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/login';
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { mapPathToMenu } from '@/utils/map-menus';

defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})

// 1.存放动态的菜单
const loginStore = useLoginStore();
const userMenus = loginStore.userMenus

// 2.监听item的点击
const router = useRouter()
function handleItemClick(subItem: any) {
  const url = subItem.url
  router.push(url)
}

// 3.页面刷新时，根据当前的路由地址，设置默认选中的菜单项(默认值问题)
const route = useRoute()
const defaultValue = computed(() => {
  const currentMenu = mapPathToMenu(userMenus, route.path)
  return currentMenu.id + ''
})

</script>

<style lang="less" scoped>
.main-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
      white-space: nowrap;
    }
  }
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
