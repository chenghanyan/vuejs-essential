// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vue.js的默认值
import Vue from 'vue'
// 引入app.vue的默认值
import App from './App'
// 设置false以阻止vue在启动时生成生产的提示
Vue.config.productionTip = false

/* eslint-disable no-new */
// 创建一个新的vue实列
new Vue({
  el: '#app',
  components: { App },//是{App:App}的缩写
  template: '<App/>'
})
