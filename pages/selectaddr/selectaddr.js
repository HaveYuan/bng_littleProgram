// pages/selectaddr/selectaddr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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

    addr: [],           //选择地址
  },

  //添加新收货地址
  addNewAddr: function() {
    var pageId = 1;
    wx.navigateTo({
      url: '../addaddr/addaddr?pageId='+pageId
    })
  },

  //选择地址
  chooseAddr: function(e) {
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];  //上一个页面
 
    var index = e.currentTarget.dataset.index;
    //console.log(index);
    var addrList = this.data.addrList;

    for(var i = 0; i < addrList.length; i++) {
      if(index == i) {
        // this.setData({
        //   addr: addrList[i]
        // });
        // break;
        //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
        prevPage.setData({
          person: addrList[i].person,
          phone: addrList[i].phone,
          resgion: addrList[i].addr,
          clearAddr: addrList[i].clearAddr
        })

        console.log(prevPage.data.person);

        break;
      }
    }

    //var addr = JSON.stringify(this.data.addr);

    

    // wx.navigateBack({
    //   url: '../shoppingcar/shoppingcar?addr='+addr,
    // })

    wx.navigateBack({})




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