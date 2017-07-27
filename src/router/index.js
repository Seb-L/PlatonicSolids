import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  mode: window.history && window.history.pushState ? 'history' : null,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
