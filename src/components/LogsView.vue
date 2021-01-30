<!--
 * @Author       : AaronJny
 * @LastEditTime : 2021-01-30
 * @FilePath     : /luwu-frontend/src/components/LogsView.vue
 * @Desc         : 
-->
<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>项目日志</span>
    </div>
    <div>
      <span v-for="(text, index) in logs" :key="index">
        <span v-html="text"></span>
      </span>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "LogsView",
  data() {
    return {
      logs: [],
      start_line: -1,
    };
  },
  methods: {
    getTrainProjectLogs: function () {
      const id = this.$route.params.id;
      const start_line = this.start_line + 1;
      console.log(start_line);
      const url =
        this.base_url + "/api/v1/project/" + id + "/logs/" + start_line + "/";
      this.$axios
        .get(url)
        .then((res) => {
          if (res.data.code === 0) {
            if (start_line === 0) {
              this.logs = [];
            }
            if (res.data.data.text != "") {
              console.log(res.data.data.text);
              this.logs.push(res.data.data.text);
              this.start_line = res.data.data.current_line;
            }
            this.$notify.success(res.data.msg);
          } else {
            this.$notify.error(res.data.msg);
          }
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
        this.getTrainProjectLogs();
      }, 10000);
    }
  },
  created() {
    this.getTrainProjectLogs();
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>
