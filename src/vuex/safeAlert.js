import Vue from 'vue';
import Vuex from 'vuex';
import store from './store.js';
// 告诉 vue “使用” vuex
Vue.use(Vuex);
const state = {
    currentPwd :"",          //原始密码
    newPwd:"",               //新密码
    confirmPwd:"",           //确认密码
    AlertInputArr:{      //安全弹窗的style样式的内容--逻辑要求
        list:[{              //安全弹窗的第一行内容--要求
            rowName:"当前密码",
            width:300,
            defaultObj: {
                defaultStr:"",
                bl:function(event){     //
                    var str = event.target.value;    //输入的input.valu值
                    
                    Vue.prototype.$reqs({      //获取当前管理员信息crypto-加密
                        method: 'post',
                        url: Vue.prototype.$store.state.url.BASEURL+Vue.prototype.$store.state.url.RETURNADMIN
                    }).then(function (response) {
                        var md5 = Vue.prototype.$crypto.createHash('md5');   //加密
                        var password = md5.update(str).digest('base64');     //与后台返回的密码对比-是否一致
                             console.log(password);
                             console.log(response.data.password);
                        if(response.data.password==password){
                            Vue.prototype.$safeAlert.state.currentPwd=str;    
                        }else{

                            alert("当前密码不正确");
                            event.target.disabled = true;
                            setInterval(function (){
                                event.target.removeAttribute('disabled');
                            },10);
                        }

                    });

                }
            }


        },{
            rowName:"新密码",      //安全弹窗的第2行内容
            defaultStr:"987",
            width:300,
            defaultObj: {
                defaultStr:"",
                bl:function(event){
                    var str = event.target.value;
                    var strs = event.target;
                    if(!str||str.length<6){

                        alert("密码不能为空且不能少于6位");
                        event.target.disabled = true;
                        setInterval(function (){
                            event.target.removeAttribute('disabled');
                        },10);
                    }else{
                        Vue.prototype.$safeAlert.state.newPwd=str;
                    }


                }
            }
        },{
            rowName:"确认密码",   //安全弹窗的第3行内容
            width:300,
            defaultObj: {
                defaultStr:"",
                bl:function(event){
                    var str = event.target.value;
                    if( Vue.prototype.$safeAlert.state.newPwd!== str){
                        alert("两次输入不一致");
                        event.target.disabled = true;
                        setInterval(function (){
                            event.target.removeAttribute('disabled');
                        },10);
                    }else{
                        Vue.prototype.$safeAlert.state.confirmPwd=str;
                    }

                }
            }
        }],

        btn:[{ background:'#6EC131',           //弹窗的-确定按钮的方法
            btn_click:function(){
                if(!Vue.prototype.$safeAlert.state.currentPwd|| Vue.prototype.$safeAlert.state.currentPwd.length<6){
                    alert("当前密码有误");
                    return false;
                }
                if(!Vue.prototype.$safeAlert.state.newPwd|| Vue.prototype.$safeAlert.state.newPwd.length<6){
                    alert("新密码有误");
                    return false;
                }
                if(!Vue.prototype.$safeAlert.state.confirmPwd||Vue.prototype.$safeAlert.state.confirmPwd.length<6){
                    alert("确认密码有误");
                    return false;
                }//UPDATEPASSWORD
                Vue.prototype.$reqs({
                    method: 'post',
                    url: Vue.prototype.$store.state.url.BASEURL+Vue.prototype.$store.state.url.UPDATEPASSWORD,
                     //url修改密码的接口--Vue.prototype.$store
                   data:{
                        userPwd:Vue.prototype.$safeAlert.state.currentPwd,//前端原始的密码
                        newPwd:Vue.prototype.$safeAlert.state.newPwd    //前端修改的密码
                    }
                }).then(function (response) {
                    if(response.data.success){
                        store.state.updateElement.safeAlertContent.style.display='none';
                        //改变样式的方法--style--display:none/block-显示/隐藏
                    }else{
                        alert(response.data.err);
                    };
                });

            },
            btn_text:"确定"},
            
            { background:'#4F66B3',
            btn_click:function(){
                store.state.updateElement.safeAlertContent.style.display='none';

            },
            btn_text:"取消"}]
    }
}

const mutations = {
    getCurrentPwd:function(){
        return state.currentPwd;
    },
    setCurrentPwd:function(state,str){
        state.currentPwd=str;
    },
    getNewPwd:function(){
        return state.newPwd;
    },
    setNewPwd:function(state,str){
        state.newPwd=str;
    },
    getConfirmPwd:function(){
        return state.confirmPwd;
    },
    setConfirmPwd:function(state,str){
        state.confirmPwd=str;
    }
}
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
    state,
    mutations
})
