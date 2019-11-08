const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    list: [
      {
        name: '消息中心',
        icon: '../../images/xxzx.png',
        url: ''
      },
      {
        name: '我赞过的',
        icon: '../../images/wdz.png',
        url: ''
      },
      {
        name: '收藏集',
        icon: '../../images/dianzan.png',
        url: ''
      },
      {
        name: '阅读过的文章',
        icon: '../../images/dingdan.png',
        url: ''
      }
    ],
    list2: [
      {
        name: '夜间模式',
        icon: '../../images/yjms.png',
        url: ''
      },
      {
        name: '意见反馈',
        icon: '../../images/yjfk.png',
        url: ''
      },
      {
        name: '设置',
        icon: '../../images/shezhi.png',
        url: ''
      }
    ]
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
