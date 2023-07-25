<template>
    <div class="content">
      <div class="header">
        <h2 class="title">用户列表</h2>
        <el-button type="primary">新建用户</el-button>
      </div>
      <div class="table">
        <ul>
            <li v-for="item in usersList" :key="item.id">
                {{ item.name }}
            </li>
        </ul>
      </div>
      <div class="pagination">分页</div>
    </div>
</template>

<script setup>
import useSystemStore from '@/store/main/system/system';
import { storeToRefs } from 'pinia';

// 1.发起action，请求usersList数据
const systemStore = useSystemStore()
systemStore.getUsersListAction()

// 2.获取usersList数据(响应式数据：上面代码是异步的，当数据还没拿到是，这一句不起作用，需要用storeToRefs)
const { usersList } = storeToRefs(systemStore)
</script>

<style lang="less" scoped>
.content {
    margin-top: 20px;
    padding: 20px;
    background-color: #fff;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .title {
        font-size: 22px;
    }
}
</style>