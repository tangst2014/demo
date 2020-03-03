// miniprogram/pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    workIndex:0,
    worked: [
      {
        title: '前期准备',
        time: '2020年4月5号',
        values:
          [
            { name: '现场勘查', value: '1' },
            { name: '现场勘查', value: '2', checked: 'true' },
            { name: '现场勘查', value: '3' },
            { name: '现场勘查', value: '4', checked: 'true' },
          ]
      },
      {
        title: '前期准备2',
        time: '2020年5月6号',
        values:
          [
            { name: '现场勘查2', value: '1', checked: 'true'},
            { name: '现场勘查2', value: '2' },
            { name: '现场勘查2', value: '3' },
            { name: '现场勘查2', value: '4', checked: 'true' },
          ]
      }
    ],
    hidden: false
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  checkboxChange: function (e) {
    var index = e.currentTarget.dataset.index
    var checked = e.detail.value
    
    var changed = {}
    for (var i = 0; i < this.data.worked[index].values.length; i++) {
      var temp = this.data.worked[index].values[' + i + ']

      console.log('values', this.data.worked[index].values, checked.indexOf(this.data.worked[index]), temp)
      if (checked.indexOf(this.data.worked[index].values) !== -1) {
        changed[temp.checked] = true
      } else {
        changed[temp.checked] = false
      }
    }
    this.setData(changed)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})