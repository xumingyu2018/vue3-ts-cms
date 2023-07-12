<template>
  <div class="account">
    <el-form :model="account" label-width="60px" size="large" :rules="accountRules" status-icon ref="formRef">
        <el-form-item label="帐号" prop="name">
            <el-input v-model="account.name" placeholder="请输入帐号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="account.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import type { ElForm, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import useLoginStore from '@/store/login/login'
import type { IAccount } from '@/types'
import { localCache } from "@/utils/cache"

// 定义account数据
const account = reactive<IAccount>({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})

// 定义校验规则
const accountRules: FormRules = {
  name: [
    { required: true, message: '必须输入用户名', trigger: 'blur' },
    { pattern: /^[a-z0-9]{6,20}$/, message: '必须是6～20位以小写字母或数字开头', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '必须输入密码', trigger: 'blur'},
    { min: 3, max: 11, message: '长度必须在3~11个字符', trigger: 'blur'}
  ]
}

// 执行帐号登录逻辑
const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()
function loginAction(isRemPwd: boolean) {
  formRef.value?.validate((valid: any) => {
    if(valid) {
        const name = account.name
        const password = account.password

        // 调用store中的loginAccountAction(pinia)
        loginStore.loginAccountAction({ name, password }).then(() => {
          // 登录成功后记住密码
          if(isRemPwd) {
            localCache.setCache('name', name)
            localCache.setCache('password', password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
        })
    } else {
        ElMessage.error('错误, 请输入正确的格式！')
    }
  })
}
// 暴露给父组件
defineExpose({
    loginAction
})


</script>

<style lang="less" scoped>

</style>