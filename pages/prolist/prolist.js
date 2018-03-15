// pages/prolist/prolist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    series: -1        //系列编号
  },

  //返回产品系列
  toPros: function() {
    wx.redirectTo({
      url: '../index/index'
    })
  },

  //跳转到产品详情页
  toProInfo: function(e) {
    var id = e.currentTarget.dataset.itemIndex;
    var series = this.data.series;
    //console.log(id);
    wx.redirectTo({
      url: '../proinfo/proinfo?id='+id+'&series='+series,
    })
  },

  //跳转到购物车
  toCar: function() {
    wx.redirectTo({
      url: '../shoppingcar/shoppingcar',
    })
  },
  

  //跳转到我的订单
  toOrder: function() {
    wx.redirectTo({
      url: '../myorder/myorder',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      series: options.series
    })
    //console.log(this.data.series);
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