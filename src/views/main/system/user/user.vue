<template>
  <div class="user">
    <user-search @query-click="handleQueryClick" @reset-click="handleResetClick"/>
    <user-content ref="contentRef" @new-data-click="handleNewDataClick"/>
    <user-modal ref="modalRef"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import userContent from './cpns/user-content.vue'
import userModal from './cpns/user-modal.vue'
import userSearch from './cpns/user-search.vue' 

const contentRef = ref<InstanceType<typeof userContent>>()
const modalRef = ref<InstanceType<typeof userModal>>()
// 搜索功能
function handleQueryClick(searchInfo: any) {
  console.log(searchInfo);
  contentRef.value?.fetchUserListData(searchInfo)
}
// 重置功能
function handleResetClick() {
  contentRef.value?.fetchUserListData()
}
// 新增用户功能
function handleNewDataClick() {
  modalRef.value?.setDialogVisible()
}
</script>

<style lang="less" scoped>

</style>