<!--
 * @Date         : 2020-12-31 17:36:18
 * @Author       : AaronJny
 * @LastEditTime : 2021-02-01
 * @FilePath     : /luwu-frontend/src/components/ModelOptionRadioItem.vue
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
          <el-radio
            v-for="radio in radios"
            :key="radio.index"
            v-model="value"
            :label="radio.index"
            @change="callback"
            >{{ radio.name }}
            <el-tooltip
              v-if="radio.tip"
              class="item"
              effect="dark"
              :content="radio.tip"
              placement="right"
            >
              <i class="el-icon-question"></i>
            </el-tooltip>
          </el-radio>
        </el-form-item>
      </el-col>
    </el-form>
  </el-row>
</template>

<script>
export default {
  name: "ModelOptionRadioItem",
  props: ["label", "radios", "callback", "default_index", "required", "tip"],
  data() {
    return {
      value: this.default_index,
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
  methods: {
    sendToParent: function (value) {
      this.callback(value);
    },
  },
};
</script>

<style>
</style>