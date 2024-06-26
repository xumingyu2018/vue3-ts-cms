<template>
  <div class="modal">
    <el-dialog v-model="dialogVisible" :title="isNewRef? '新建用户': '编辑用户'" width="30%" center>
        <div class="form">
            <el-form :model="formData" label-width="80px" size="large">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="formData.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名" prop="realname">
                    <el-input v-model="formData.realname" placeholder="请输入真实姓名"></el-input>
                </el-form-item>
                <el-form-item v-if="isNewRef" label="密码" prop="password">
                    <el-input v-model="formData.password" placeholder="请输入密码" show-password></el-input>
                </el-form-item>
                <el-form-item label="电话号码" prop="cellphone">
                    <el-input v-model="formData.cellphone" placeholder="请输入电话号码"></el-input>
                </el-form-item>
                <el-form-item label="选择角色" prop="roleId">
                    <el-select v-model="formData.roleId" placeholder="请选择角色" style="width: 100%">
                        <template v-for="item in entireRoles" :key="item.id">
                            <el-option :label="item.name" :value="item.id"/>
                        </template>
                    </el-select>
                </el-form-item>
                <el-form-item label="选择部门" prop="departmentId">
                    <el-select v-model="formData.departmentId" placeholder="请选择部门" style="width: 100%">
                        <template v-for="item in entireDepartments" :key="item.id">
                            <el-option :label="item.name" :value="item.id"/>
                        </template>
                    </el-select>
                </el-form-item>
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

<script setup lang="ts">
import { reactive, ref } from "vue";
import useMainStore from "@/store/main/main";
import useSystemStore from "@/store/main/system/system";
import { storeToRefs } from "pinia";

const dialogVisible = ref(false)
// 编辑时密码不显示
const isNewRef = ref(false)
const editData = ref()

const formData = reactive<any>({
    name: '',
    realname: '',
    password: '',
    cellphone: '',
    roleId: '',
    departmentId: ''
})

// 获取roles/departments数据
const mainStore = useMainStore()
const systemStore = useSystemStore()
const { entireRoles, entireDepartments } = storeToRefs(mainStore)

// 定义设置dialogVisible的方法
function setDialogVisible(isNew: boolean = true, itemData?: any) {
  dialogVisible.value = true  
  isNewRef.value = isNew
  // 模态框表单回显 
  if(!isNew && itemData) {
    // 编辑数据
    for(const key in formData) {
        // key不一定在formData中,所以需要加类型判断any(reactive<any>)
        formData[key] = itemData[key]
    }
    editData.value = itemData 
  } else {
    // 新增数据
    for(const key in formData) {
        formData[key] = ''
    }
    editData.value = null
  }
}   

// dialog点击确定按钮逻辑
function handleConfirmClick() {
    // 关门dialog
    dialogVisible.value = false
    // isNewRef为false时，发送编辑用户请求
    if(!isNewRef.value && editData.value) {
        systemStore.editUserDataAction(editData.value.id, formData)
    } else {
        // 否则发送新建用户请求
        systemStore.newUserDataAction(formData)
    }
}

// 暴露给父组件的方法
defineExpose({
    setDialogVisible
})
</script>

<style lang="less" scoped>
.form {
    padding: 0 20px;
}
</style>