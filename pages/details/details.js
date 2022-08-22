// pages/details/details.js

const app = getApp()


Page({

  data: {
    details_list:[
      {
        video_src:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
        title:"云南丽江古城多迷人当踏足古城之时，游人会被其风景迷花了眼",
        content:"丽江旅游景点以一城一山一湖（丽江古城、玉龙雪山、沪沽湖）为主要代表。其他较知名的还有束河古镇、拉市海、虎跳峡、老君山、文笔山、长江第一湾等景点。",
        user_logo:"/static/image/xiangqing_logo.png",
        user_name:"叮当 果果",
        user_level:5,
        other_info:"2019-06-04 13:00 | 山东新闻在线"
      }
    ],
    
   nomore:"没有更多了，去其他页面看看吧！",
    news_list:[],
    favorite_color:"rgb(49,49,49)",
    status:"+关注"
  },

  onShow: function () {
    this.news_api();
  },

  
  // 视频
  // onShareAppMessage() {
  //   return {
  //     title: 'video',
  //     path: 'page/component/pages/video/video'
  //   }
  // },

  onReady() {
    this.videoContext = wx.createVideoContext('myVideo')
  },

  onHide() {

  },
  

  bindButtonTap() {
    const that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },

  bindPlayVideo() {
    console.log('1')
    this.videoContext.play()
  },
  videoErrorCallback(e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },// 视频

// 新闻接口
news_api:function(){
  let url = "http://v.juhe.cn/toutiao/index";
  let key = "6318b9fe992fbf639c84c6136aba0f25";
  let _this = this;
  wx.request({
    url: url,
    data:{
      key:key,
      page_size:20
    },
    success(res){
      console.log(res);
      if(res.data.error_code==0){
        _this.setData({
          news_list:res.data.result.data
        })
      }
    }
  })
},

    //跳转详情
    getDetail:function(e){
      console.log(e.currentTarget.dataset.id);
      var id=e.currentTarget.dataset.id;//变量
      wx.navigateTo({
        url: '/pages/detailsrecommend/detailsrecommend?id='+id,
      })
    },

    // 评论
    onClickPinglun:function(e){
      wx.navigateTo({
        url: '/pages/comments/comments',
      })
    },

      //点赞
      onFavorite:function(e){
        let _this = this.data.favorite_color
        if(_this == "rgb(49,49,49)"){
          this.setData({favorite_color:"red"})
        }else{
          this.setData({favorite_color:"rgb(49,49,49)"})
        }
        
      },
    // 关注
    onGuanzhu:function(e){
      let _this = this.data.status
        if(_this == "+关注"){
          this.setData({status:"已关注"})
          wx.showToast({
            title: '关注成功！',
            icon: 'none',
            duration: 1000
          })
        }else{
          this.setData({status:"+关注"})
          wx.showToast({
            title: '已取消关注！',
            icon: 'none',
            duration: 1000
          })
        }
    },
    // 分享
    fenxiang:function(e){
      console.log("你好")
      wx.downloadFile({
        url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/demo.ef5c5bef.jpg',
        success: (res) => {
          wx.showShareImageMenu({
            path: res.tempFilePath
          })
        }
      })
    }
    
})