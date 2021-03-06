<!--
 * @Date         : 2020-12-31 16:37:59
 * @Author       : AaronJny
 * @LastEditTime : 2021-02-01
 * @FilePath     : /luwu-frontend/src/components/LuwuImageClassifyView.vue
 * @Desc         : 
-->
<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>图像分类</span>
    </div>
    <el-form>
      <div>
        <el-divider content-position="left">引擎</el-divider>
        <model-option-radio-item
          label="模型生成引擎:"
          :radios="info.engine"
          :callback="changeEngineIndex"
          :default_index="0"
          :required="true"
        >
        </model-option-radio-item>
      </div>

      <div v-if="info.engine_index > 0">
        <el-divider content-position="left">模型</el-divider>
        <model-option-radio-item
          label="选择模型:"
          :radios="info.models"
          :callback="changeModelName"
          :default_index="info.model_name"
          :required="true"
        >
        </model-option-radio-item>
      </div>

      <div v-if="info.engine_index > 0">
        <el-divider content-position="left">数据集</el-divider>
        <model-option-radio-item
          label="数据集类型:"
          :radios="info.dataset"
          :callback="changeDatasetIndex"
          :default_index="1"
          :required="true"
          tip="决定了 `陆吾` 以何种方式读取并处理数据"
        >
        </model-option-radio-item>
        <model-option-input-item
          label="原始数据集路径:"
          :placeholder="info.dataset_input_placeholder"
          :required="true"
          :callback="changeOriginDatasetPath"
          tip="存储数据集的文件夹路径，请填写绝对路径。<br/><br/>注意，当时候 docker 部署时，需要响应调整数据集路径。"
        >
        </model-option-input-item>
        <model-option-input-item
          label="清洗后数据集保存路径:"
          :placeholder="info.dataset_input_placeholder"
          tip="`陆吾` 在进行模型训练前，会先尝试将原始数据集转成TFRecordDataset的格式，并切分验证集。<br/><br/>页面中的“清洗后数据集保存路径”即为保存转换后的TFRecordDataset格式的数据集的路径，只需要指定放在哪个文件夹下即可。<br/><br/>如果不填写，默认与“原始数据集路径”保持一致。"
          :required="false"
          :callback="changeTargetDatasetPath"
        >
        </model-option-input-item>
        <model-option-input-item
          label="模型及生成代码的保存路径:"
          :placeholder="info.dataset_input_placeholder"
          tip="训练过程中，`陆吾` 会保存训练过程中的当前最佳模型参数、日志文件，并在训练完成后生成调用代码模板。<br/><br/>这些文件将被保存到页面上“模型及生成代码的保存路径”中填写的文件夹下。<br/><br/>如果不填写，默认与“清洗后数据集保存路径”保持一致。"
          :required="false"
          :callback="changeModelSavePath"
        >
        </model-option-input-item>
      </div>

      <div v-if="info.engine_index > 0">
        <el-divider content-position="left">训练参数</el-divider>
        <model-option-number-item
          label="批大小 (Batch Size)"
          :value="info.batch_size"
          :min="1"
          :max="256"
          :callback="changeBatchSize"
        >
        </model-option-number-item>
        <model-option-number-item
          label="最大训练轮次 (Epochs)"
          :value="info.epochs"
          :min="1"
          :max="10000"
          :callback="changeEpochs"
        >
        </model-option-number-item>
      </div>

      <el-divider></el-divider>
      <el-button type="primary" @click="createProject">添加项目</el-button>
    </el-form>
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
      form: {
        engine: "",
      },
      info: {
        engine: [
          {
            index: 1,
            name: "AutoKeras",
            tip: "",
          },
          {
            index: 2,
            name: "NNI",
            tip: "",
          },
          {
            index: 3,
            name: "预设模型",
            tip: "",
          },
        ],
        engine_index: 0,
        model_name: "LuwuDenseNet121ImageClassifier",
        dataset: [
          {
            index: 1,
            name: "按文件夹组织",
            tip:
              "每一个类别的图片放在一个单独文件夹下，这些文件夹又放在同一个文件夹下",
          },
          // {
          //   index: 2,
          //   name: "路径+标签的文本",
          //   tip: "",
          // },
        ],
        models: [],
        dataset_index: 1,
        dataset_input_placeholder: "请填写路径...",
        origin_dataset_path: "",
        target_dataset_path: "",
        model_save_path: "",
        batch_size: 32,
        epochs: 30,
      },
    };
  },
  methods: {
    getImageClassifierEngines: function () {
      const url = this.base_url + "/api/v1/image/classifier/engines/";
      this.$axios
        .get(url)
        .then((res) => {
          if (res.data.code === 0) {
            this.info.engine = res.data.data;
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
    getImageClassifierList: function () {
      const url =
        this.base_url +
        "/api/v1/image/classifier/models/" +
        this.info.engine_index +
        "/";
      this.$axios
        .get(url)
        .then((res) => {
          if (res.data.code === 0) {
            this.info.models = res.data.data;
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
    changeEngineIndex: function (value) {
      this.info.engine_index = value;
      this.getImageClassifierList();
    },
    changeModelName: function (value) {
      this.info.model_name = value;
      console.log(this.info.model_name);
    },
    changeDatasetIndex: function (value) {
      this.info.dataset_index = value;
    },
    changeOriginDatasetPath: function (value) {
      this.info.origin_dataset_path = value;
    },
    changeTargetDatasetPath: function (value) {
      this.info.target_dataset_path = value;
    },
    changeModelSavePath: function (value) {
      this.info.model_save_path = value;
      console.log(this.info.model_save_path);
    },
    changeBatchSize: function (value) {
      this.info.batch_size = value;
    },
    changeEpochs: function (value) {
      this.info.epochs = value;
    },
    createProject: function () {
      if (this.info.engine_index === 0) {
        this.$notify.error("请选择模型引擎！");
        return;
      }
      if (this.info.dataset_index === 0) {
        this.$notify.error("请选择数据集类型！");
        return;
      }
      if (this.info.origin_dataset_path === "") {
        this.$notify.error("请选择原始数据集路径！");
        return;
      }
      console.log(this.info.model_name);
      const data = {
        model_name: this.info.model_name,
        dataset_index: this.info.dataset_index,
        origin_dataset_path: this.info.origin_dataset_path,
        target_dataset_path: this.info.target_dataset_path,
        model_save_path: this.info.model_save_path,
        batch_size: this.info.batch_size,
        epochs: this.info.epochs,
      };
      const url = this.base_url + "/api/v1/image/classifier/project/create/";
      this.$axios
        .post(url, data)
        .then((res) => {
          if (res.data.code === 0) {
            this.$notify.success(res.data.msg);
            window.location.href = "/home/train_project";
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
    this.getImageClassifierEngines();
  },
};
</script>

<style>
</style>