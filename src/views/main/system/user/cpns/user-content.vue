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
                    <el-tag size="small" :type="row.enable ? 'primary' : 'danger'">
                        {{ row.enable ? '启用' : '禁用' }}
                    </el-tag>
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
      <div class="pagination">
        <el-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30]"
            :small="small"
            layout="sizes, prev, pager, next, jumper, total"
            :total="usersTotalCount"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
      </div>
    </div>
</template>

<script setup>
import useSystemStore from '@/store/main/system/system';
import { storeToRefs } from 'pinia';
import { formatUTC } from '@/utils/format';
import { ref } from 'vue';

// 1.发起action，请求usersList数据 
const systemStore = useSystemStore()
const currentPage = ref(1)
const pageSize = ref(10)
fetchUserListData()

// 2.获取usersList和usersTotalCount数据(响应式数据：上面代码是异步的，当数据还没拿到是，这一句不起作用，需要用storeToRefs)
const { usersList, usersTotalCount } = storeToRefs(systemStore)

// 3.分页功能
function handleSizeChange() {
    fetchUserListData()
}

function handleCurrentChange() {
    fetchUserListData()
}

// 4.定义函数，用于发送网络请求
function fetchUserListData() {
    const size = pageSize.value
    const offset = (currentPage.value - 1) * size
    const info = { size, offset}

    // 发起网络请求
    systemStore.getUsersListAction(info)
}
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

.pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;    
}

</style>