//
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state={
//	http:  1.npm run dev 2.开启mongo数据库/集合，用户密码一致  3.验证码：后台获取-node app
	url:{                   //接口
        BASEURL:'http://127.0.0.1:8000',        //服务器IP和端口8000
        ADMINLOGIN:'/VueHandler/AdminLoginAndRegHandler?action=login',//管理员登录接口
        RETURNADMIN:'/VueHandler/AdminHandler?action=returnuserinfo',//返回当前登录管理员信息接口
        GETVERICOD:'/VueHandler/AdminLoginAndRegHandler?action=verification',//获取验证码字符接口
        CHECKVERICODE:'/VueHandler/AdminLoginAndRegHandler?action=checkVerification',//校验验证码接口
        UPDATEPASSWORD:'/VueHandler/AdminHandler?action=updatepass',//安全中心更改密码接口
        EXITSYS:'/VueHandler/AdminHandler?action=quit',//退出系统接口
        GETPOWERS:'/VueHandler/CourseHandler?action=getpower' ,//获取权限
        GETADMINLIST:'/VueHandler/AdminHandler?action=show',//获取管理员列表数据段
        ADDADMINSTOR:'/VueHandler/AdminLoginAndRegHandler?action=add',//添加管理员接口
        UPDATAADMINSTOR:'/VueHandler/AdminHandler?action=update',//更改管理员信息
        DELETEADMINSTOR:'/VueHandler/AdminHandler?action=delete',//删除管理员

	},
}
//暴露store
export default new Vuex.Store({
    state,
})