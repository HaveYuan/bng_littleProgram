// pages/changeaddr/changeaddr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //收货地址
    addrList: [
      {
        "id": "1",
        "person": "林友原",
        "phone": "13512312345",
        "addr": [
            "广东省",
            "广州市",
            "海珠区"
        ],
        "clearAddr": "泉塘路38号唐婕大厦"
      },
      {
        "id": "2",
        "person": "林友原2",
        "phone": "13512312345",
        "addr": [
          "广东省",
          "广州市",
          "海珠区"
        ],
        "clearAddr": "泉塘路38号唐婕大厦"
      },
      {
        "id": "3",
        "person": "林友原3",
        "phone": "13512312345",
        "addr": [
          "广东省",
          "广州市",
          "海珠区"
        ],
        "clearAddr": "泉塘路38号唐婕大厦"
      }
    ],
  },


  //跳转新增地址
  addNewAddr: function() {
    var pageId = 2;
    wx.redirectTo({
      url: '../addaddr/addaddr?pageId='+pageId
    })
  },

  //修改地址
  changeAddr: function(e) {
    //传参
    var pageId = 2;
    console.log(e.currentTarget.dataset['index']);
    var id = e.currentTarget.dataset['index'];
    var list = this.data.addrList;

    for (var i = 0; i < list.length; i++) {
      if (list[i].id == id) {
        var addrList = JSON.stringify(list[i]);  //先将对象转化为字符串后再传值
      }
    }

    wx.redirectTo({
      url: '../addaddr/addaddr?addrList='+addrList+'&pageId='+pageId
    })
  },

  //删除地址
  deleteAddr: function(e) {
    var that = this;
    wx.showModal({
      title: '删除地址',
      content: '确定要删除此地址吗？',
      confirmColor: '#fabd00',
      success: function(c) {
        if(c.confirm) {
          console.log("用户确定删除");
          //传参
          console.log(e.currentTarget.dataset['index']);
          var id = e.currentTarget.dataset['index'];
          var list = that.data.addrList;
          for (var i = 0; i < list.length; i++) {
            if (list[i].id == id) {
              console.log(list[i]);
            }
          }
        }else if(c.cancel) {
          console.log("用户取消删除");
        }
      }
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