// pages/ding/ding.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentItemId: 1,
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    currentIndex:0,
    
    select:1,
    classlist:[{
      text: "订阅",
      select: 0
    }, {
      text: "杂志",
      select: 0
    }, {
      text: "关注",
      select: 0
    }, {
 
      text: "自媒体",
      select: 0
    }, 
    {
      text: "问答",
      select: 0
    }
  ],
   typelist:[
    {
      id:1,
      name:'推荐',
      select:0,
      data:[{
        img:"/static/image/n_24.png",
        title:'智能家居馆',
        desc:"最新科技家居体验馆",
        fens:"34.4万粉丝",
        status:0,
        type:1,
        },
         {
          img:"/static/image/qiche.jpg",
          title:'车载世界',
          desc:"汽车天下最新资讯前沿",
          fens:"29.8万粉丝",
          status:0,
          type:1,
      },
      {
        img:"/static/image/music.png",
        title:'动感音乐秀',
        desc:"动感音乐你我一起行动",
        fens:"31.1万粉丝",
        status:0,
        type:1,
        },
        {
          img:"/static/image/school.png",
          title:'校园的时光',
          desc:"回忆校园时光的灿烂笑容",
          fens:"32.6万粉丝",
          status:0,
          type:1,
          },
          {
            img:"/static/image/lifes.png",
            title:'生活百科',
            desc:"生活小常识做生活的主人",
            fens:"21.3万粉丝",
            status:0,
            type:1,
            },
            {
              img:"/static/image/meiwei.png",
              title:'美味佳肴',
              desc:"每天一刻厨房美食分享",
              status:0,
              fens:"45.5万粉丝",
              type:1,
              }

    ],
    },
    {
      id:2,
      name:'热门',
      select:0,
      data:[{
        img:"/static/image/logo.png",
        title:'热门家居',
        desc:"热门家居推荐",
        status:0,
        type:1,
     }, {
      img:"/static/image/logo.png",
      title:'热门家居',
      desc:"热门家居推荐",
      status:0,
      type:1,
   }],
    },
    {
      id:3,
      name:'新闻',
      select:0,
      data:[{
        img:"/static/image/logo.png",
        title:'热门家居',
        desc:"热门家居推荐",
        status:0,
        type:1,
     }, {
      img:"/static/image/logo.png",
      title:'热门家居',
      desc:"热门家居推荐",
      status:0,
      type:1,
   }],
    },
    {
      id:4,
      name:'时尚',
      select:0,
      data:[{
        img:"/static/image/logo.png",
        title:'热门家居',
        desc:"热门家居推荐",
        status:0,
        type:1,
     }, {
      img:"/static/image/logo.png",
      title:'热门家居',
      desc:"热门家居推荐",
      status:0,
      type:1,
   }],
    },
    {
      id:5,
      name:'美食',
      select:0,
      data:[{
        img:"/static/image/logo.png",
        title:'热门家居',
        desc:"热门家居推荐",
        status:0,
        type:1,
     }, {
      img:"/static/image/logo.png",
      title:'热门家居',
      desc:"热门家居推荐",
      status:0,
      type:1,
   }],
    },
    {
      id:6,
      name:'音乐',
      select:0,
      data:[{
        img:"/static/image/logo.png",
        title:'热门家居',
        desc:"热门家居推荐",
        status:0,
        type:1,
     }, {
      img:"/static/image/logo.png",
      title:'热门家居',
      desc:"热门家居推荐",
      status:0,
      type:1,
   }],
    },
    {
      id:7,
      name:'美图',
      select:0,
      data:[{
        img:"/static/image/logo.png",
        title:'热门家居',
        desc:"热门家居推荐",
        status:0,
        type:1,
     }, {
      img:"/static/image/logo.png",
      title:'热门家居',
      desc:"热门家居推荐",
      status:0,
      type:1,
   }],
    },
    {
      id:8,
      name:'旅游',
      select:0,
      data:[{
        img:"/static/image/logo.png",
        title:'热门家居',
        desc:"热门家居推荐",
        status:0,
        type:1,
     }, {
      img:"/static/image/logo.png",
      title:'热门家居',
      desc:"热门家居推荐",
      status:0,
      type:1,
   }],
    },
    {
      id:9,
      name:'摄影',
      select:0,
      data:[{
        img:"/static/image/logo.png",
        title:'热门家居',
        desc:"热门家居推荐",
        status:0,
        type:1,
     }, {
      img:"/static/image/logo.png",
      title:'热门家居',
      desc:"热门家居推荐",
      status:0,
      type:1,
   }],
    },
    {
      id:10,
      name:'生活',
      select:0,
      data:[{
        img:"/static/image/logo.png",
        title:'热门家居',
        desc:"热门家居推荐",
        status:0,
        type:1,
     }, {
      img:"/static/image/logo.png",
      title:'热门家居',
      desc:"热门家居推荐",
      status:0,
      type:1,
   }],
    },
    {
      id:11,
      name:'体育',
      select:0,
      data:[{
        img:"/static/image/logo.png",
        title:'热门家居',
        desc:"热门家居推荐",
        status:0,
        type:1,
     }, {
      img:"/static/image/logo.png",
      title:'热门家居',
      desc:"热门家居推荐",
      status:0,
      type:1,
   }],
    },
   ],
   expert_list: [{
  img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.nosdn.127.net%2FYxcD21QrorfDbl%3DTY0qgSeUcchrofGZdUwzJQsvhRDdrr1530028784762.jpg&refer=http%3A%2F%2Fdingyue.nosdn.127.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628088077&t=9f2426a6281b3baf980fa8e8b2faef74',
  }, {
    img: 'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D680%2C800/sign=ae90fa63c13d70cf4cafa20bc0ecfd38/caef76094b36acafff733ea674d98d1000e99cdd.jpg',
  }, {
    img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F00.minipic.eastday.com%2F20170818%2F20170818115400_d41d8cd98f00b204e9800998ecf8427e_1.jpeg&refer=http%3A%2F%2F00.minipic.eastday.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628088077&t=f4d26441a71711405c75b6574e438b2b',
  }
],
  dingyue_list:[
    {
    idx:0,
    dy_img:"/static/image/yishu_sh.png",
    dy_text:"艺术与设计",
    dy_time:"2019年1月刊（上）"
  },
  {
    idx:1,
    dy_img:"/static/image/zg_child.png",
    dy_text:"中国儿童画报",
    dy_time:"2019年1月刊（上）"
  },
  {
    idx:2,
    dy_img:"/static/image/yj_kc.png",
    dy_text:"演讲与口才",
    dy_time:"2019年1月刊（上）"
  }

  
  ]
  
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
  onActive:function(e){
    console.log(e);
    this.setData({
      select:e.currentTarget.dataset.id
    })
  },
  swichNav: function( e ) {

    var that = this;

    if( this.data.currentTab === e.target.dataset.current ) {
        return false;
    } else {
        that.setData( {
            currentTab: e.target.dataset.current
        })
    }
},
hanIdeItemTap(e){
  const {index}=e.currentTarget.dataset;
  let {tabs}=this.data;
  tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
  console.log(e)
  this.setData({
    tabs
  })
},

bindChange: function( e ) {
    var that = this;
    that.setData( { currentTab: e.detail.current });
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;

        /**
         * 获取当前设备的宽高
         */
        wx.getSystemInfo( {

            success: function( res ) {
                that.setData( {
                    winWidth: res.windowWidth,
                    winHeight: res.windowHeight
                });
            }
        });
        
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  swiperChange: function (e) {
    var currentItemId = e.detail.currentItemId;
    this.setData({
      currentItemId: currentItemId
    })
  },

  clickChange: function (e) {
    var itemId = e.currentTarget.dataset.itemId;
    this.setData({
      currentItemId: itemId
    })
  },




})