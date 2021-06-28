import Vue from 'vue'
// import axios from 'axios'
import ElementUI from 'element-ui';
//复制到剪贴板插件
import VueClipboard from 'vue-clipboard2';
import {
  api
} from '@/config/requestList.js';

import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css'
import './assets/style/public.scss'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
// Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.$api = api
/* eslint-disable no-new */
Vue.use(VueClipboard)
Vue.use(ElementUI)
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
