
import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store.js'         //数据仓库store.js
Vue.prototype.$store=store;                 //便于直接使用 !!

import crypto from 'crypto'                 //加密模块                                                2.
Vue.prototype.$crypto=crypto
import safeAlert from './vuex/safeAlert'       //引入安全弹窗js文件
Vue.prototype.$safeAlert=safeAlert            //赋值
//import adminListStore from './vuex/adminListStore'  //引入系统人员列表仓库js
//Vue.prototype.$adminListStore=adminListStore        //赋值


import VueResource from 'vue-resource'       //vue-resource  下载          1.
import axios from 'axios'                   //交互工具
axios.defaults.withCredentials=true         //允许-  跨域请求  -时使用cookie:(defaults)
Vue.prototype.$reqs=axios             //将axios赋值于Vue的$reqs,便于在子组件里调用axios-post/get !!!!!!
Vue.config.debug=true

Vue.use(Vuex)
Vue.use(VueResource)
new Vue({
  el: '#app',
  router,
  store,
 
})
