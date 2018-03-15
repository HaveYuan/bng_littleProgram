// pages/myorder/myorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //订单
    //0为已完成，1为已出库，2为待审核
    orderList: [
      {
        "id": 1,
        "orderNum": "DD20171127CA",
        "orderFlag": 0,
        "orderTime": "2017-11-28 09:23:47"
      },
      {
        "id": 2,
        "orderNum": "DD20171127CA",
        "orderFlag": 1,
        "orderTime": "2017-11-29 09:23:47"
      },
      {
        "id": 4,
        "orderNum": "DD20171127CA",
        "orderFlag": 2,
        "orderTime": "2017-11-27 09:23:47"
      }
    ],
  },

  //返回首页
  returnIndex: function() {
    wx.redirectTo({
      url: '../index/index'
    })
  },

  //查看订单
  checkOrder: function(e) {
    var id = e.currentTarget.dataset['index'];
    wx.redirectTo({
      url: '../orderinfo/orderinfo?id='+id
    })
    console.log(id);
  },

  //退出登录
  logout: function() {
    wx.setStorageSync('phone', null);
    wx.redirectTo({
      url: '../login/login',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  }
})