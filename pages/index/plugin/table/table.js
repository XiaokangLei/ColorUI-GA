// pages/index/plugin/table/table.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header: [{
      name: '序号',
      score: '题目',
    }],
    score: [{
        name: "重庆大学",
        address: '重庆市',
        tag: [985, 211],
        detail: [{
            year: 2019,
            top_rank: 3499,
            low_rank: 3579,
            avg_rank: 3895
          },
          {
            year: 2018,
            top_rank: 3499,
            low_rank: 3579,
            avg_rank: 3895
          }
        ]
      },
      {
        name: "四川大学",
        address: '成都市',
        tag: [985, 211],
        detail: [{
            year: 2019,
            top_rank: 3499,
            low_rank: 3579,
            avg_rank: 3895
          },
          {
            year: 2018,
            top_rank: 3499,
            low_rank: 3579,
            avg_rank: 3895
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let list = [];
    for (let i = 1; i <= 12; i++) {
      let obj = {
        number: '分数',
        score: i
      }
      list.push(obj)
    }
    this.setData({
      list
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})