<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6">
          <count-card v-bind="item"/>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import countCard from "./cpns/count-card/count-card.vue";
import useAnalysisStore from '@/store/main/analysis/analysis'
import { storeToRefs } from 'pinia'

// 发起actions封装的网络请求
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()

// 获取数据
const { amountList } = storeToRefs(analysisStore)
</script>

<style lang="less" scoped>

</style>