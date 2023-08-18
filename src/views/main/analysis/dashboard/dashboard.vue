<template>
  <div class="dashboard">
    <!--顶部卡片组件 -->
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6">
          <count-card v-bind="item"/>
        </el-col>
      </template>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="7">
        <chart-card>
          <pie-echart/>
        </chart-card>
      </el-col>

      <el-col :span="10">
        <chart-card>
          <line-echart/>  
        </chart-card>

      </el-col>

      <el-col :span="7">
        <chart-card>
        </chart-card>

      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12">
        <chart-card>折线图</chart-card>
      </el-col>

      <el-col :span="12">
        <chart-card>柱状图</chart-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import countCard from "./cpns/count-card/count-card.vue";
import chartCard from "./cpns/chart-card/chart-card.vue";
import { storeToRefs } from 'pinia'
import useAnalysisStore from '@/store/main/analysis/analysis'

// 发起actions封装的网络请求
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()

// 获取数据
const { amountList } = storeToRefs(analysisStore)
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 15px;
}
</style>