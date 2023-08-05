<template>
  <div class="department">
    <page-search @query-click="handleQueryClick" @reset-click="handleResetClick" :search-config="searchConfig"/>

    <page-content ref="contentRef" @new-data-click="handleNewDataClick" @edit-data-click="handleEditDataClick" :content-config="contentConfig">
      <!-- <template #leader="scope">
        <span style="color: red;">
          {{ scope.row[scope.prop] }}
        </span>
      </template>
      <template #parent="scope">
        <el-tag>
          {{ scope.row[scope.prop] }}
        </el-tag>
      </template> -->
    </page-content>

    <page-modal ref="modalRef" :modal-config="modalConfig"/>
  </div>
</template>

<script setup lang="ts" name="department">
import pageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import PageModal from '@/components/page-modal/page-modal.vue'
import { ref } from 'vue'

import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'

const contentRef = ref<InstanceType<typeof PageContent>>()
const modalRef = ref<InstanceType<typeof PageModal>>()
// 搜索功能
function handleQueryClick(searchInfo: any) {
  console.log(searchInfo);
  contentRef.value?.fetchPageListData(searchInfo)
} 
// 重置功能
function handleResetClick() {
  contentRef.value?.fetchPageListData()
}
// 新增功能
function handleNewDataClick() {
  modalRef.value?.setDialogVisible()
}
// 编辑功能
function handleEditDataClick(itemData: any) {
  modalRef.value?.setDialogVisible(false, itemData)
}
</script>

<style scoped>
.department {
}
</style>
