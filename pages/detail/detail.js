Page({
  data: {
    article: null, 
    articles: [], // 所有文章数据
    currentIndex: 0 // 当前显示的文章索引
  },
  
  onLoad(options) {
    const { id } = options;
    // 获取所有文章数据
    const articles = getApp().globalData.articles;
    // 找到当前文章的索引
    const index = articles.findIndex(item => item.id === id);
  
    this.setData({
      article: articles[index],
      articles: articles,
      currentIndex: index
    });
  },
  
  swiperChange(e) {
    const newIndex = e.detail.current
    this.setData({
      currentIndex: newIndex,
      article: this.data.articles[newIndex]
    })
  }
});