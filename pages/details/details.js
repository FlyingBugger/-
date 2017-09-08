//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    comment: 0,
    detail: {
      "logo":
      ["../../images/pic.jpg", "../../images/pic.jpg"],
      "title": "title", "countes": 298, "picDetail": ["c.png", "d.png", "e.png"]
    },
    itemIndex: 0,
    numIndex: 0,
    tagActiveA: "tagActive",
    tagActiveB: " "
  },
  //事件处理函数
  toMain: function () {
    console.log(1);
    wx.switchTab({
      url: '../index/index'
    })
  },
  commentswTag: function (e) {
    let that = this;
    this.setData({
      numIndex: e.currentTarget.dataset.current
    })
  },
  loopTag: function (e) {
    let that = this;
    if (e.currentTarget.dataset.current == 0) {
      that.setData({
        tagActiveA: "tagActive",
        tagActiveB: " "
      })
    } else {
      that.setData({
        tagActiveA: "",
        tagActiveB: " tagActive"
      })
    }
    that.setData({
      itemIndex: e.currentTarget.dataset.current
    })
  },
  onLoad: function (e) {

    console.log(e)
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
