import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import login from '@/components/login'
import headerSecond from '@/components/headerSecond'
import second from '@/components/second'
import safeAlert from '@/components/safeAlert'     //vue-组件--safe   路径：/safeAlert

import adminListCom from '@/components/adminListCom'
import fcheader from '@/components/fcheader'


Vue.use(Router)
export default new 
Router({
	mode:'history',                  //历史记录
	basse:__dirname+'/',            //http://localhost:8080/Hello
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      component: login
    },
    {
      path: '/headerSecond',
      component: headerSecond
    },
    {
      path: '/second',
      component: second
    },
    {
      path: '/safeAlert',
      component:safeAlert 
    },
     {
      path: '/adminListCom',           //只引入--封装
      component:adminListCom 
    },
    {
      path: '/fcheader',           //只引入--封装
      component:fcheader 
    }
  ]
})
