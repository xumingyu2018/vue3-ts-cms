<template>
    <div class="content">
      <div class="header">
        <h2 class="title">用户列表</h2>
        <el-button type="primary">新建用户</el-button>
      </div>
      <div class="table">
        <el-table :data="usersList" border style="width: 100%">
            <!-- 勾选框 -->
            <el-table-column align="center" type="selection" width="50px"/>
            <!-- 序号 -->
            <el-table-column align="center" type="index" label="序号" width="60px"/>

            <el-table-column align="center" prop="name" label="用户名" width="150px" />
            <el-table-column align="center" prop="realname" label="真实姓名" width="150px"/>
            <el-table-column align="center" prop="cellphone" label="电话号码" width="150px"/>

            <!-- 自定义table -->
            <el-table-column align="center" prop="enable" label="状态" width="100px">
                <!-- 作用域插槽 -->
                <template #default="{ row }">
                    <el-button size="small" :type="row.enable ? 'primary' : 'danger'" plain>
                        {{ row.enable ? '启用' : '禁用' }}
                    </el-button>
                </template>
                <!-- <template #default="scope">
                    <el-button size="small" :type="scope.row.enable ? 'primary' : 'danger'" plain>
                        {{ scope.row.enable ? '启用' : '禁用' }}
                    </el-button>
                </template> -->
            </el-table-column>

            <!-- 自定义table -->
            <el-table-column align="center" prop="createAt" label="创建时间" >
                <template #default="scope">
                    {{ formatUTC(scope.row.createAt) }}
                </template>
            </el-table-column>

            <!-- 自定义table -->
            <el-table-column align="center" prop="updateAt" label="更新时间" >
                <template #default="scope">
                    {{ formatUTC(scope.row.updateAt) }}
                </template>
            </el-table-column>

            <el-table-column align="center" label="操作" width="150px">
                <el-button type="primary" icon="Edit" size="small" text>编辑</el-button>
                <el-button type="danger " icon="Delete" size="small" text>删除</el-button>
            </el-table-column>
        </el-table>
      </div>
      <div class="pagination">分页</div>
    </div>
</template>

<script setup>
import useSystemStore from '@/store/main/system/system';
import { storeToRefs } from 'pinia';
import { formatUTC } from '@/utils/format';

// 1.发起action，请求usersList数据 
const systemStore = useSystemStore()
systemStore.getUsersListAction()

// 2.获取usersList数据(响应式数据：上面代码是异步的，当数据还没拿到是，这一句不起作用，需要用storeToRefs)
const { usersList } = storeToRefs(systemStore)
console.log(usersList);
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

.table {
    :deep(.el-table__cell) {
        padding: 12px 0;
    }

    .el-button {
        margin-left: 0;
        padding: 5px 8px;
    }
}

</style>