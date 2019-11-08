import WXAPI from '../../wxapi/classification'
Page({
  data: {
    detail: {}
  },
  onLoad(options) {
    this.getArticleDetail(options.id)
  },
  getArticleDetail (id) {
    WXAPI.getArticleDetail({ id: id }).then(res => {
      this.setData({detail: res.result})
    })
  },
  linkBack() {
    wx.switchTab({
        url: '/pages/index/index'
      })        
}
})
