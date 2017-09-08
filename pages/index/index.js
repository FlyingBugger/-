//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    show:false,
    shops:[
      { 
        id:1,
        pic:"../../images/pic.jpg",
        title:"【包邮】汐美无花果酵素原液30ml*6瓶/盒",
        counts:"298.00"
      },
      {
        id:2,
        pic: "../../images/pic.jpg",
        title: "【包邮】汐美无花果酵素原液30ml*6瓶/盒",
        counts: "298.00"
      }
    ],
    "search": [
      {
        name: "湄公河行动"
      },
      {
        name: "阿甘正传"
      },
      {
        name: "这个杀手不太冷"
      }
    ] 
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goDetail:function(e){
   let pid=e.currentTarget.dataset.id;
   wx.navigateTo({
     url: '../details/details?pid='+pid,
   })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo){
      //更新数据

      that.setData({
        userInfo:userInfo
      })
    })
wx.login({
  success:function(res){
    console.log(res);
    wx.request({
      url: 'http://9478081c.ngrok.io/main.php',
      data:{test:'key'},
      method:'POST',
      success:function(res){
        console.log(res);
      }
    })
  }
})
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
      }
    })
  }
})
