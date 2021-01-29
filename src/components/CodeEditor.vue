<!--
 * @Author       : AaronJny
 * @LastEditTime : 2021-01-27
 * @FilePath     : /luwu-frontend/src/components/CodeEditor.vue
 * @Desc         : 
-->
<template>
  <MonacoEditor class="editor" v-model="code" language="python" />
</template>

<script>
import MonacoEditor from "vue-monaco";

export default {
  components: {
    MonacoEditor,
  },
  props: ["code"],

  data() {
    return {};
  },
};
</script>

<style>
.editor {
  width: 800px;
  height: 800px;
}
</style>