<!--
 * @Date         : 2020-12-31 17:36:18
 * @Author       : AaronJny
 * @LastEditTime : 2021-01-23
 * @FilePath     : /luwu-frontend/src/components/ModelOptionNumberItem.vue
 * @Desc         : 
-->
<template>
  <el-row>
    <el-col :span="6">
      <el-form-item :label="label"> </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-input-number
        v-model="value"
        :min="min"
        :max="max"
        @change="callback"
      ></el-input-number>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "ModelOptionNumberItem",
  props: ["label", "value", "min", "max", "callback"],
  data() {
    return {};
  },
};
</script>

<style>
</style>