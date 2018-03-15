// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: ''
  },

  //跳转产品列表页
  toProList: function(e) {
    var series = e.currentTarget.dataset.index;   //系列编号
    //console.log(e);
    wx.navigateTo({
      url: '../prolist/prolist?series='+series
    })
  },

  //跳转到购物车页
  shoppingCar: function () {
    wx.navigateTo({
      url: '../shoppingcar/shoppingcar'
    })
  },

  //跳转到我的订单页
  myOrder: function() {
    wx.redirectTo({
      url: '../myorder/myorder'
    })
  },

  //跳转到收货地址页
  changeAddr: function() {
    wx.navigateTo({
      url: '../changeaddr/changeaddr'
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
  onReady: function (res) {
    
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
