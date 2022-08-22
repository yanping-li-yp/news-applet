// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    news:'',
    content:'',
    uniquekey:''
  },
  onLoad(e) {
     console.log(e);
     //接收index传递过来的ID
     this.setData({
        uniquekey:e.id
     })
     this.detail();
  },
  detail:function(){
    var url="http://v.juhe.cn/toutiao/content";
    var key="6318b9fe992fbf639c84c6136aba0f25";
    var _this=this;
     wx.request({
       url: url,
       data:{
         key:key,
         uniquekey:this.data.uniquekey
       },
       success(res){
         console.log(res);
         if(res.data.error_code != 0){
           _this.setData({
             reason:res.data.reason
           })
         }
          _this.setData({
            news:res.data.result.detail,
            content:res.data.result.content
          })
       }
     })
  }
})
