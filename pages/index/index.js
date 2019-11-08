const WXAPI = require('../../wxapi/classification.js')

Page({
  data: {
    active: 1,
    navList: [
      {
        id: 1,
        name: '关注',
      },
      {
        id: 3,
        name: '推荐',
      },
      {
        id: 4,
        name: '热榜',
      },
      {
        id: 5,
        name: '前端',
      }
    ],
    articles: []
  },
  onLoad() {
    WXAPI.getArticles({}).then(res => {
      this.setData({ articles: res.result })
    })
  },
  toSearch() {
    wx.navigateTo({
      url: '../search/search',
      success: result => {},
      fail: e => {
        console.log(e)
      },
      complete: () => {}
    })
  }
})
