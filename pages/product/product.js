// pages/product/product.js
Page({
  data: {
    message: ''
  },
  onSubmit() {
    wx.showToast({
      title: '电脑上不可以提交',
      icon: 'none'
    });
  }
})