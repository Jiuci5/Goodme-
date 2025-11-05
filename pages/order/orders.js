Page({
  data: {
    currentTab: '全部',
    orders: [
      {
        orderNo: '20171024',
        status: '进行中',
        title: '小程序服务（示例数据）',
        desc: '专业提供微信小程序管理、设计服务',
        currentPrice: '0.1',
        originalPrice: '4'
      },
      {
        orderNo: '20171025',
        status: '已完成',
        title: '小程序服务（示例数据）',
        desc: '专业提供微信小程序管理、设计服务',
        currentPrice: '0.1',
        originalPrice: '4'
      },
      {
        orderNo: '20171026',
        status: '已取消',
        title: '小程序服务（示例数据）',
        desc: '专业提供微信小程序管理、设计服务',
        currentPrice: '0.1',
        originalPrice: '4'
      },
      {
        orderNo: '20171027',
        status: '待支付',
        title: '小程序服务（示例数据）',
        desc: '专业提供微信小程序管理、设计服务',
        currentPrice: '0.1',
        originalPrice: '4'
      }
    ],
    filteredOrders: []
  },
  
  onLoad: function(options) {
    if (options.status) {
      this.setData({
        currentTab: options.status
      });
    }
    this.filterOrders();
  },
  
  navigateBack: function() {
    wx.navigateBack();
  },
  
  switchTab: function(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      currentTab: tab
    }, () => {
      this.filterOrders();
    });
  },
  
  filterOrders: function() {
    const { currentTab, orders } = this.data;
    if (currentTab === '全部') {
      this.setData({
        filteredOrders: orders
      });
    } else {
      this.setData({
        filteredOrders: orders.filter(item => item.status === currentTab)
      });
    }
  }
});