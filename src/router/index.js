import Vue from 'vue'
import Router from 'vue-router'
import draw from '@/router/modules/draw'

Vue.use(Router)
var all=draw;

export default new Router({
  routes: all
})