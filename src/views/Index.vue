<!--
 * @Date         : 2020-12-31 13:34:07
 * @Author       : AaronJny
 * @LastEditTime : 2021-01-28
 * @FilePath     : /luwu-frontend/src/views/Index.vue
 * @Desc         : 
-->
<template>
  <el-container>
    <el-header>
      <luwu-header></luwu-header>
    </el-header>
    <el-container>
      <el-aside width="160px">
        <luwu-aside></luwu-aside>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import LuwuHeader from "../components/LuwuHeader";
import LuwuAside from "../components/LuwuAside";
export default {
  name: "Layout",
  components: {
    luwuHeader: LuwuHeader,
    luwuAside: LuwuAside,
  },
};
</script>
<style scoped>
.el-header {
  background-color: #324057;
  color: #babfc6;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  color: #333;
  text-align: center;
}
</style>