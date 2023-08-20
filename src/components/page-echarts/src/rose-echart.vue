<template>
  <div class="pie-echart">
    <base-echart :option="option" />
  </div>
</template>

<script setup lang="ts">
import BaseEchart from './base-echart.vue'
import { computed } from 'vue'
import type { IEchartValueType } from '../types'
import type { EChartsOption } from 'echarts'

interface IProps {
  roseData: IEchartValueType[]
}

const props = defineProps<IProps>()

// 玫瑰图
const option = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: [10, 160],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        bottom: '-25%',
        data: props.roseData,
        label: {
            show: false
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped></style>
