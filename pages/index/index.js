//index.js
//获取应用实例
const app = getApp()

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
    duration: 500
  },
  onReady: function() {
  
  },
  onLoad: function() {

  }
})