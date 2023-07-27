<template>
  <div class="modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
    <span>
      新建用户
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确定</el-button>
      </span>
    </template>
  </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const dialogVisible = ref(false)

function setDialogVisible() {
  dialogVisible.value = true
}   

defineExpose({
    setDialogVisible
})
</script>

<style lang="less" scoped>

</style>