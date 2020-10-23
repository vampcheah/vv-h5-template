// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/views/locales/i18n.js'

// 设置 js中可以访问 $cdn
import { $cdn, $setting } from '@/base/config'
Vue.prototype.$cdn = $cdn
Vue.prototype.$setting = $setting

// 全局引入插件
import '@/base/extensions'
// 引入全局样式
// import '@/assets/css/index.scss'
// 移动端适配
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  created() {}, // 没渲染html之前的一些基础设定
  mounted() { // html开始渲染时进行配置，例如监听
    this.$store.commit('releases/versionShow')
    this.$store.commit('ua/get')
    this.$store.dispatch('theme/load')
    this.$store.dispatch('user/load')
  },
  render: h => h(App)
})
