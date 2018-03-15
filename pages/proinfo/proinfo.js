// pages/proinfo/proinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    series: -1,                    //系列编号
    istrue: false,
    styleCheck: '-1',              //规格
    hideModale: {},                //显示加入成功
    isShow: 'none',                //判断提示框显示标志
    showProPic: 'none',            //显示产品规格
    hideScroll: 0,
    oldPrice: 0.00,                //原价
    price: 0.00,                   //价格
    count: 1,                       //商品数量
    theSize: '',                   //商品规格
    picPath: '',                   //图片路径
    proInfo: {                     //产品详情
      "id": 1,
      "proName": "连接件",
      "size":[
        {
          "sizeValue": "19,20,20",
          "proOldPrice": 200.00,
          "proPrice": 160.00
        },
        {
          "sizeValue": "191,220,220",
          "proOldPrice": 1200.00,
          "proPrice": 260.00
        },
        {
          "sizeValue": "3,220,220",
          "proOldPrice": 300.00,
          "proPrice": 360.00
        },
        {
          "sizeValue": "4,220,220",
          "proOldPrice": 400.00,
          "proPrice": 460.00
        }
      ],
      "picPath": "../../images/pro-img2.jpg",
      "sizePicPath": "../../images/pic.jpg"
    }
  },


  //选择规格事件
  styleCheckChange: function(e) {
    
    this.setData({
      styleCheck: e.detail.value
    })
    console.log(e.detail.value);
  },

  //选择规格样式
  chooseSize: function(e) {
    var sizeIndex = e.currentTarget.dataset.index;
    var size = this.data.proInfo.size;
    //console.log(sizeIndex);
    for(var i = 0; i < size.length; i++) {
      if(sizeIndex == i) {
        this.setData({
          price: size[i].proPrice,
          oldPrice: size[i].proOldPrice,
          theSize: size[i].sizeValue
        })
      }
    }
    //console.log(this.data.price);
   // console.log(this.data.oldPrice);
  },

  //加数量
  add: function() {
    var count1 = this.data.count;
    count1++;
    this.setData({
      count: count1
    })
  },

  //减数量
  minus: function() {
    var count2 = this.data.count;
    if (count2 == 1) {
      return ;
    }else {
      count2--;
    }
    this.setData({
      count: count2
    })
  },

  //限制输入数量
  changeInput: function(e) {
    if(e.detail.value == 0 || e.detail.value == '') {
      this.setData({
        count: 1
      })
    }else {
      this.setData({
        count: parseInt(e.detail.value)
      })
      //console.log(parseInt(e.detail.value));
      //console.log(this.data.count);
    }
  },

  //显示产品规格
  showPic: function() {
    this.setData({
      showProPic: 'block',
      hideScroll: 1
    })
  },

  //关闭产品规格
  closePic: function() {
    this.setData({
      showProPic: 'none',
      hideScroll: 0
    })
  },

  //返回系列
  returnIndex: function() {
    wx.redirectTo({
      url: '../index/index',
    })
  },

  //返回列表
  returnProList: function() {
    var series = this.data.series;

    wx.redirectTo({
      url: '../prolist/prolist?series='+series,
    })
  },

  //添加购物车
  addCar: function() {
    var that = this;
    var name = this.data.proInfo.proName;
    var theSize = this.data.theSize;
    var count = this.data.count;
    var price = this.data.price;
    var oldPrice = this.data.oldPrice;
    var picPath = this.data.picPath;
    var size = [];
    var ifCheckBtn = 1;
    var ifCheckAllBtn = 1;
    var carArry2 = getApp().globalData.carArry;
    var flag = 0;
    var flag2 = 0;

    var obj2 = { ifCheckBtn: ifCheckBtn, theSize: theSize, count: count, price: price, oldPrice: oldPrice };
    var obj = { ifCheckAllBtn: ifCheckAllBtn, name: name, size: [obj2], picPath: picPath };

    

    if(carArry2 != '') {
      for(var i = 0; i < carArry2.length; i++) {
        if(name == carArry2[i].name) {
          for(var j = 0; j < carArry2[i].size.length; j++) {
            if(theSize == carArry2[i].size[j].theSize) {
              carArry2[i].size[j].count++;
              break;
            }else {
              flag2++;
            }
          }

          if(flag2 == carArry2[i].size.length) {
            carArry2[i].size.push(obj2);
          }
        }else {
          flag++;
        }
      }

      if(flag == carArry2.length) {
        carArry2.push(obj);
        getApp().globalData.carArry = carArry2;
      }
      console.log(getApp().globalData.carArry);
    }else {
      var carArry1 = [];
      carArry1.push(obj);

      getApp().globalData.carArry = carArry1;
      console.log(getApp().globalData.carArry);
    }

    


    var animation = wx.createAnimation({
      duration: 1500,
      delay: 1000
    });

    this.animation = animation;

    animation.opacity(0).step();

    this.setData({
      isShow: 'block',
      istrue: true
    });

    setTimeout(function() {
      that.setData({
        hideModale: animation.export()
      })
    }, 100);

    setTimeout(function () {
      that.setData({
        isShow: 'none',
        istrue: false
      })
    }, 2600)

  },

  //跳转到购物车
  toShopping: function() {
    var carArry = getApp().globalData.carArry;

    if(carArry == '') {
      wx.showModal({
        title: '购物车为空',
        content: '请先将商品添加到购物车再下单',
        showCancel: false,
        confirmColor: '#fabd00',
      })
    }else {
      wx.navigateTo({
        url: '../shoppingcar/shoppingcar',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var size = this.data.proInfo.size;

    this.setData({
      picPath: this.data.proInfo.picPath,
      price: size[0].proPrice,
      oldPrice: size[0].proOldPrice,
      theSize: size[0].sizeValue,
      styleCheck: size[0].sizeValue,
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