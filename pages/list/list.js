const WXAPI = require('../../wxapi/classification.js')
Page({
  data: {
    items: [],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 500,
    swiperLists: [
      {
        id: 0,
        url: 'http://pzpxyio9x.bkt.clouddn.com/blog-img1.jpg',
      },
      {
        id: 1,
        url: 'http://pzpxyio9x.bkt.clouddn.com/blog-img2.jpg',
      },
      {
        id: 2,
        url: 'http://pzpxyio9x.bkt.clouddn.com/blog-img3.jpg',
      }
    ],
    navLists: [
      {
        id: 0,
        icon: 'http://pzpxyio9x.bkt.clouddn.com/wz.png',
        name: '文章榜'
      },
      {
        id: 1,
        icon: 'http://pzpxyio9x.bkt.clouddn.com/zzb.png',
        name: '作者榜'
      },
      {
        id: 2,
        icon: 'http://pzpxyio9x.bkt.clouddn.com/kyk.png',
        name: '看一看'
      },
      {
        id: 3,
        icon: 'http://pzpxyio9x.bkt.clouddn.com/gc.png',
        name: '话题广场'
      },
      {
        id: 4,
        icon: 'http://pzpxyio9x.bkt.clouddn.com/hd.png',
        name: '活动'
      },
    ],
    articleLists: []
  },
  onLoad() {
    WXAPI.getArticles({}).then(res => {
      this.setData({ articleLists: res.result })
    })
  }
})
