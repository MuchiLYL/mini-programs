/**
 * 1）data界面视图的数据内容
    2）生命周期函数
    3）事件处理函数，比如下拉触发函数
    4）自定义函数
 */
const app=getApp();
console.log(app);
console.log(app.globalData.userInfo.name);
app.test();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'Hello~',
    activeStr:'active',
    flag:true,
    info: ['周一', '周二', '周三', '周四', '周五'],
    arr:[{id:1,children:['','','']},{id:2,children:['','','']}],
    flag:true,
    length:1,
    num:0,
    list:[{
      img:'图片1',
      info:'内容1'
    },{
      img:'图片2',
      info:'内容2'
    },{
      img:'图片3',
      info:'内容3'
    },{
      img:'图片4',
      info:'内容4'
    }]
  },
  // 父组件触发
  fatherTap(){
    console.log('fatherTap。。。。');
  },
  childTap(){
    console.log('childTap....');
  },
  // 事件传参
  tapParams(e){
      console.log(e.target.dataset);
  },
  changeFlag(){
    this.setData({
      flag:!this.data.flag
    })
  },
  // 点击高亮
  light(e){
    console.log(e.target.dataset.index);
    // 修改num
    this.setData({
      num:e.target.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('初次渲染完成');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('监听页面显示');
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