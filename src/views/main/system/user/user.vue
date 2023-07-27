<template>
  <div class="user">
    <user-search @query-click="handleQueryClick" @reset-click="handleResetClick"/>
    <user-content ref="contentRef"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import userContent from './cpns/user-content.vue'
import userSearch from './cpns/user-search.vue' 

const contentRef = ref<InstanceType<typeof userContent>>()
function handleQueryClick(searchInfo: any) {
  console.log(searchInfo);
  contentRef.value?.fetchUserListData(searchInfo)
}

function handleResetClick() {
  contentRef.value?.fetchUserListData()
}
</script>

<style lang="less" scoped>

</style>