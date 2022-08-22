// pages/login/login.js
//全部分类
const app = getApp(); //全局app
Page({

  /**
   * 页面的初始数据
   */
  data: {
     active:1, //1登录 2注册
     tel:"",
     pass:"",
     repass:"",
     button:'立即登录',
  },

//选择切换table
changeselect:function(e){
  let active_msg=e.currentTarget.dataset.id;
  let button_msg=active_msg==1?"立即登录":"免费注册";
  this.setData({
    active:active_msg,
    button:button_msg
  });
},

//监听账号框
  changename:function(e){
      console.log(e);
      console.log(e.detail.value);
      this.setData({
        tel:e.detail.value
      });
  },
//监听密码框
  changepass:function(e){

    this.setData({
      pass:e.detail.value
    });
},


//监听确认密码框
changerepass:function(e){
  this.setData({
    repass:e.detail.value
  });
},


//登录注册提交按钮
sendlogin:function(){
   var tel=this.data.tel;
   var pass=this.data.pass;
    if(this.data.tel.length!=11){
      wx.showToast({
        icon:'none',
        title: '请输入正确的手机号码',
      });
      return;
    }
    if(this.data.pass==''){
      wx.showToast({
        icon:'none',
        title: '请输入密码',
      });
      return;
    }
    if(this.data.active==2&&this.data.repass!=this.data.pass){
      wx.showToast({
        icon:'none',
        title: '密码不一致',
      });
      return;
    }
  
    let sendurl=this.data.active==1?"http://news.ueoa.net/news/login":"http://news.ueoa.net/news/register";
  //提交给后台
  var juhe="http://v.juhe.cn/toutiao/index";
    wx.request({
      url: sendurl,
      data: {
        key:'1b1c90be202862dfba4cd7e8f533a856',
        tel:tel,
        pass:pass 
      },
      success (res) {
         console.log(res);
         wx.showToast({
           title: res.data.msg,
           icon:"none"
         })
         if(res.data.code==200){
           //登录成功
           wx.setStorageSync('token',res.data.token);
           wx.setStorageSync('tel',tel);
           setTimeout(() => {
                wx.switchTab({
                  url: '/pages/index/index',
                })
           }, 1000);
         }

      }
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var token=wx.getStorageSync('token');
    if(token!=''){
      //已经登录成功
      console.log("已经登录");
      wx.switchTab({
        url: '/pages/index/index',
      })
    }
  },
 
 
})