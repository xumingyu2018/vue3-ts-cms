<template>
  <div class="map-echart">
    <base-echart :option="option" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseEchart from './base-echart.vue'
import type { EChartsOption } from 'echarts'
import type { IEchartValueType } from '../types'
import { convertData } from '../utils/convert-data'

const props = defineProps<{
    mapData: IEchartValueType[]
}>()

// 只负责传入饼图的option
const option = computed<EChartsOption>(() => {
  return {
    width: '270px',
    height: '250px',
    center: [100, 32], 
    backgroundColor: '#fff',
    title: {
        text: '全国销量统计',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params: any) {
            return params.name + ' : ' + params.value[2]
        }
    },
    visualMap: {
        min: 0,
        max: 60000,
        left: 20,
        bottom: 20,
        calculable: true,
        text: ['高', '低'],
        inRange: {
            color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
        },
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        // 设置使用的地图(注册过的china地址)
        map: 'china',
        // 支持鼠标缩放效果
        // roam: 'scale',
        emphasis: {
            areaColor: '#f4cccc',
            borderColor: 'rgb(9, 54, 95)',
            itemStyle: {
                areaColor: '#f4cccc'
            }
        }
    },
    series: [
        {
            name: '销量',
            // 散点图在地图上展示数据
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(props.mapData),
            // 散点的大小（可以根据数据不同显示不同的大小，设置为一个函数）
            symbolSize: 11,
            emphasis: {
                itemStyle: {
                    borderCap: '#fff',
                    borderWidth: 1
                }
            }
        },
        {
            // 会自动生成geo地理坐标系统
            type: 'map',
            // 设置使用的地图名称，复用的是第0个坐标系统
            map: 'china'
        }
    ]
  }
})
</script>

<style lang="less" scoped></style>
