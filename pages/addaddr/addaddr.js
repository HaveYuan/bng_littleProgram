// pages/addaddr/addaddr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: [],                //省市区数组
    isShow: 'none',            //显示提示框
    person: '',                //收货人
    phone: '',                 //电话
    clearAddr: '',             //详细地址
    hideModale: {},            //显示保存成功
    istrue: false,           //按钮可点击状态
    pageId: 0
  },


  //省市区选择
  bindRegionChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  //获取收货人的名字
  getPerson: function(e) {
    this.setData({
      person: this.trim(e.detail.value)
    })
  },

  //获取联系电话
  getPhone: function(e) {
    this.setData({
      phone: this.trim(e.detail.value)
    })
    console.log(this.data.phone);
  },

  //获取详细地址
  getClearAddr: function (e) {
    this.setData({
      clearAddr: this.trim(e.detail.value)
    })
    console.log(this.data.clearAddr);
  },

  //保存地址
  subAddr: function(e) {
    if(this.data.person == '') {
      wx.showModal({
        content: '请填写收货人姓名',
        confirmColor: '#fabd00',
        showCancel: false
      })
    }else if(this.data.phone == '') {
      wx.showModal({
        content: '请填写联系电话',
        confirmColor: '#fabd00',
        showCancel: false
      })
    }else if(this.data.region == '') {
      wx.showModal({
        content: '请填写省市区',
        confirmColor: '#fabd00',
        showCancel: false
      })
    }else if(this.data.clearAddr == '') {
      wx.showModal({
        content: '请填写详细地址',
        confirmColor: '#fabd00',
        showCancel: false
      })
    }else {
      var that = this;

      var animation = wx.createAnimation({
        duration: 1500,
        delay: 1000
      });

      this.animation = animation;

      animation.opacity(0).step();

      this.setData({
        isShow: 'block',
      });

      setTimeout(function () {
        that.setData({
          hideModale: animation.export()
        })
      }, 100);

      setTimeout(function () {
        that.setData({
          isShow: 'none',
        });
      }, 2600)

      this.setData({
        istrue: true
      })

      // wx.navigateBack({
        
      // })
      if(this.data.pageId == 1) {   //跳转到购物车页面
        wx.navigateBack({})
      } else if (this.data.pageId == 2) {    //跳转到查看收货地址页面
        wx.redirectTo({
          url: '../changeaddr/changeaddr',
        })
      }
    }
  },

  //去左空格;
  ltrim(s) {
    return s.replace(/(^\s*)/g, "");
  },
  //去右空格;
  rtrim(s) {
    return s.replace(/(\s*$)/g, "");
  },
  //去左右空格;
  trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, "");
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      pageId: options.pageId
    });

    if(options.addrList != null) {
      var addrList = JSON.parse(options.addrList);
      //console.log(addrList.person);

      this.setData({
        person: addrList.person,
        phone: addrList.phone,
        region: addrList.addr,
        clearAddr: addrList.clearAddr
      })
    //console.log(this.data.region[0])
    }
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