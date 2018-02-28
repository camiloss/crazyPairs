import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home.vue'
import Callback from '@/components/pages/Callback'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

export default router
