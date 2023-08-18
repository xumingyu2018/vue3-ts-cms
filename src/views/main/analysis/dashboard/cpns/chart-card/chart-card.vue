<template>
    <div class="chart-card">
      <el-card class="box-card">
        <template #header>
          <div class="cart-header">
            <span>分类商品数量(饼图)</span>
          </div>
        </template>

        <div class="content">
          <slot></slot>
        </div>
      </el-card>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
</style>