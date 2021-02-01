<!--
 * @Date         : 2020-12-31 17:36:18
 * @Author       : AaronJny
 * @LastEditTime : 2021-02-01
 * @FilePath     : /luwu-frontend/src/components/ModelOptionInputItem.vue
 * @Desc         : 
-->
<template>
  <el-row>
    <el-form :rules="rules">
      <el-col :span="6">
        <el-tooltip v-if="tip" class="item" effect="dark" placement="right">
          <div slot="content" v-html="tip"></div>
          <el-form-item :label="label" prop="value"> </el-form-item>
        </el-tooltip>
        <el-form-item v-else :label="label" prop="value"> </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item>
          <el-input
            v-model="value"
            :placeholder="placeholder"
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
  props: ["label", "placeholder", "required", "callback", "tip"],
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