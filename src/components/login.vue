<template>
	<div class='container'>
		
		<bgcanvas></bgcanvas>
	 	<div class="login-wrap">
	       <img class='logo' src="../../img/7.jpg"/>
	       <form>
	       	   <div class="oneinput_box">
	       	   	    <span class="icon">
	       	   	    	<i class='icon-user'></i>
	       	   	    </span>
	       	   	    <input ref='loginId_inp' type="text" placeholder="用户名" autofocus/>
	       	   </div>
	       	   <div class="oneinput_box">
	       	   	    <span class="icon">
	       	   	    	<i class='icon-lock'></i>
	       	   	    </span>
	       	   	    <input ref='userPwd_pwd' type="password" placeholder="密码" />
	       	   </div>
	       	   <div class="oneinput_box">
	       	   	    <span class="icon">
	       	   	    	<i class='icon-lock'></i>
	       	   	    </span>
	       	   	    <input ref='validCode_vali' type="text" style='width:310px;' placeholder="输入验证码" />
	       	        <!--<span style="width:83px;text-align: center;">验证码</span>-->
	       	        <vercavas ref='veriCodeId'></vercavas>
	       	   
	       	   </div>
	       	   <button type="button" class='btn' @click='findPwd'>密码?</button>
	       	   <button type="button" class='btn' @click='login'>登录</button>
	       	   
	       </form>
		</div>
		
	</div>
</template>

<script>

import bgcanvas from './bgCanvas.vue'               //canvas背景--组件
import vercavas from './verification.vue'           //验证码--组件
export default{
 	 data(){
 	 	return{
 	 		msg:""
 	 	}
 	 },
 	 components:{ bgcanvas,vercavas },   //组件
 	 mounted:function(){                //钩子函数：页面加载就执行的函数
 	 	 //alert('login ?')
 	 	// this.$refs.loginId_inp.focus()         //this.$refs:input获取焦点（刷新页面后）
 	 	 //  var _this=this
 	 	 document.onkeypress=function(e){
 	 	 	 if(e.keyCode==13){
 	 	 	 	  //alert('回车键')
 	 	 	 	  _this.login()
 	 	 	 }
 	 	 }
 //	 	 document.body.setAttribute('style','background:red;')  //设置属性
 	 },
 	 destroyed:function(){    //销毁
 //	 	  document.body.setAttribute('style','background:red;')   
 	 },
 	 methods:{
	    findPwd(){
	    	alert('下次点击再试试')
	    },
	    login(){                    //交互-axios
	    	var _this=this;
	    	this.$reqs({                         //$reqs：axios的赋值  
	    		 methods:'get',     //-检验验证码 -输入是否正确 :   
	    		 url:this.$store.state.url.BASEURL+this.$store.state.url.CHECKVERICODE+'&veri='+this.$refs.validCode_vali.value
	    	                      //url: 端口+校验验证码+ refs(输入的验证码) --获取权限
	    	}).then(function(res){
	    		if(res.data.success){
	    		 	// alert('验证码正确')
	    		 	         //发送前端输入的        账号,密码,验证码   --》储存-发给后台：
	    		 	var loginId=_this.$refs.loginId_inp.value.trim(),     //trim去处空白
	    		        userPwd=_this.$refs.userPwd_pwd.value.trim(),
	    		        validCode=_this.$refs.validCode_vali.value.trim()
	    		    console.log(userPwd)
	    		    if(loginId&&userPwd&&validCode){
    		        	   _this.$reqs({
    		        	   	   method:'post',
    		        	   	   url:_this.$store.state.url.BASEURL+_this.$store.state.url.ADMINLOGIN,
    		        	   	                               //端口 + 管理员登录接口
    		        	   	   data:{
    		        	   	   	    userName:loginId,
    		        	   	   	    password:userPwd
    		        	   	   }
    		        	   }).then(function(res){
    		        	   	   if(res.data.success){
    		        	   	   	  // alert('登陆成功')       //跳转页面 ************     
    		        	   	   	   window.location.href="/second"
    		        	   	   }else{
    		        	   	       alert('账号或密码错误')
    		        	   	   }
    		        	   })
	    		    }else{
	    		          alert('信息填写不完整')
	    		    }
	    		}else{
	    			_this.$refs.veriCodeId.changVer()   //获取验证码属性，方法-重新获取验证码
	    		 	alert('验证码不正确')
	    		}
	    	})
	    },
     }
}

</script>

<style>
*{
	margin:0;
	padding:0;
}
.container{
	width:100%;
	height: 100%;
	overflow: hidden;
	background: rgb(37, 61, 72);  /*  darkslateblue*/
}
.container img{
	 border:none;
}
.container bgcanvas{
	position:absolute;          /*absolute  */
	top:0;
	left:0;
	z-index:2;                  /*z-index:2  */
}
.login-wrap{
	width:560px;
	height:320px;
	position: absolute;         /*absolute  */
	left:52%;
	top:45%;
	margin-top:-180px;
	margin-left:-280px;
	z-index:99;                   /*z-index:3  */
	color:darkred;
	
}
.login-wrap .logo{
	margin-left: 200px;
	margin-bottom: 29px;
	width: 60px;
	height:60px;
}
.login-wrap input{
	background:rgba(13, 25, 83, 0);              /*background*/
	width:413px;
	height:34px;
	line-height: 34px;
	border:1px solid darkslateblue;              /*border*/
	margin-left: 0px;
    padding-left:5px;
	color:#CDDC39;
}	
input:focus{
	outline:none;
}
.oneinput_box{
	position:relative;
	margin-bottom: 25px;
	overflow: hidden;
	width:457px;
	padding-left: 10px;
}
.oneinput_box * {                                /*  *所有    */     
      float: left;
}
.oneinput_box span{
	background:rgba(13, 25, 83, 0.03);           /*background*/
	padding: 11px 9px;
	padding-left: 10px;
	width:10px;
	height:12px;
	padding: 11px 9px;
	/*border:1px solid darkslateblue;*/
	/*border-right:none 0;*/
	overflow: hidden;                        /*overflow*/
	color:white;
}
.oneinput_box .icon{                         /*icon*/
	top:0;
	left:10px;
	font-size: 10px;
	width: 9px;
    height: 12px;
} 
.oneinput_box .icon-lock {                   /*icon-lock*/
          top:0;
          left:10px;
          font-size: 10px;
          width: 9px;
          height: 12px;
          z-index:1000000000;
}
 .btn {
      width: 113px;
      height: 34px;
      line-height: 34px;
      border: none;
      color: #fff;
      text-align: center;
      cursor: pointer;
      margin-left: 87px;
      background: #10213e;
      outline: none;                    /*outline*/
    }
</style>