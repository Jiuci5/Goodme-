Page({
  navigateToAllOrders: function() {
    wx.navigateTo({
      url: '/pages/order/orders'
    });
  },
  
  navigateToOrders: function(e) {
    const status = e.currentTarget.dataset.status;
    wx.navigateTo({
      url: `/pages/order/orders?status=${status}`
    });
  },
  navigateToNews: function() {
    wx.navigateTo({
      url: '/pages/news/news'
    });
  },
  
  navigateToSubscription: function() {
    wx.navigateTo({
      url: '/pages/sub/sub'
    });
  },
  
  navigateToForm: function() {
    wx.navigateTo({
      url: '/pages/from/from?page=1'
    });
  },
  
  showLogo:function(){
    wx.showToast({
      title:'在电脑上不支持退出',
      icon:'none',
      duration:2000
    })
  },
  showPhone:function(){
    wx.showToast({
      title:'在电脑上不支持打电话',
      icon:'none',
      duration:2000
    })
  }
});