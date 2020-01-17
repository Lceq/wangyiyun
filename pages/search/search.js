var bsurl = require('../../utils/bsurl.js');
Page({
  data: {
    value: '',
    tabs: true,
    record: []
  },
  inputext(e) {
    // console.log(e.detail.value, 'value')
    let _this = this
    _this.setData({
      value: e.detail.value
    })
  },
  clear_kw() {
    let _this = this
    _this.setData({
      value: "",
      tabs: true
    })
    console.log(_this.data.value, 'value')
  },
  searhFinput(e) {
    let _this = this
    let keywords = e.detail.value.name
    let recent = _this.data.record
    recent.unshift(keywords)
    console.log(recent, 'keywords')
    if (keywords != "") {
      this.search(keywords)

      _this.setData({
        tabs: false,
        record: recent
      })

    }
  },
  searchRecord(e) {
    let _this =this
    let data = e.currentTarget.dataset.value
    this.search(data)
    _this.setData({
      tabs: false,
    
    })
  },
  //删除搜索历史
  delRecord(e) {
    var index = e.currentTarget.dataset.index;
    this.data.record.splice(index, 1);
    this.setData({
      record: this.data.record
    })
  },
  search(keywords) {
    wx.request({
      url: bsurl + 'search',
      data: {
        keywords: keywords
      },
      success: (res) => {
        console.log(res, '搜索成功')
      }
    })
  }
})