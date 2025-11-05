Page({
  data: {
    name: '',
    phone: '',
    city: '',
    message: '',
    selectedAreaCode: '+86',
    areaCodes: [
      { name: '+86', value: '+86' },
      { name: '+852', value: '+852' },
      { name: '+853', value: '+853' },
      { name: '+886', value: '+886' },
      { name: '+82', value: '+82' }
    ]
  },

  goToTarget() {
    wx.navigateTo({
      url: 'pages/brand/brand.js'
    })
  },


  onNameInput(e) {
    this.setData({ name: e.detail.value });
  },

  onPhoneInput(e) {
    this.setData({ phone: e.detail.value });
  },

  onCityInput(e) {
    this.setData({ city: e.detail.value });
  },

  onMessageInput(e) {
    this.setData({ message: e.detail.value });
  },

  onAreaCodeChange(e) {
    const selected = this.data.areaCodes[e.detail.value];
    this.setData({ selectedAreaCode: selected.value });
  },

  onSubmit() {
    wx.showToast({
      title: '电脑上不可以提交',
      icon: 'none'
    });
  }
});