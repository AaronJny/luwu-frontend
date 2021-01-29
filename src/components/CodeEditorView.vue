<!--
 * @Author       : AaronJny
 * @LastEditTime : 2021-01-27
 * @FilePath     : /luwu-frontend/src/components/CodeEditorView.vue
 * @Desc         : 
-->
<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>编辑器</span>
    </div>
    <code-editor :code="project.code"></code-editor>
  </el-card>
</template>

<script>
import CodeEditor from "@/components/CodeEditor";
export default {
  name: "Editor",
  components: {
    CodeEditor,
  },
  data() {
    return {
      project: {
        code: "import os\nprint('hello world!')",
      },
    };
  },
  methods: {
    getTrainProject: function () {
      const id = this.$route.params.id;
      const url = this.base_url + "/api/v1/project/" + id + "/";
      this.$axios
        .get(url)
        .then((res) => {
          if (res.data.code === 0) {
            this.project = res.data.data;
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
  created() {
    this.getTrainProject();
  },
};
</script>
