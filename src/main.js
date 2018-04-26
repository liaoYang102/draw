// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import './style/global.css'
import './config/wy_rem'
//引用动画库
import animate from 'animate.css'
Vue.use(animate)

// 滚动条插件
// import EasyScroll from 'easyscroll';
// Vue.use(EasyScroll);

import Velocity from 'velocity-animate'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
