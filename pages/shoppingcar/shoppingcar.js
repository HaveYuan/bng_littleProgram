// pages/shoppingcar/shoppingcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectAllFlag: 1,                     //全选标志,0为未全选,1为全选
    //购物车
    carArry: [
      // { 
      //   "ifCheckAllBtn": 1,
      //   "name": "连接件",
      //   "size":[
      //     {
      //       "ifCheckBtn": 1,
      //       "theSize": "219,19.22,20",
      //       "count": 1,
      //       "price": 160.00,
      //       "oldPrice": 200.00,
      //     },
      //     {
      //       "ifCheckBtn": 1,
      //       "theSize": "429,19.22,20",
      //       "count": 2,
      //       "price": 160.00,
      //       "oldPrice": 200.00,
      //     },
      //   ],
      // },
      // {
      //   "ifCheckAllBtn": 1,
      //   "name": "连接件2",
      //   "size": [
      //     {
      //       "ifCheckBtn": 1,
      //       "theSize": "319,19.22,20",
      //       "count": 1,
      //       "price": 160.56,
      //       "oldPrice": 200.00,
      //     },
      //     {
      //       "ifCheckBtn": 1,
      //       "theSize": "219,19.22,20",
      //       "count": 2,
      //       "price": 160.00,
      //       "oldPrice": 200.00,
      //     },
      //   ],
      // },
    ],
    discount: 0.00,              //会员优惠
    totalOldMoney: 0.00,            //总金额
    shouldPay: 0.00 ,            //应付金额
    person: "",               //收货人姓名
    phone: "",          //电话
    region: [],                    //省市区
    clearAddr: "",       //详细地址
    carArry2: []
    
  },

  //返回首页
  returnIndex: function() {
    wx.redirectTo({
      url: '../index/index'
    })
  },

  //添加数量
  add:function(e) {
    var carArry1 = [];
    var parentIndex = e.currentTarget.dataset.parentindex;
    var index = e.currentTarget.dataset.itemIndex;

    for (var i = 0; i < this.data.carArry.length; i++) {
      if(parentIndex == i) {
        for (var j = 0; j < this.data.carArry[i].size.length; j++) {
          if(index == j) {
            this.data.carArry[i].size[j].count++;
            carArry1.push(this.data.carArry[i]);
            //console.log(this.data.carArry[i].size[j].count);
          }
        }
      }else {
        carArry1.push(this.data.carArry[i]);
      }
    }
    //console.log(carArry1);
    this.setData({
      carArry: carArry1
    });

    this.payTotalMoney();
  },

  //减少数量
  minus: function(e) {
    var carArry2 = [];
    var parentIndex = e.currentTarget.dataset.parentindex;
    var index = e.currentTarget.dataset.itemIndex;

    for (var i = 0; i < this.data.carArry.length; i++) {
      if (parentIndex == i) {
        for (var j = 0; j < this.data.carArry[i].size.length; j++) {
          if (index == j) {
            if (this.data.carArry[i].size[j].count == 1) {
              return 
            }else {
              this.data.carArry[i].size[j].count--;
              carArry2.push(this.data.carArry[i]);
              //console.log(this.data.carArry[i].size[j].count);
            }
          }
        }
      } else {
        carArry2.push(this.data.carArry[i]);
      }
    }
    //console.log(carArry1);
    this.setData({
      carArry: carArry2
    });

    this.payTotalMoney();
  },

  //改变数量
  changeNum: function(e) {
    var carArry3 = [];
    var parentIndex = e.currentTarget.dataset.parentindex;
    var index = e.currentTarget.dataset.itemIndex;
    var num = e.detail.value;
    if(num == 0) {
      for (var i = 0; i < this.data.carArry.length; i++) {
        if (parentIndex == i) {
          for (var j = 0; j < this.data.carArry[i].size.length; j++) {
            if (index == j) {
              this.data.carArry[i].size[j].count = 1;
              carArry3.push(this.data.carArry[i]);
            }
          }
        } else {
          carArry3.push(this.data.carArry[i]);
        }
      }
      this.setData({
        carArry: carArry3
      });
    }else {
      for (var i = 0; i < this.data.carArry.length; i++) {
        if (parentIndex == i) {
          for (var j = 0; j < this.data.carArry[i].size.length; j++) {
            if (index == j) {
              this.data.carArry[i].size[j].count = num;
              carArry3.push(this.data.carArry[i]);
            }
          }
        } else {
          carArry3.push(this.data.carArry[i]);
        }
      }
      this.setData({
        carArry: carArry3
      });
    }
    
    this.payTotalMoney();
  },

  //计算总价
  payTotalMoney: function() {
    var totalOldMoney = 0.00;          //原价
    var discount = 0.00;               //会员优惠价
    var shouldPay = 0.00;              //应付金额
    var carArry = this.data.carArry;

    for(var i=0; i<carArry.length; i++) {
      if (carArry[i].ifCheckAllBtn == 1) {
        for (var j = 0; j < carArry[i].size.length; j++) {
          if (carArry[i].size[j].ifCheckBtn == 1) {
            totalOldMoney += carArry[i].size[j].oldPrice * carArry[i].size[j].count;
            shouldPay += carArry[i].size[j].price * carArry[i].size[j].count;
          }
        }
      }else {
        for (var j = 0; j < carArry[i].size.length; j++) {
          if (carArry[i].size[j].ifCheckBtn == 1) {
            totalOldMoney += carArry[i].size[j].oldPrice * carArry[i].size[j].count;
            shouldPay += carArry[i].size[j].price * carArry[i].size[j].count;
          }
        }
      }
    }

    discount = totalOldMoney - shouldPay;
    //console.log(totalOldMoney);
    //console.log(shouldPay);
    //console.log(discount);

    this.setData({
      totalOldMoney: totalOldMoney.toFixed(2),
      discount: discount.toFixed(2),
      shouldPay: shouldPay.toFixed(2)
    })
  },

  //提交订单
  subOrder: function() {
    if(this.data.shouldPay <= 0) {
      console.log("还未选择任何商品");
    }else {
      if(this.data.phone == '') {
        wx.showModal({
          content: '请填写收货地址',
          confirmColor: '#fabd00',
          success: function (c) {
            if (c.confirm) {
              wx.navigateTo({
                url: '../selectaddr/selectaddr',
              });
            }
          }
        })
      }else {
        var carArry = [];
        getApp().globalData.carArry = carArry;

        wx.redirectTo({
          url: '../myorder/myorder',
        })
        
        console.log("提交成功");
      }
      
    }
  },

  //单件选择
  ifCheck: function(e) {
    var index = e.currentTarget.dataset.itemIndex;
    var parentIndex = e.currentTarget.dataset.parentindex;
    var carArry = this.data.carArry;
    var carArry6 = [];
    var carArry7 = [];

    for(var i=0; i<carArry.length; i++) {
      if(parentIndex == i) {
        for (var j = 0; j < carArry[i].size.length; j++) {
          if (index == j) {
            if(carArry[i].size[j].ifCheckBtn == 1) {
              carArry[i].size[j].ifCheckBtn = 0;
              carArry[i].ifCheckAllBtn = 0;
              carArry6.push(carArry[i]);
            }else {
              carArry[i].size[j].ifCheckBtn = 1;

              carArry6.push(carArry[i]);
            }
          }
        }
      }else {
        carArry6.push(carArry[i]);
      }
    }

    for(var k = 0; k < carArry6.length; k++) {
      var checkFlag = 0;

      for(var l = 0; l < carArry6[k].size.length; l++) {
        if(carArry6[k].size[l].ifCheckBtn == 1) {
          checkFlag++;
        }
      }

      if(checkFlag == carArry6[k].size.length) {
        carArry[k].ifCheckAllBtn = 1;
        carArry7.push(carArry[k]);
      }else {
        carArry7.push(carArry[k]);
      }
    }


    this.setData({
      carArry: carArry7
    })

    this.bottomCheck();
    this.payTotalMoney();
  },

  //单件全选
  ifCheckAll: function(e) {
    var parentIndex = e.currentTarget.dataset.parentindex;
    var carArry = this.data.carArry;
    var carArry5 = [];

    for(var i=0; i<carArry.length; i++) {
      if(parentIndex == i) {
        if (carArry[i].ifCheckAllBtn == 1) {
          carArry[i].ifCheckAllBtn = 0;
          for (var j = 0; j < carArry[i].size.length; j++) {
            carArry[i].size[j].ifCheckBtn = 0;
          }
          carArry5.push(carArry[i]);
        } else {
          carArry[i].ifCheckAllBtn = 1;
          for (var j = 0; j < carArry[i].size.length; j++) {
            carArry[i].size[j].ifCheckBtn = 1;
          }
          carArry5.push(carArry[i]);
        }
      }else {
        carArry5.push(carArry[i]);
      }     
    }

    this.setData({
      carArry: carArry5
    })

    this.bottomCheck();
    this.payTotalMoney();
  },

  //所有全选
  selectAll: function() {
    var carArry4 = [];
    var carArry = this.data.carArry;
    if(this.data.selectAllFlag == 0) {
      for(var i=0; i < carArry.length; i++) {
        for (var j = 0; j < carArry[i].size.length; j++) {
          carArry[i].ifCheckAllBtn = 1;
          carArry[i].size[j].ifCheckBtn = 1;
        }
        carArry4.push(carArry[i]);
      }

      this.setData({
         carArry: carArry4,
         selectAllFlag: 1
      });

      this.payTotalMoney();
    }else {
      for (var i = 0; i < carArry.length; i++) {
        for (var j = 0; j < carArry[i].size.length; j++) {
          carArry[i].ifCheckAllBtn = 0;
          carArry[i].size[j].ifCheckBtn = 0;
        }
        carArry4.push(carArry[i]);
      }

      this.setData({
        carArry: carArry4,
        selectAllFlag: 0
      })

      this.payTotalMoney();
    }
  },

  //根据单件的选择来判断底部是否全选
  bottomCheck: function() {
    var carArry = this.data.carArry;
    var flag = 0;
    for(var i=0; i<carArry.length; i++) {
      if(carArry[i].ifCheckAllBtn == 1) {
        flag++;
      }
    }

    if(flag == carArry.length) {
      this.setData({
        selectAllFlag: 1
      })
    }else {
      this.setData({
        selectAllFlag: 0
      })
    }
  },

  //跳转到地址选择
  selectAddr: function() {
    wx.navigateTo({
      url: '../selectaddr/selectaddr',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      carArry: getApp().globalData.carArry
    });

    this.payTotalMoney();
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