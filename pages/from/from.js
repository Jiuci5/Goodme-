Page({
  data: {
    currentPage: 1,
    totalPages: 2
  },
  
  onLoad: function(options) {
    if (options.page) {
      this.setData({
        currentPage: parseInt(options.page)
      });
    }
  },
  
  navigateBack: function() {
    wx.navigateBack();
  },
  
  switchPage: function(e) {
    const direction = e.currentTarget.dataset.direction;
    let newPage = this.data.currentPage;
    
    if (direction === 'prev' && this.data.currentPage > 1) {
      newPage = this.data.currentPage - 1;
    } else if (direction === 'next' && this.data.currentPage < this.data.totalPages) {
      newPage = this.data.currentPage + 1;
    }
    
    if (newPage !== this.data.currentPage) {
      this.setData({
        currentPage: newPage
      });
    }
  }
});