<!--
 * @Date         : 2020-12-31 15:29:12
 * @Author       : AaronJny
 * @LastEditTime : 2020-12-31 16:13:48
 * @FilePath     : /luwu-frontend/src/components/LuwuHeader.vue
 * @Desc         : 
-->
<template>
  <div>
    <el-row>
      <el-col :span="10" :offset="1">
        <div>
          <span style="font-size: 24px"><strong>LuWu-陆吾</strong></span>
          <span><strong>—— 一个无代码的深度学习平台。</strong></span>
        </div>
      </el-col>
      <el-col :span="10" :offset="1"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "LuwuHeader",
};
</script>

<style>
</style>