import WXAPI from '../../wxapi/classification'
Page({
  data: {
    fromPath: '',
    detail: {},
    searchMessage: '',
    comment: '',
    buttomShow: false
  },
  onLoad(options) {
    this.getArticleDetail(options.id)
    this.setData({fromPath: options.fromPath})
  },
  getArticleDetail (id) {
    WXAPI.getArticleDetail({ id: id }).then(res => {
      this.setData({detail: res.result})
    })
  },
  linkBack () {
    wx.switchTab({
        url: this.data.fromPath
      })        
  },
  showComment () {
    this.setData({buttomShow: true})
  }
})
