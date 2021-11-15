import Vue from 'vue'
import Router from 'vue-router'
import Registration from '@/components/Registration'
import Court from '@/components/Court'
import User from '@/components/User'
import Schedule from '@/components/Schedule'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/Court',
      name: 'Court',
      component: Court
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/Schedule',
      name: 'Schedule',
      component: Schedule
    }
  ]
})
