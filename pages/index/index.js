var app = getApp()
Page({
  data: {
    navbar: ['热点', '关注', '时尚','美食','音乐','美图'],
    currentTab: 0,
    url:'../../static/video/HD.mp4',
    imgList: [
      "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=508387608,2848974022&fm=26&gp=0.jpg",
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3139953554,3011511497&fm=26&gp=0.jpg",
      "https://img1.baidu.com/it/u=3701370651,2867135978&fm=26&fmt=auto&gp=0.jpg",
      "https://img2.baidu.com/it/u=3902645412,3225422040&fm=26&fmt=auto&gp=0.jpg",
      "https://img0.baidu.com/it/u=570862789,3645674186&fm=26&fmt=auto&gp=0.jpg",
      "https://img1.baidu.com/it/u=3623149176,3441258980&fm=26&fmt=auto&gp=0.jpg",
      "https://img0.baidu.com/it/u=3391864021,2947070253&fm=26&fmt=auto&gp=0.jpg",
      "https://img2.baidu.com/it/u=2379147686,1491219573&fm=26&fmt=auto&gp=0.jpg"
    ],
    imgUrls: [
      '../../static/image/img1.png',
      '../../static/image/img2.png',
      '../../static/image/img3.png'
  ],
  imgUrls1: [
    '../../static/image/img4.jpg',
    '../../static/image/img5.jpg',
    '../../static/image/img6.jpg'
],
imgUrls2: [
  '../../static/image/shishang1.jpg',
  '../../static/image/shishang2.jpg',
  '../../static/image/shishang3.jpg'
],
imgUrls3: [
  '../../static/image/food2.webp',
  '../../static/image/food3.webp',
  '../../static/image/food1.webp'
],
onShareAppMessage() {
 
  },

  onReady() {
    this.videoContext = wx.createVideoContext('myVideo')
  },

  onHide() {

  },
  indicatorDots: true,
  vertical: false,
  autoplay: true,
  interval: 3000,
  duration: 1200,
  iscollect: true,
  },

  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  preview(event) {
    console.log(event.currentTarget.dataset.src)
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.imgList // 需要预览的图片http链接列表
    })
  }

})
