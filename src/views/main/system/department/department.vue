<template>
  <div class="department">
    <page-search @query-click="handleQueryClick" @reset-click="handleResetClick"/>
    <page-content ref="contentRef" @new-data-click="handleNewDataClick" @edit-data-click="handleEditDataClick"/>
    <page-modal ref="modalRef" />

  </div>
</template>

<script setup lang="ts" name="department">
import pageSearch from './cpns/page-search.vue'
import PageContent from './cpns/page-content.vue'
import PageModal from './cpns/page-modal.vue'
import { ref } from 'vue'

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
