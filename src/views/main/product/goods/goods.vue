<template>
  <div class="goods">
    <page-search @query-click="handleQueryClick" @reset-click="handleResetClick" :search-config="searchConfig"/>

    <page-content ref="contentRef" @new-data-click="handleNewDataClick" @edit-data-click="handleEditDataClick" :content-config="contentConfig">
      <template #imgUrl="scope">
        <el-image style="width: 100px; height: 100px" :src=scope.row[scope.prop] lazy />
      </template>
    </page-content>

    <page-modal ref="modalRef" :modal-config="modalConfigRef">
      <template #upload>
        <el-upload
          class="avatar-uploader"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :show-file-list="false"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts" name="goods">
import pageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import PageModal from '@/components/page-modal/page-modal.vue'
import { computed, ref } from 'vue'

import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'
import useMainStore from '@/store/main/main'
import { usePageContent } from '@/hooks/usePageContent'
import { usePageModal } from '@/hooks/usePageModal'

// 对modalConfig进行操作，用于select中的options来自于接口数据
const modalConfigRef = computed(() => {
  const mainStore = useMainStore()
  // 将获取到的name和id映射成option需要的label和value形式
  const departments = mainStore.entireDepartments.map((item) => {
    return { label: item.name, value: item.id }
  })
  modalConfig.formItems.forEach((item) => {
    if (item.prop === 'parentId') {
      item.options.push(...departments)
    }
  })
  return modalConfig
})

// 抽取成hooks
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()

const { modalRef, handleEditDataClick, handleNewDataClick } = usePageModal()

</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
