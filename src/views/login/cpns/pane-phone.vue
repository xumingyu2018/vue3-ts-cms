<template>
  <div class="phone">
    <el-form label-width="60px" size="large">
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="phone" placeholder="请输入手机号"/>
        </el-form-item> 
        <el-form-item label="验证码" prop="phone">
            <div class="verify-code">
                <el-input v-model="phone" placeholder="请输入验证码"/>
                <el-button class="get-btn" type="primary">获取验证码</el-button>
            </div>
        </el-form-item> 
    </el-form>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.verify-code {
    display: flex;

    .get-btn {
        margin-left: 8px;
    }
}
</style>