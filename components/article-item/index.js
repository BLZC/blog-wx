Component({
  properties: {
    data: Object
    },
  data: {
    show: false,
    activeColor: '',
    likesNumber: '120',
    actions: [
      {
        name: '选项'
      },
      {
        name: '选项'
      },
      {
        name: '选项',
        subname: '副文本',
        openType: 'share'
      }
    ]   
    },
  methods: {
    // 分享
    Share () {
      this.setData({ show: true })
    },
    // 点赞和取消点赞
    Like () {
      if (this.data.activeColor) {
        this.setData({ activeColor: '', likesNumber: this.data.likesNumber-1 })
      } else {
        this.setData({ activeColor: 'red', likesNumber: Number(this.data.likesNumber)+1})
      }
    },
    onClose() {
      this.setData({ show: false });
    },
  
    onSelect(event) {
      console.log(event.detail);
    }
  }
  })
  