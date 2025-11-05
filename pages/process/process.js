// process/process.js
Page({

  onSubmit() {
    wx.showToast({
      title: '电脑上不可以提交',
      icon: 'none'
    });
  }
})