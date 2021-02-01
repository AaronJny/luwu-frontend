/*
 * @Date         : 2020-12-31 13:29:11
 * @Author       : AaronJny
 * @LastEditTime : 2021-02-01
 * @FilePath     : /luwu-frontend/src/main.js
 * @Desc         : 
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$axios = axios;
// Vue.prototype.base_url = 'http://localhost:7788';
Vue.prototype.base_url = '';


Vue.config.productionTip = false
Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
