<!--
 * @Date         : 2020-12-31 16:37:59
 * @Author       : AaronJny
 * @LastEditTime : 2021-01-29
 * @FilePath     : /luwu-frontend/src/components/LuwuTrainProjectView.vue
 * @Desc         : 
-->
<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>项目列表</span>
    </div>
    <el-table :data="projects" border style="width: 100%">
      <el-table-column prop="id" label="项目编号" width="80"> </el-table-column>
      <el-table-column prop="model_name" label="模型名称"> </el-table-column>
      <el-table-column label="配置参数">
        <template slot-scope="scope">
          <el-tooltip placement="right">
            <div slot="content">
              <pre>{{ scope.row.params }}</pre>
            </div>
            <pre>{{ scope.row.params }}</pre>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column label="当前状态">
        <template slot-scope="scope">
          <el-tag
            v-if="success_status.includes(scope.row.status)"
            type="success"
          >
            {{ scope.row.status_text }}
          </el-tag>
          <el-tag
            v-else-if="danger_status.includes(scope.row.status)"
            type="danger"
          >
            {{ scope.row.status_text }}
          </el-tag>
          <el-tag
            v-else-if="info_status.includes(scope.row.status)"
            type="info"
          >
            {{ scope.row.status_text }}
          </el-tag>
          <el-tag v-else>{{ scope.row.status_text }}...</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="addtime" label="创建时间"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div v-if="scope.row.status === 0" style="margin: 5px">
            <el-button
              type="primary"
              @click="updateTrainProjectStatus(scope.row.id, 1)"
              >开始训练</el-button
            >
          </div>
          <div
            v-else-if="
              scope.row.status != 0 &&
              scope.row.status != 1 &&
              scope.row.status != 2
            "
            style="margin: 5px"
          >
            <el-button
              type="primary"
              @click="updateTrainProjectStatus(scope.row.id, 1)"
              >重新训练</el-button
            >
          </div>
          <div
            v-if="scope.row.status === 1 || scope.row.status === 2"
            style="margin: 5px"
          >
            <el-button
              type="danger"
              @click="updateTrainProjectStatus(scope.row.id, 5)"
              >终止训练</el-button
            >
          </div>
          <div v-if="scope.row.status != 0" style="margin: 5px">
            <el-button type="info">查看日志</el-button>
          </div>
          <div v-if="scope.row.status === 3" style="margin: 5px">
            <el-button type="primary">
              <el-link
                :underline="false"
                :href="'/home/editor/' + scope.row.id"
                style="color: #ffffff"
                >调用方式</el-link
              >
            </el-button>
          </div>
          <div style="margin: 5px">
            <el-button type="danger" @click="deleteTrainProjects(scope.row.id)"
              >删除项目</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import ModelOptionRadioItem from "../components/ModelOptionRadioItem";
import ModelOptionInputItem from "../components/ModelOptionInputItem";
import ModelOptionNumberItem from "../components/ModelOptionNumberItem";
export default {
  name: "LuwuMain",
  components: {
    ModelOptionRadioItem: ModelOptionRadioItem,
    ModelOptionInputItem: ModelOptionInputItem,
    ModelOptionNumberItem: ModelOptionNumberItem,
  },
  data() {
    return {
      projects: [],
      danger_status: [4, 5, 6],
      success_status: [3],
      info_status: [0, 1],
      timer: 0,
    };
  },
  methods: {
    getTrainProjects: function () {
      const url = this.base_url + "/api/v1/project/list/exists/";
      this.$axios
        .get(url)
        .then((res) => {
          if (res.data.code === 0) {
            this.projects = res.data.data;
            // this.$notify.success(res.data.msg);
          } else {
            this.$notify.error(res.data.msg);
          }
        })
        .catch((error) => {
          console.error(error);
          this.$notify.error("啊哦，出错了！");
        });
    },
    updateTrainProjectStatus: function (xid, status) {
      const url = this.base_url + "/api/v1/project/" + xid + "/status/update/";
      const data = {
        status: status,
      };
      this.$axios
        .post(url, data)
        .then((res) => {
          if (res.data.code === 0) {
            this.$notify.success(res.data.msg);
          } else {
            this.$notify.error(res.data.msg);
          }
          this.getTrainProjects();
        })
        .catch((error) => {
          console.error(error);
          this.$notify.error("啊哦，出错了！");
        });
    },
    deleteTrainProjects: function (xid) {
      const url = this.base_url + "/api/v1/project/" + xid + "/update/";
      const data = {
        deleted: 1,
      };
      this.$axios
        .post(url, data)
        .then((res) => {
          if (res.data.code === 0) {
            this.$notify.success(res.data.msg);
          } else {
            this.$notify.error(res.data.msg);
          }
          this.getTrainProjects();
        })
        .catch((error) => {
          console.error(error);
          this.$notify.error("啊哦，出错了！");
        });
    },
  },
  mounted() {
    if (this.timer) {
      clearInterval(this.timer);
    } else {
      this.timer = setInterval(() => {
        this.getTrainProjects();
      }, 10000);
    }
  },
  created() {
    this.getTrainProjects();
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>