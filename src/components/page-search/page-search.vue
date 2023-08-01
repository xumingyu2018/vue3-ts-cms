<template>
  <div class="search">
    <el-form :model="searchForm" ref="formRef" :label-width="searchConfig.labelWidth ?? '80px'" size="large">
        <el-row :gutter="20">
            <!-- 动态遍历配置config文件 -->
            <template v-for="item in searchConfig.formItems" :key="item.prop">
                <el-col :span="8">
                    <el-form-item :label="item.label" :prop="item.prop">
                        <template v-if="item.type === 'input'">
                            <el-input v-model="searchForm[item.prop]" :placeholder="item.placeholder"></el-input>
                        </template>
                        <template v-if="item.type === 'date-picker'">
                            <el-date-picker
                                v-model="searchForm[item.prop]"
                                type="daterange"
                                range-separator="-"
                                start-placeholder="开始时间"
                                end-placeholder="结束时间"
                            />
                        </template>
                    </el-form-item>
                </el-col>
            </template>
        </el-row>
    </el-form>

    <div class="btns">
        <el-button icon="Refresh" size="large" @click="handleResetClick()">重置</el-button>
        <el-button icon="Search" size="large" type="primary" @click = "handleQueryClick()">搜索</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { ElForm } from "element-plus";

interface IProps {
    searchConfig: {
        labelWidth?: string,
        formItems: any[]    
    }
}
const emit = defineEmits(['queryClick', 'resetClick'])
// 接受配置参数
const props = defineProps<IProps>()

const initialForm: any = {}
for(const item of props.searchConfig.formItems) {
    initialForm[item.prop] = item.initialValue ?? ''
}
const searchForm = reactive({
    initialForm
})

// 重置功能
const formRef = ref<InstanceType<typeof ElForm>>()
function handleResetClick() {
    formRef.value?.resetFields()
    // 发送请求重置查找
    emit('resetClick')
}

// 搜索功能
function handleQueryClick() {
    // 通过事件抛出（子传父）
    emit('queryClick', searchForm)
}
</script>

<style lang="less" scoped>
.search {
    background-color: #fff;
    padding: 20px;

    .el-form-item {
        padding: 20px;
        margin-bottom: 0;
    }

    .btns {
        text-align: right;
        padding: 0 50px 10px 0;
    }
}
</style>