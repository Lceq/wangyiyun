// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: "31.22114",
    longitude: "121.54409",
    markers: [{
      iconPath: "../static/dingwei.jpg",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 70,
      height: 70
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
          latitude: 113.324520,
          longitude: 23.91229
      }],
      color: "#000",
      width: 4,
      dottedLine: true
    }],
    // controls: [{
    //   id: 1,
    //   iconPath: '/resources/location.png',
    //   position: {
    //     left: 0,
    //     top: 300 - 50,
    //     width: 50,
    //     height: 50
    //   },
    //   clickable: true
    // }]
    controls: [{
        id: 1,
        iconPath: '../static/dingwei.jpg',
        position: {
          left: 320,
          top: 100 - 50,
          width: 20,
          height: 20
        },
        clickable: true
      },
      {
        id: 2,
        iconPath: '../static/dingwei.jpg',
        position: {
          left: 340,
          top: 100 - 50,
          width: 20,
          height: 20
        },
        clickable: true
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let _this = this 
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        console.log(res, 'res')
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        // var latitude = res.latitude
        // var longitude = res.longitude
        // var speed = res.speed
        // var accuracy = res.accuracy
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.mapCtx = wx.createMapContext('map')
    // this.getLocation =wx.getLocation()
    // let _this = this
    //  _this.mapCtx = wx.createMapContext('map')
    // console.log('onReady', this.getLocation )

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  clickTopOne() {
    console.log('跳转')
    wx.navigateBack({
      delta: 1
    })
  },
  getUserInfo() {

  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },

  getCenterLocation() {
    let _this = this
    _this.mapCtx.getCenterLocation({
      success: function(res) {
        console.log('221')
        console.log(res.longitude)
        console.log(res.latitude)
        _this.setData({
          markers: [{
            id: 1,
            iconPath: '/resources/location.png',
            latitude: res.latitude,
            longitude: res.longitude,
            width: 70,
            height: 70
          }]
        })
      }
    })
  }
})