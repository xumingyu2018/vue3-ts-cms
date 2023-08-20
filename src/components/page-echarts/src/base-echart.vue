<template>
  <div class="base-echart">
    <div class="echart" ref="echartRef"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref, watchEffect } from 'vue'
// 获取echart的option类型
import type { EChartsOption } from 'echarts'

// 接收每个echart不同配置
interface IProps {
    option: EChartsOption
}
const props = defineProps<IProps>()

// 1. 引用dom实例
const echartRef = ref<HTMLElement>()
onMounted(() => {
  // 2. 基于准备好的dom，初始化echart实例
  const echartInstance = echarts.init(echartRef.value!, "light", {
    renderer: 'canvas'
  })

  // 3.第一次options(配置),动态传入每个图的option
  // watchEffect监听option变化，重新执行
  watchEffect(() => echartInstance.setOption(props.option))

  // 4.监听window缩放实现echart响应式布局
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
})
</script>

<style lang="less" scoped>
.echart {
  height: 250px;
}
</style>