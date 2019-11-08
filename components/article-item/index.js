Component({
  properties: {
    data: Object
    },
  data: {
    show: false,
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
    Share () {
      this.setData({ show: true })
    },
    onClose() {
      this.setData({ show: false });
    },
  
    onSelect(event) {
      console.log(event.detail);
    }
  }
  })
  