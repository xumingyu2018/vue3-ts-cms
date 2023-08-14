<template>
  <div class="role">
    <page-search :search-config="searchConfig" @query-click="handleQueryClick" @reset-click="handleResetClick"/>
    <page-content :content-config="contentConfig" ref="contentRef" @new-data-click="handleNewDataClick" @edit-data-click="handleEditDataClick"/>
    <page-modal :modal-config="modalConfig" ref="modalRef" :other-info="otherInfo">
      <!-- 自定义菜单列表 -->
      <template #menulist>
        <el-tree
          ref="treeRef"
          :data="entireMenus"
          show-checkbox
          default-expand-all
          node-key="id"
          highlight-current
          :props="{ children: 'children', label: 'name' }"
          @check="handleELTreeCheck"
        />
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import pageSearch from '@/components/page-search/page-search.vue';
import searchConfig from './config/search.config'

import pageContent from '@/components/page-content/page-content.vue';
import contentConfig from './config/content.config';

import pageModal from '@/components/page-modal/page-modal.vue';
import modalConfig from './config/modal.config';

import { usePageContent } from '@/hooks/usePageContent';
import { usePageModal } from '@/hooks/usePageModal';
import useMainStore from '@/store/main/main';
import { storeToRefs } from 'pinia';
import { ref, nextTick } from 'vue';
import { mapMenuListToIds } from '@/utils/map-menus';
import type { ElTree } from 'element-plus/es/components/index.js';

// hooks逻辑关系
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()

const { modalRef, handleEditDataClick, handleNewDataClick } = usePageModal(newCallback, editCallback)

// 获取完整的菜单
const mainStore = useMainStore()
const { entireMenus } = storeToRefs(mainStore)

// 获取树形列表的key(id)
const otherInfo = ref({})
function handleELTreeCheck(data1: any, data2: any) {
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  otherInfo.value = { menuList }
} 

const treeRef = ref<InstanceType<typeof ElTree>>()
// 新增角色菜单权限重置
function newCallback(){
  nextTick(() => {
    treeRef.value?.setCheckedKeys([])
  })
}

// 编辑角色菜单权限回显
function editCallback(data: any){
  nextTick(() => {
    const menuList = mapMenuListToIds(data.menuList)
    // 只有在nextTick之后才能设置setCheckedKeys
    treeRef.value?.setCheckedKeys(menuList)
  })
}

</script>

<style lang="less" scoped>

</style>