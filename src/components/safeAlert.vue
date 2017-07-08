<template>
	<div v-bind:style='alertClass'>
		<div v-bind:style='alertHol'>   <!--弹窗-->
			 <div style='height:30px;background:mediumpurple;margin-bottom:10px'>
			 	  <span style='color:white;line-height:30px;font-size:14px;display:inline-block;float:left;'>修改密码</span>
			      <img src="../../static/assets/images/x.png" style='display: inline-block;float:right;margin-top:5px;margin-right:10px;'/>
			 </div>
			 <ul>
			 	<li v-for='item in this.AlertInputArr.list' style='display:block;margin-bottom:10px;'>
			 		<span style='display: inline-block;text-align:right;width:80px'>{{item.rowName}}</span>    <!--当前密码-->
			 		<input type="text" width='item.width' height='20px'/>
			 		                                                   <!--失焦事件 @blur='item.defaultObj.bl.-->
			 	</li>
			 	<div>
			 		 <button @click='AlertInputArr.btn[0].btn_click'>确定</button>
			 		   <!--修改密码，主体是一个请求-->
			 	     <button @click='AlertInputArr.btn[1].btn_click'>取消</button>
			 	     
			 	</div>
			 	
			 </ul>
		</div>
	</div>
	
</template>

<script>
export default{
	name:'safeAlert',
	data(){
		return{
			alertClass:{
				'width':window.innerWidth+'px',
				'height':window.innerHeight+'px',
				//'background':'darkred',
				'z-index':1050,
				'position':'absolute',
				'top':0,
				'left':0,
				'opacity':0.9,
			},
			alertHol:{},
			AlertInputArr:this.$safeAlert.state.AlertInputArr,
			alertHolTop:{},	
			
		}
	},
	mounted:function(){             //钩子函数--vue加载时，把alertHol填满
		var width=(function(arr){
			for (var i=1;i<arr.length;i++){
				if(arr[i-1].width>arr[i].width){
					var temp=arr[i-1].width;
					arr[i-1].width=arr[i].width;
					arr[i].width=temp
				}
			}
			return arr[arr.length-1].width
		})(this.AlertInputArr.list)+110;
		var height=this.AlertInputArr.list.length*30+60+30;
		this.alertHol={
			'paddin-top':0,
			'position':'relative',
			//'background':'purple',
			'border':'2px solid purple',
			'border-top':'none',
			'width':width+'px',
			'height':height+'px',
			'top':window.innerHeight/2-height/2+'px',   //相对屏幕height/width
			'top':window.innerWidth/2-width/2+'px'
		}
	}
}
	
</script>

<style>
</style>