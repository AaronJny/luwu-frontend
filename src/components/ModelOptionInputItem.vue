<!--
 * @Date         : 2020-12-31 17:36:18
 * @Author       : AaronJny
 * @LastEditTime : 2021-01-23
 * @FilePath     : /luwu-frontend/src/components/ModelOptionInputItem.vue
 * @Desc         : 
-->
<template>
  <el-row>
    <el-form :rules="rules">
      <el-col :span="6">
        <el-form-item :label="label" prop="value"> </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item>
          <el-input
            v-model="value"
            :placeholder="input.placeholder"
            @change="callback"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-form>
  </el-row>
</template>

<script>
export default {
  name: "ModelOptionInputItem",
  props: ["label", "input", "required", "callback"],
  data() {
    return {
      value: "",
      rules: {
        value: [
          {
            required: this.required,
            message: "此项为必填项！",
            trigger: "blur",
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>