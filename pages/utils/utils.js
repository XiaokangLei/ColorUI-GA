/**
 * 页面跳转
 * @param {} e 
 */
function jumpTo(e) {
  return wx.navigateTo({
    url: e.currentTarget.dataset.page
  })
}