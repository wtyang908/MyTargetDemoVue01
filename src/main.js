// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'; // 2.1引入结构
import 'element-ui/lib/theme-chalk/index.css'; // 2.2引入样式


/* 设置全局的axios */
Vue.prototype.$axios = axios
/* 设置基本路径 */
axios.defaults.baseURL = '/api'
Vue.config.productionTip = false
Vue.use(ElementUI); // 3.安装


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

