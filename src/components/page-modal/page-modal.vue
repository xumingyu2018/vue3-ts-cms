<template>
  <div class="modal">
    <el-dialog v-model="dialogVisible" :title="isEdit ? modalConfig.header.editTitle : modalConfig.header.newTitle" width="30%" center>
      <div class="form">
        <el-form :model="formData" label-width="80px" size="large">
          <template v-for="item in modalConfig.formItems" :key="item.prop">
            <el-form-item v-bind="item">
              <template v-if="item.type === 'input'">
                <el-input v-model="formData[item.prop]" :placeholder="item.placeholder" />
              </template>

              <template v-if="item.type === 'select'">
                <el-select v-model="formData[item.prop]" :placeholder="item.placeholder" style="width: 100%">
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :value="option.value" :label="option.label" />
                  </template>
                </el-select>
              </template>

              <!-- 自定义插槽：如角色管理中的权限树形选择 -->
              <template v-if="item.type === 'custom'">
                <slot :name="item.slotName"></slot>
              </template>

            </el-form-item>
          </template>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts" name="modal">
import useMainStore from '@/store/main/main'
import useSystemStore from '@/store/main/system/system'
// import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'

const dialogVisible = ref(false)
const isEdit = ref(false)
const editData = ref()

// 部门和角色的数据
const mainStore = useMainStore()
// const { entireDepartments } = storeToRefs(mainStore)

interface IProps {
  modalConfig: {
    header: {
      newTitle: string,
      editTitle: string
    }
    pageName: string,
    formItems: any[]
  }
  otherInfo?: any
}

// 定义props
const props = defineProps<IProps>()

// 定义数据绑定
const initialForm: any = {}
for(const item of props.modalConfig.formItems) {
    initialForm[item.prop] = item.initialValue ?? ''
}
const formData = reactive<any>(initialForm)

// 点击确定
const systemStore = useSystemStore()
function handleConfirmClick() {
  dialogVisible.value = false

  // 若有其它info进行合并发送给服务器（如：角色管理中新建角色的权限分配菜单树menuList）
  let infoData = formData
  if(props.otherInfo) {
    infoData = { ...formData, ...props.otherInfo}
  }

  if (!isEdit.value) {
    systemStore.newPageDataAction(props.modalConfig.pageName, infoData)
  } else {
    systemStore.editPageDataAction(props.modalConfig.pageName, editData.value.id, infoData)
  }
}

// 新建或者编辑
function setDialogVisible(isNew: boolean = true, data: any = {}) {
  dialogVisible.value = true
  isEdit.value = !isNew
  editData.value = data
  for (const key in formData) {
    if (isNew) {
      formData[key] = ''
    } else {
      formData[key] = data[key]
    }
  }
}

defineExpose({
  setDialogVisible
})
</script>

<style scoped lang="less">
.form {
  padding: 10px 30px;
}
</style>
