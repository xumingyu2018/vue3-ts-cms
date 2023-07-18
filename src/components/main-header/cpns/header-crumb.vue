<template>
  <div class="header-crumb">
    <el-breadcrumb separator-icon="ArrowRight">
        <template v-for="(item, index) in breadcrumb" :key="index">
            <el-breadcrumb-item :to=item.url>{{ item.name }}</el-breadcrumb-item>
        </template>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { mapPathToBreadCrumb } from '@/utils/map-menus'
import { useRoute } from 'vue-router'
import useLoginStore from '@/store/login/login'
import { computed } from 'vue'

const route = useRoute()
const loginStore = useLoginStore()

// 路径改变时，重新计算面包屑
const breadcrumb = computed(() => {
    return mapPathToBreadCrumb(loginStore.userMenus, route.path)
})
</script>

<style lang="less" scoped>

</style>