// pages/w-index/w-index.js
// url: "http://localhost:3000/captcha/sent?phone=13037568259",
var bsurl = require('../../utils/bsurl.js');
Page({
  data: {
    imgs: [{
        id: 1,
        url: '/static/banner1.jpg'
      },
      {
        id: 2,
        url: '/static/banner2.jpg'
      },
      {
        id: 3,
        url: '/static/banner3.jpg'
      },
      {
        id: 4,
        url: '/static/banner4.jpg'
      },
    ],
    autoplay: true,
    interval: 2000,
    duration: 500,
    status: 0,
    recommend: [],
    mv: [],
    radio: [],
    newsong: [],
    playlists: [],
    showCate: true,
    catlist: {
      res: {},
      checked: {}
    },
    thisday: (new Date()).getDate()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getRecommend()
    this.getMv()
    this.getRadio()
    this.getNewsong()
   
  },
  // 获取推荐歌单
  getRecommend() {
    let _this = this
    wx.request({
      url: bsurl + "personalized",
      success: (res) => {
        _this.setData({
          recommend: res.data.result
        })
      }
    })
  },
  // 获取推荐mv
  getMv() {
    let _this = this
    wx.request({
      url: bsurl + "personalized/mv",
      success: (res) => {

        _this.setData({
          mv: res.data.result
        })
      }
    })
  },
  // 获取主播电台
  getRadio() {
    let _this = this
    wx.request({
      url: bsurl + "personalized/djprogram",
      success: (res) => {
        _this.setData({
          radio: res.data.result
        })
      },
    })
  },
  // 获取最新音乐 
  getNewsong() {
    let _this = this
    wx.request({
      url: bsurl + "personalized/newsong",
      success: (res) => {
        _this.setData({
          newsong: res.data.result
        })
      },
    })
  },
  // 导航
  changeStatus(e) {
    let _this = this
    var statusTypeId = e.currentTarget.dataset.id;
    _this.setData({
      status: statusTypeId
    })  
    if (statusTypeId == 1) {
      var myDate = new Date();
      this.getPlaylist()
      console.log((new Date()).getDate(),'data')
      
    } else if (statusTypeId == 2) {

    } else if (statusTypeId == 3) {
      console.log(statusTypeId)
    }
  },
  cateNav() {
    let _this = this
    _this.setData({
      showCate: false
    })
    wx.request({
      url: bsurl + 'playlist/catlist',
      success: (res) => {
          console.log(res.data, 'catlist')
        _this.setData({
          catlist:{
            res: res.data,
            checked: res.data.all
          }
        })
      }
    })
  },
  hideCate() {
    let _this = this
    _this.setData({
      showCate: true
    })
  },
  cateselect(e){
    

  },
  getPlaylist(){
    let _this = this
    wx.request({
      url: bsurl + 'top/playlist',
      success: (res) => {
        console.log(res)
        _this.setData({
          playlists: res.data.playlists
        })
      }
    })
  }
})