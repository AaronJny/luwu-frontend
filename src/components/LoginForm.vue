<!--
 * @Date         : 2020-12-31 15:54:26
 * @Author       : AaronJny
 * @LastEditTime : 2020-12-31 16:06:12
 * @FilePath     : /luwu-frontend/src/components/LoginForm.vue
 * @Desc         : 
-->
<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>先进行登录吧~</span>
    </div>
    <el-row>
      <el-col :span="14" :offset="5">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      form: {},
    };
  },
};
</script>

<style>
</style>