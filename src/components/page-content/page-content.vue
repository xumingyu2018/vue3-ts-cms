<template>
  <div class="content">
    <div class="header">
      <h3 class="title">{{ contentConfig?.header?.title ?? '数据列表' }}</h3>
      <el-button type="primary" @click="handleNewData">{{ contentConfig?.header?.btnTitle ?? '新建数据' }}</el-button>
    </div>
    <div class="table">
      <el-table :data="pageList" :border="true" style="width: 100%" v-bind="contentConfig.childrenTree">
        <template v-for="item in contentConfig.propsList" :key="item.prop">
          <!-- 处理带自定义插槽的时间格式类型 -->
          <template v-if="item.type === 'timer'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                {{ formatUTC(scope.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>

          <!-- 处理handle类型 -->
          <template v-else-if="item.type === 'handler'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                <el-button type="primary" size="small" icon="EditPen" link @click="handleEditClick(scope.row)">
                  编辑
                </el-button>
                <el-button type="danger" size="small" icon="Delete" link @click="handleDeleteClick(scope.row.id)">
                  删除
                </el-button>
              </template>
            </el-table-column>            
          </template>

          <!-- 自定义插槽定制处理(通用) -->
          <!-- <template v-else-if="item.type === 'custom'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                给用户预留定制插槽
                <slot :name="item.slotName" v-bind="scope" :prop="item.prop"></slot>
              </template>
            </el-table-column>
          </template> -->

          <!-- 处理普通类型 -->
          <template v-else>
            <!-- <el-table-column align="center" :type="item.type" :prop="item.prop" :label="item.label" :width="item.width" /> 相当于下面-->
            <el-table-column align="center" v-bind="item" />
          </template>
        </template>

      </el-table>
    </div>
    <div class="footer">
      <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageTotalCount"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts" name="content">
import { storeToRefs } from 'pinia'
import useSystemStore from '@/store/main/system/system'
import { formatUTC } from '@/utils/format';
import { ref } from 'vue'

interface IProps {
  contentConfig: {
    // 用于处理接口方法中传入的pageName参数
    pageName: string,
    header?: {
      title?: string,
      btnTitle: string
    },
    propsList: any[],
    childrenTree: any[]
  }
}

const props = defineProps<IProps>()

const emit = defineEmits(['newDataClick', 'editDataClick'])

// 1.请求数据
const systemStore = useSystemStore()
const currentPage = ref(1)
const pageSize = ref(10)
function fetchPageListData(formData: any = {}) {
  // 1.获取offset和size
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const pageInfo = { size, offset}

  // 2.发起网络请求
  const queryInfo = { ...pageInfo, ...formData}
  systemStore.getPageListDataAction(props.contentConfig.pageName, { offset, size, ...queryInfo })
}
fetchPageListData()

// 2.展示数据
const { pageList, pageTotalCount } = storeToRefs(systemStore)

// 3.绑定分页数据
function handleCurrentChange() {
  fetchPageListData()
}
function handleResetClick() {
  currentPage.value = 1
  pageSize.value = 10
  fetchPageListData()
}

// 4.新建数据的处理
function handleNewData() {
  emit('newDataClick')
}

// 5.删除和编辑操作
function handleDeleteClick(id: number) {
  systemStore.deletePageDataAction(props.contentConfig.pageName, id)
}

function handleEditClick(data: any) {
  emit('editDataClick', data)
}

// 暴露函数
defineExpose({
  fetchPageListData,
  handleResetClick
})
</script>

<style scoped lang="less">
.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;

  .header {
    display: flex;
    height: 45px;
    padding: 0 5px;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 20px;
      font-weight: 700;
    }

    .handler {
      align-items: center;
    }
  }

  .table {
    :deep(.el-table__cell) {
      padding: 14px 0;
    }
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
  }
}
</style>
