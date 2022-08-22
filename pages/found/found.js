Page({
   

    data: {

      navState: 0,
      scrollTop:0,
      mapUrl: "",
      src: '',
      guanzhu:'+关注',

      typelist:[{
          id:1,
          title:'#夜游黄浦江#',
          headline:"18001网友在看"
      },
      {
          id:2,
          title:'#5G套餐',
         headline:  "19820网友在看"  
      },
      {
        id:3,
        title:'#垃圾箱刷脸识别',
       headline:  "24790网友在看"  
    },
    {
      id:4,
      title:'#上海垃圾分类',
     headline:  "20019网友在看"  
  },
    {
      id:5,
      title:'#美国加州地震',
    headline:  "19865网友在看"  
  },
    {
      id:6,
      title:'#豫园城隍庙',
    headline:  "30968网友在看"  
    },
    ],
    imgelist:[
      {
        num:1,
        img:"/static/image/falv.png",
        title:'法律'
      },
      {
        num:2,
        img:"/static/image/jiankang.png",
        title:'健康'
      },
      {
        num:3,
        img:"/static/image/yule.png",
        title:'娱乐'
      },
      {
        num:4,
        img:"/static/image/yingshi.png",
        title:'影视'
      },
      {
        num:5,
        img:"/static/image/jiaotong.png",
        title:'交通'
      },
      {
        num:6,
        img:"/static/image/yinyue.png",
        title:'音乐'
      },
      {
        num:7,
        img:"/static/image/meishi.png",
        title:'美食'
      },
      {
        num:8,
        img:"/static/image/caijing.png",
        title:'财经'
      },
    ],
    selflist:[
       {
         title:'雪雨雪飞',
         img:"/static/image/toux.png",
         status:0,
         time:'2个小时前'
       }
    ]
    },
    // 跳转
   
    toDetail(e){
    wx.navigateTo({
      url: '/pages/details/details?id='+e.currentTarget.dataset.id,
    })
    console.log(e);
    
    },
// 关注
    onGuanzhu:function(e){
        let _this = this.data.guanzhu
          if(_this == "+关注"){
            this.setData({guanzhu:"已关注"})
          }else{
            this.setData({guanzhu:"+关注"})
          }
      },


  
    //监听滑块
    bindchange(e) {
      let index = e.detail.current;
      this.setData({
        navState:index
      })
    },
    //点击导航
    navSwitch: function(e) {
      // console.log(e.currentTarget.dataset.index)
      let index = e.currentTarget.dataset.index;
      this.setData({
        navState:index
      })
    },
    onDing:function(e){
      console.log(e);
      let status=this.data.typelist[e.currentTarget.dataset.index].data[e.currentTarget.dataset.indexs].status;
      let active=0;
      if(status==0){
        active=1;
      }else{
        active=0;
      }
    var datalist=this.data.typelist;
     datalist[e.currentTarget.dataset.index].data[e.currentTarget.dataset.indexs].status=active;
      this.setData({
        typelist:datalist
      })
    },
    // onLoad: function () {
    //   this.setData({
    //     mapUrl: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
    //   })
    // },

// 视频播放

    bindButtonTap: function() {
      var that = this
      //拍摄视频或从手机相册中选视频
      wx.chooseVideo({
       //album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']
       sourceType: ['album', 'camera'],
       //拍摄视频最长拍摄时间，单位秒。最长支持60秒
       maxDuration: 60,
       //前置或者后置摄像头，默认为前后都有，即：['front', 'back']
       camera: ['front','back'],
       //接口调用成功，返回视频文件的临时文件路径，详见返回参数说明
       success: function(res) {
        console.log(res.tempFilePaths[0])
        that.setData({
         src: res.tempFilePaths[0]
        })
       }
      })
     },
     /**
      * 当发生错误时触发error事件，event.detail = {errMsg: 'something wrong'}
      */
     videoErrorCallback: function(e) {
      console.log('视频错误信息:')
      console.log(e.detail.errMsg)
     },





    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
  
    },
    onPageScroll: function (e) {
      var _this = this;
      // console.log(e.scrollTop)
      _this.setData({
      scrollTop:e.scrollTop
      })
    },

  })
