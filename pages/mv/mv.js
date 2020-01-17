// Pages/mv/mv.js
var bsurl = require('../../utils/bsurl.js');
Page({
  data: {
    status: 0,
    mvId: '',
    comment: {},
    simi: []
  },
  onLoad: function(options) {
    console.log(options)
    this.setData({
      mvId: options.id
    })
  },
  changeStatus(e) {
    let _this = this
    var statusTypeId = e.currentTarget.dataset.id;
    _this.setData({
      status: statusTypeId
    })
    if (statusTypeId == 1) {
      wx.request({
        url: bsurl + 'comment/mv',
        data: {
          id: _this.data.mvId
        },
        success: (res) => {
          console.log(res)
          _this.setData({
            comment: res.data
          })
        }
      })
    } else if (statusTypeId == 2) {
      console.log(_this.data.mvId,'gf')
      wx.request({
        url: bsurl + 'simi/mv',
        data: {
          mvid: _this.data.mvId
        },
        success: (res) => {
        
          _this.setData({
            simi: res.data.mvs
          })
        }
      })

    } else if (statusTypeId == 3) {

    }
  },
})