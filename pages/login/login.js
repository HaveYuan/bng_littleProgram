// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    code: null,
    second: 60,
    flag: 1
  
  },

  //获取手机
  getPhone: function(e) {
    var phone1 = e.detail.value;
    this.setData({
      phone: phone1
    })
  },

  //获取验证码
  getCode: function(e) {
    var code1 = e.detail.value;
    this.setData({
      code: code1,
    })
  },

  //发送验证码到手机
  sendCode: function() {
    var re = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    if(this.data.phone == '') {
      wx.showModal({
        content: '请填写手机号码',
        confirmColor: '#fabd00',
        showCancel: false
      })
    }else if (!re.test(this.data.phone)) {
      wx.showModal({
        content: '请填写正确的手机号码',
        confirmColor: '#fabd00',
        showCancel: false
      })
    }else {
      this.setData({
        flag: 0
      });
      this.countTime();
    } 
  },

  //倒计时
  countTime: function () {
    var that = this;
    var inter = setInterval(function() {
      var count = that.data.second;
      count = count - 1;

      that.setData({
        second: count
      });

      if(count == 0) {
        that.setData({
          second: 60,
          flag: 1
        });
        clearInterval(inter);
      }
    }, 1000)
  },
  
  // 登陆
  toIndex: function() {
    console.log(this.data.phone);
    console.log(this.data.code);
    if(this.data.phone == '') {
      wx.showModal({
        content: '请填写手机号码',
        confirmColor: '#fabd00',
        showCancel: false
      })
    }else if(this.data.code == null) {
      wx.showModal({
        content: '请填写验证码',
        confirmColor: '#fabd00',
        showCancel: false
      })
    }else {
      wx.setStorageSync('phone', this.data.phone);
      wx.redirectTo({
        url: '../index/index',
      })
    }
    
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