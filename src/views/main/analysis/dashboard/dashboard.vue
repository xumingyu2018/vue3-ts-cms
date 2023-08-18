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
          <div class="echart" ref="echartRef"></div>
        </chart-card>
      </el-col>

      <el-col :span="10">
        <chart-card/>

      </el-col>

      <el-col :span="7">
        <chart-card/>

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
import useAnalysisStore from '@/store/main/analysis/analysis'
import { storeToRefs } from 'pinia'
import chartCard from "./cpns/chart-card/chart-card.vue";
import { onMounted, ref } from "vue";

import * as echarts from 'echarts'

// 发起actions封装的网络请求
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()

// 获取数据
const { amountList } = storeToRefs(analysisStore)

// 1. 引用dom实例
const echartRef = ref<HTMLElement>()
onMounted(() => {
  // 2. 基于准备好的dom，初始化echart实例
  const echartInstance = echarts.init(echartRef.value!, "light", {
    renderer: 'canvas'
  })

  // 3.设置options(配置)
  echartInstance.setOption({
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  })
})
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 15px;
}

.echart {
  height: 250px;
  width: 500px;
}
</style>