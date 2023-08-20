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
          <pie-echart :pie-data="showGoodsCategoryCount"/>
        </chart-card>
      </el-col>

      <el-col :span="10">
        <chart-card></chart-card>
      </el-col>

      <el-col :span="7">
        <chart-card>
          <rose-echart :rose-data="showGoodsCategoryCount"/>
        </chart-card>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12">
        <chart-card>
          <line-echart :labels="showGoodsCategorySale.labels" :values="showGoodsCategorySale.values"/>
        </chart-card>
      </el-col>

      <el-col :span="12">
        <chart-card>
          <bar-echart v-bind="showGoodsCategoryFavor"/>
        </chart-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from "vue";
import countCard from "./cpns/count-card/count-card.vue";
import chartCard from "./cpns/chart-card/chart-card.vue";
import useAnalysisStore from '@/store/main/analysis/analysis'

// 发起actions封装的网络请求
const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()

// 获取数据
const { amountList, goodsCategoryCount, goodsCategorySale, goodsCategoryFavor } = storeToRefs(analysisStore)

// 获取echart饼图数据
const showGoodsCategoryCount = computed(() => {
  return goodsCategoryCount.value.map((item) => ({
    name: item.name,
    value: item.goodsCount
  }))
})

// 获取echart折线图数据
const showGoodsCategorySale = computed(() => {
  const labels = goodsCategorySale.value.map((item) => item.name)
  const values = goodsCategorySale.value.map((item) => item.goodsSale)
  return { labels, values }
})

// 获取echart柱状图数据
const showGoodsCategoryFavor = computed(() => {
  const labels = goodsCategoryFavor.value.map((item) => item.name)
  const values = goodsCategoryFavor.value.map((item) => item.goodsFavor)
  return { labels, values }
})

</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 15px;
}
</style>