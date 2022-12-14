// pages/index/plugin/piano/piano.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        name: '这里是标题，点击可展开',
        content: ['内容一', '内容二'],
        checked: false
      },
      {
        name: '这里是第二个标题，点击展开',
        content: ['内容一', '内容二'],
        checked: false
      },
      {
        name: '这里是第三个标题，点击展开',
        content: ['内容一', '内容二'],
        checked: false
      },
    ],
    value: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  },

  // 点击列表,收缩与展示
  click(event) {
    const index = event.currentTarget.dataset.index;
    const {
      list
    } = this.data;
    if (list[index].checked == true) {
      list[index].checked = false
    } else {
      list[index].checked = true
    }
    this.setData({
      list
    });
  },
  checkboxChange(e) {
    this.setData({
      value: !this.data.value
    })
  },
})