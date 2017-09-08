//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    tagActiveNumber:0,
    height:"800rpx",
    shops: [
      {
        id: 1,
        pic: "../../images/pic.jpg",
        title: "【包邮】汐美无花果酵素原液30ml*6瓶/盒",
        counts: "298.00"
      },
      {
        id: 2,
        pic: "../../images/pic.jpg",
        title: "【包邮】汐美无花果酵素原液30ml*6瓶/盒",
        counts: "298.00"
      }
    ],
  },
  loopTag: function (e) {
    let that = this;

    that.setData({
      tagActiveNumber: e.currentTarget.dataset.current,
      itemIndex: e.currentTarget.dataset.current
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
