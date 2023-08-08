<template>
  <div class="menu">
    <page-content :content-config="contentConfig" @new-data-click="handleNewDataClick" @edit-data-click="handleEditDataClick"/>
    <page-modal :modal-config="modalConfig" ref="modalRef"/>
  </div>
</template>

<script setup lang="ts" name="menu">
import PageContent from '@/components/page-content/page-content.vue';
import contentConfig from './config/content.config';

import PageModal from '@/components/page-modal/page-modal.vue';
import modalConfig from './config/modal.config';

import { usePageModal } from '@/hooks/usePageModal';

const { modalRef, handleEditDataClick, handleNewDataClick } = usePageModal()
</script>

<style scoped>
</style>
