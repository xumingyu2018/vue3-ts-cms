<template>
  <div class="account">
    <el-form :model="account" label-width="60px" size="large" :rules="accountRules" status-icon>
        <el-form-item label="帐号" prop="username">
            <el-input v-model="account.username" placeholder="请输入帐号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="account.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import type { FormRules } from 'element-plus'

// 定义account数据
const account = reactive({
  username: '',
  password: ''
})

// 定义校验规则
const accountRules: FormRules = {
  username: [
    { required: true, message: '必须输入用户名', trigger: 'blur' },
    { pattern: /^[a-z0-9]{6,20}$/, message: '必须是6～20位以小写字母或数字开头', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '必须输入密码', trigger: 'blur'},
    { min: 3, max: 11, message: '长度必须在3~11个字符', trigger: 'blur'}
  ]
}


</script>

<style lang="less" scoped>

</style>