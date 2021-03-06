import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: require('@/views/chat/index').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
