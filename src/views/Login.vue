<!--
 * @Date         : 2020-12-31 15:21:17
 * @Author       : AaronJny
 * @LastEditTime : 2021-01-28
 * @FilePath     : /luwu-frontend/src/views/Login.vue
 * @Desc         : 
-->
<template>
  <div id="app">
    <el-container>
      <el-header>
        <luwu-header></luwu-header>
      </el-header>
      <el-main>
        <login-form></login-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import LuwuHeader from "../components/LuwuHeader";
import LoginForm from "../components/LoginForm";
export default {
  name: "Login",
  components: {
    luwuHeader: LuwuHeader,
    loginForm: LoginForm,
  },
};
</script>

<style scoped>
#app,
.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #324057;
  color: #babfc6;
  text-align: center;
  line-height: 60px;
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
