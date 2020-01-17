// Pages/playlist/playlist.js
var bsurl = require('../../utils/bsurl.js');
Page({
  data: {
      playList:[],
      data:{}
  },
  onLoad: function (options) {
    let _this= this
    wx.request({
      url: bsurl + 'playlist/detail',
      data :{
        id: options.pid
      },
      success:(res)=>{
        console.log(res)
        _this.setData({
          playList: res.data.playlist.tracks,
          data: res.data.playlist
        })
      }
    })
  },
})