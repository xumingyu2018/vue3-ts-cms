<template>
  <div class="count-card">
    <div class="header">
        <span class="title">{{ title }}</span>
        <el-tooltip :content="tips" placement="top-start" effect="dark">
            <el-icon><Warning /></el-icon>
        </el-tooltip>
    </div>
    <div class="content">
        <span ref="count1Ref">{{ number1 }}</span>
    </div>
    <div class="footer">
        <span>{{ subtitle }}</span>
        <span ref="count2Ref">{{ number2 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
// 数字递增动画
import { CountUp } from 'countup.js';
import { onMounted, ref } from 'vue';

interface IProps {
    amount? :string,
    title?: string,
    tips?: string,
    number1?: number,
    number2?: number,
    subtitle?: string
}

// withDefaults默认值
const props = withDefaults(defineProps<IProps>(), {
    title: '商品总销量',
    tips: '所有商品的总销量',
    number1: 509989,
    number2: 509989,
    subtitle: '商品总销量'
})

const countOption = {
    prefix: props.amount == 'saleroom' ? '¥' : ''
}

// 创建CountUp的实例对象
const count1Ref = ref<HTMLElement>()
const count2Ref = ref<HTMLElement>()
// 参数1: 数字动画的元素
// 参数2: 数字增加到多少
// 参数3: 给参数1前面加个前缀，如¥
// 这里使用onMounted是因为setup的时候还没挂载到ref,就会报错
onMounted(() => {
    const countup1 = new CountUp(count1Ref.value!, props.number1, countOption)
    const countup2 = new CountUp(count2Ref.value!, props.number2, countOption)

    countup1.start()
    countup2.start()
})

</script>

<style lang="less" scoped>
.count-card {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    height: 130px;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    .header {
        display: flex;
        height: 38px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        justify-content: space-between;
        align-items: flex-end
    }

    .content {
        display: flex;
        align-items: center;
        flex: 1;
        margin-left: 0px;
        font-size: 26px;
        color: rgba(0, 0, 0, 0.85);
    }

    .footer {
        display: flex;
        height: 38px;
        line-height: 38px;
        letter-spacing: 1px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.85);
        border-top: 1px solid #f0f0f0;
    }
}
</style>