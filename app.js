/**
 * ​	1）生命周期函数 （自动创建的--使用的时候直接在函数里面写）
    ​	2）错误监听等函数
    ​	3）小程序的全局变量 globalData:{} 
    ​	4）自定义函数 
 */

App({
  // 全局数据
  globalData:{
    userInfo:{
      name:'zs'
    }
  },
  // 自定方法
  test(){
    console.log('自定义方法');
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('onLaunch（全局只触发一次）');
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('onShow');
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('onHide');
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  
})
