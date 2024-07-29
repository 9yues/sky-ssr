<script lang="ts" setup>
// @ts-nocheck

// 引入echarts依赖
import * as echarts from 'echarts'

// 导入中国地图JSON数据
import { onMounted } from 'vue'
import mapJson from '@/assets/js/china.js'

interface Props {
  [propName: string]: any
}
interface Emits {
  (eventName: 'string', data: any): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

onMounted(() => {
  // 这个钩子会在 'app:created' 之后调用
  console.log('页面组件挂载')
  const data = [
    {
      name: '内蒙古',
      value: 6666,
    },
    {
      name: '山东',
      value: 99999,
    },
    {
      name: '青海',
      value: 9999,
    },
    {
      name: '河北',
      value: 999,
    },
    {
      name: '新疆',
      value: 99,
    },
    {
      name: '西藏',
      value: 9,
    },
    {
      name: '四川',
      value: 69999,
    },
    {
      name: '黑龙江',
      value: 28848,
    },
    {
      name: '甘肃',
      value: 54321,
    },
  ]

  initMap(data)
})

// 省略前置逻辑
// 从后端接口获取要渲染的数据列表 name-对应省份 value-对应数据量

// 渲染地图函数（最大值参数可不传递，默认为10000）
const initMap = (dataList, maxValue = 10000) => {
  console.log('echarts', echarts)
  console.log('dom', document.getElementById('map'))

  // 判断是否已经存在实例 避免重复注册
  let myChart = echarts.getInstanceByDom(document.getElementById('map'))
  if (!myChart)
    myChart = echarts.init(document.getElementById('map'))

  		// 注册地图
  echarts.registerMap('china', mapJson)
  let option
  option = {
    // 提示框组件
    tooltip: {
      trigger: 'item', // 触发类型-数据项图形hover触发
      formatter: '{b}：{c}人', // hover提示框展示的内容
    },
    // 视觉映射组件
    visualMap: {
      orient: 'horizontal', // 显示方式-水平
      left: 'center', // 距离容器左侧的位置-居中
      min: 0, // 数据最小值
      max: maxValue, // 指定数据最大值
      itemHeight: 200, // 组件高度-200px(设置显示方式为水平之后，组件高度即为宽度)
      inRange: {
        color: ['#fff', '#88a6d8'], // 范围颜色-从小到大渐变颜色区间
      },
      hoverLink: false, // 是否启用数据项图形hover时的联动高亮效果。
      // text: ["高", "低"], // 组件两侧的文本
    },
    series: [
      {
        name: '中国', // 地图名称
        type: 'map', // 系列类型-地图
        map: 'china', // 地图类型-与registerMap注册地图的名字相同
        roam: false, // 是否开启鼠标缩放和平移漫游
        zoom: 1.2, // 当前视角的缩放比例
        select: {
          disabled: true, // 数据项图形是否能被选中
        },
        label: {
          normal: {
            show: false, // 是否在数据图形上展示省份名称
          },
        },
        data: dataList, // 渲染的数据列表
      },
    ],
  }
  option && myChart.setOption(option)
}
</script>

<template>
  <div id="map" class="china-map" />
</template>

<style scoped lang="scss">
.china-map {
  height: 800px; /* 必须指定画布的高度 否则无法渲染 */
}
</style>
