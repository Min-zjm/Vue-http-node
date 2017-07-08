<template>
  <div>
        <div>
            <headerSecond></headerSecond> 
        </div>
       
        <div class="index_body">
             <!-- 快捷操作开始 -->
              <div class="quick_links">
                <div class="quicklinks_one" v-on:click="courseList()">
                  <h1>课程列表</h1>
                  <h2>Course List</h2>
                  <div class="icon_wrap"><i class="icon icon-th-large"></i></div>
                  <p>查询现有课程，添加课程，管理课程</p>
                </div>
                <div class="quicklinks_one" onclick="window.location = '/courseEditList'">
                  <h1>课程添加</h1>
                  <h2>Course Add</h2>
                  <div class="icon_wrap"><i class="icon icon-plus"></i></div>
                  <p>添加、修改课程信息，为课程添加视频课件……</p>
                </div>
                <div class="quicklinks_one mouse_on" v-on:click="courseList()">
                  <h1>课程置顶</h1>
                  <h2>Course Up</h2>
                  <div class="icon_wrap"><i class="icon icon-arrow-up"></i></div>
                  <p>课程置顶，显示在移动端banner上</p>
                </div>
                <div class="quicklinks_one" onclick="window.location = '/vedioList'">
                  <h1>视频管理</h1>
                  <h2>Video Manage</h2>
                  <div class="icon_wrap"><i class="icon icon-facetime-video"></i></div>
                  <p>管理视频，上传、删除</p>
                </div>
                <div class="quicklinks_one mouse_on"  onclick="window.location = '/adminListCom'">
                  <h1>用户管理</h1>
                  <h2>User Manage</h2>
                  <div class="icon_wrap"><i class="icon icon-user"></i></div>
                  <p>管理系统用户</p>
                </div>
                <div class="quicklinks_one mouse_on"  onclick="window.location = '/studentList'">
                  <h1>学员管理</h1>
                  <h2>Student Manage</h2>
                  <div class="icon_wrap"><i class="icon icon-file"></i></div>
                  <p>管理学员</p>
                </div>
              </div>
        
        <!--echarts插件图表开始 -->
            <div class="charts_wrap">
                  <div style="background:#fff; padding-top:20px; height:340px;">
                    <div style="width:400px; height:370px;" ref="chart01"></div>
                  </div>
                  <div style="background:#fff; padding-top:20px; height:340px;">
                    <div style="width:530px; height:370px;" ref="chart02"></div>
                  </div>
                  <div style="background:#fff; padding-top:20px; height:340px;">
                    <div style="width:580px; height:370px;" ref="chart03"></div>
                  </div>
                  <div style="background:#fff; height:360px;">  <!-- 1. -->
                    <div style="width:580px; height:370px;" ref="chart04"></div><!-- 2. -->
                  </div>
                  <div style="background:#fff; padding-top:20px; height:340px;">
                    <div style="width:400px; height:370px;" ref="chart05"></div>
                  </div>
              </div>
        </div>
  </div>
</template>
<script type="text/javascript">
import headerSecond from './headerSecond.vue';       //外部引入head.vue
import echarts from 'echarts';                       //在此地引入echarts插件(cnpm)

export default {
      data () {
        return {
          input_default:{}
        }
      },
      components:{headerSecond},      //组件
      
      mounted:function(){
        document.body.setAttribute("style","background:url(../../static/assets/images/index_body_bg.jpg) !important;min-width:1100px;font-family:'宋体';margin:0;padding:0");

          if(window.offsetWidth <= 1366){
             this.$refs.chart01.style.width='40%';
             this.$refs.chart02.style.width='40%';
             this.$refs.chart03.style.width='90%';
             this.$refs.chart04.style.width='90%';     //3.
             //this.$refs.chart05.style.width='40%';
          };
     
   //echarts插件
        var mychart01 = echarts.init(this.$refs.chart01);   //this.$refs.
         mychart01.setOption( {
                  				title : {
                  					text: '学习人数比例',
                  					subtext: '  ',
                  					x:'center',
                                    textStyle:{
                                      color:'#008ACD'
                                    }
                  				},
                  				tooltip : {
                  					formatter: "{a} <br/>{b} : {c}%"
                  				},
                  				series : [
                  					{
                  						name:'学习人数比例66',
                  						type:'gauge',
                  						axisLine:{
                                            show:true,
                                             lineStyle: {
                                                    color: [
                                                        [0.2, '#2EC7C9'],
                                                        [0.8, '#5AB1EF'],
                                                        [1, '#D87A80']
                                                    ],
                                                    width:10
                                                }
                  						},
                  						axisTick:{

                  						    show:true,

                  						    length:8,
                  						    lineStyle:{
                  						        color: [
                                                      [0.2, '#2EC7C9'],
                                                      [0.8, '#5AB1EF'],
                                                      [1, '#D87A80']
                                                  ],
                                                width:1,
                  						        type:'solid'

                  						    }

                  						},
                  						detail : {

                  						formatter:'{value}%'
                  						},
                  						data:[{value: 80, name: '比例'}]
                  					}
                  				]
                  			});

           var mychart02 = echarts.init(this.$refs.chart02);
           mychart02.setOption( {
                                    title : {
                                        text: '考试通过率',
                                        subtext: '  ',
                                        x:'center',
                                        textStyle:{
                                            color:'#008ACD'
                                        }
                                    },
                                    tooltip : {
                                        trigger: 'item',
                                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                                    },
                                    color:['#B6A2DE','#57D2D3'],

                                    series : [
                                        {
                                            name:'访问来源',
                                            type:'pie',
                                            radius : ['0','55%'],
                                            center: ['50%', '50%'],
                                            data:[
                                                {value:335, name:'已通过'},
                                                {value:310, name:'未通过'}
                                            ]



                                         }
                                    ]
                                 });


      var mychart03 = echarts.init(this.$refs.chart03);
      mychart03.setOption({
				title: {
					x: 'center',
					text: '时间、课程、新增课程输',
					subtext: ' '
					,
                    textStyle:{
                        color:'#008ACD'
                    }
				},
				tooltip: {
					trigger: 'item'
				},
				calculable: true,
				grid: {
					borderWidth: 0,
					y: 80,
					y2: 60
				},
				xAxis: [
					{
						type: 'category',
						show: false,
						data: ['学习时间', '总课程数', '新增课程数']
					}
				],
				yAxis: [
					{
						type: 'value',
						show: false
					}
				],
				series: [
                        {
                            name: '',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: function(params) {
                                        // build a color map as your need.
                                        var colorList = [
                                          '#C1232B','#B5C334','#F0805A'
                                        ];
                                        return colorList[params.dataIndex]
                                    },

                                    barBorderRadius:5,
                                    label: {
                                        show: true,
                                        position: 'top',
                                        formatter: '{b}\n{c}'
                                    }
                                }
                            },
                            data: [12,21,10]
                        }
				    ]
				});
var mychart04 = echarts.init(this.$refs.chart04);    //4.
mychart04.setOption({                               //5.({})
			    backgroundColor: '#2c343c',
			
			    title: {
			        text: 'Customized Pie',
			        left: 'center',
			        top: 20,
			        textStyle: {
			            color: 'purple'
			        }
			    },
			
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			
			    visualMap: {
			        show: false,
			        min: 80,
			        max: 600,
			        inRange: {
			            colorLightness: [0, 1]
			        }
			    },
			    series : [
			        {
			            name:'访问来源',
			            type:'pie',
			            radius : '55%',
			            center: ['50%', '50%'],
			            data:[
			                {value:335, name:'直接访问'},
			                {value:310, name:'邮件营销'},
			                {value:274, name:'联盟广告'},
			                {value:235, name:'视频广告'},
			                {value:400, name:'搜索引擎'}
			            ].sort(function (a, b) { return a.value - b.value; }),
			            roseType: 'radius',
			            label: {
			                normal: {
			                    textStyle: {
			                        color: 'blue'
			                    }
			                }
			            },
			            labelLine: {
			                normal: {
			                    lineStyle: {
			                        color: 'white'
			                    },
			                    smooth: 0.2,
			                    length: 10,
			                    length2: 20
			                }
			            },
			            itemStyle: {
			                normal: {
			                    color: 'green',
			                    shadowBlur: 200,
			                    shadowColor: 'yellow'
			                }
			            },
			
			            animationType: 'scale',
			            animationEasing: 'elasticOut',
			            animationDelay: function (idx) {
			                return Math.random() * 200;
			            }
			        }
			    ]
});
//var mychart05 = echarts.init(this.$refs.chart05);    //4.
//mychart05.setOption({
//	    backgroundColor: '#000',
//    globe: {
//    //  baseTexture: "/asset/get/s/data-1491837049070-rJZtl7Y6x.jpg",
//    //  heightTexture: "/asset/get/s/data-1491837049070-rJZtl7Y6x.jpg",
//      displacementScale: 0.04,
//      shading: 'realistic',
//    //  environment: '/asset/get/s/data-1491837999815-H1_44Qtal.jpg',
//      realisticMaterial: {
//          roughness: 0.9
//      },
//      postEffect: {
//          enable: true
//      },
//      light: {
//          main: {
//              intensity: 5,
//              shadow: true
//          },
//          ambientCubemap: {
//              texture: '/asset/get/s/data-1491838644249-ry33I7YTe.hdr',
//              diffuseIntensity: 0.2
//          }
//      }
//  }
//	
//});
      
      
      },



     methods:{
            courseList:function(){//55
                window.location = "/courseList";
            }
       }
}
</script>

<style>
    .index_body{
    	background:url(../../static/assets/images/index_body_bg.jpg);
    	padding-top:65px;
    	color:#fff;
    	min-width:1100px;
    }
    .quick_links{
    	overflow:hidden;
    }
    .quicklinks_one{
    	width:12%;
    	height:202px;
    	background:url(../../static/assets/images/white_opacity_bg.png);
    	position:relative;
    	text-align:center;
    	cursor:pointer;
    	float:left;
    	margin-left:4%;
    	margin-bottom:54px;
    }
    .quicklinks_one h1{
    	font-size:24px;
    	font-family:"方正大标宋", "宋体";
    	padding-top:38px;
    }
    .quicklinks_one h2{
    	font-size:12px;
    	font-family:Arial, Helvetica, sans-serif;
    	padding-top:12px;
    	font-weight:normal;
    }
    .quicklinks_one p{
    	font-size:12px;
    	padding:23px 22px 0;
    	display:none;
    	line-height:21px;
    }
    .quicklinks_one .icon_wrap{
    	position:absolute;
    	top:118px;
    	left:0;
    	width:100%;
    }
    .quicklinks_one i{
    	font-size:40px;
    }
  .quicklinks_one i{
        border:none;
        height:20px;
  }
  .quicklinks_one  .icon-plus{
    border:0px solid #fff;
    border-radius:2px;
  }
   .quicklinks_one .icon::before{
         position:absolute;
         left:85px;
         top:-10px;
    }
  .quicklinks_one  .icon-plus:before{
      width:43px;
      border:4px solid #fff;
      border-radius:2px;
      left:80px;
      top:5px;

    }

/*hover*/
   .quicklinks_one:hover{
    	background-color:#27a9e3;
    	transition: all 0.5s ease 0s;
    }
    .quicklinks_one:hover .icon_wrap{
    	top:22px;
    	transition: all 0.5s ease 0s;
    }
    .quicklinks_one:hover h1{
    	padding-top:78px;
    	transition: all 0.5s ease 0s;
    }
    .quicklinks_one:hover h2{
    	display:none;               /*display*/
    	transition: all 0.5s ease 0s;
    }
    .quicklinks_one:hover p{
    	display:block;
    	transition: all 0.5s ease 0s;
    }
    .quicklinks_one.disabled{
    	opacity:0.6;
    	cursor:not-allowed;
    }

/*图表*/
.charts_wrap{
	margin-left:4%;
	margin-right:4%;
	background:url(../../static/assets/images/white_opacity_bg.png);
	padding-top:50px;
	overflow:hidden;
}
.charts_wrap > div{
	float:left;
	margin-left:4%;
	overflow:hidden;
	margin-bottom:50px;
}

</style>
