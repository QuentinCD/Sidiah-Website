import Vue from 'vue'
import Router from 'vue-router'
import stream from './views/Stream.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'stream',
      component: stream
    },
    {
      path: '*',
      component: stream
    }

  ]
})
