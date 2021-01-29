<!--
 * @Date         : 2020-12-31 16:14:51
 * @Author       : AaronJny
 * @LastEditTime : 2021-01-28
 * @FilePath     : /luwu-frontend/src/components/LuwuAside.vue
 * @Desc         : 
-->
<template>
  <div style="text-align: center; height: 100%">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :router="true"
      style="height: 100%"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-promotion"></i>
          <span>快速开始</span>
        </template>
        <el-submenu index="1-1">
          <template slot="title">
            <span>分类</span>
          </template>
          <el-menu-item index="/image_classify">图像分类</el-menu-item>
          <!-- <el-menu-item index="1-1-2">文本分类</el-menu-item> -->
        </el-submenu>
        <el-submenu index="1-2-1">
          <template slot="title">
            <span>回归</span>
          </template>
          <!-- <el-menu-item index="1-2-1">图像回归</el-menu-item> -->
        </el-submenu>
        <el-submenu index="1-3">
          <template slot="title">综合</template>
          <!-- <el-menu-item index="1-3-1">目标检测</el-menu-item> -->
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-opportunity"></i>
          <span slot="title">自由定制</span>
        </template>
        <el-submenu index="2-1">
          <template slot="title">
            <span>分类</span>
          </template>
          <!-- <el-menu-item index="2-1-1">图像分类</el-menu-item> -->
          <!-- <el-menu-item index="2-1-2">文本分类</el-menu-item> -->
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-copy-document"></i>
          <span slot="title">项目管理</span>
        </template>
        <el-menu-item index="/train_project">项目列表</el-menu-item>
        <!-- <el-menu-item index="2-1-2">文本分类</el-menu-item> -->
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "LuwuAside",
  methods: {
    handleOpen() {},
    handleClose() {},
  },
};
</script>

<style>
</style>