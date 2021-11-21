import Vue from 'vue'
import Router from 'vue-router'
import Registration from '@/components/Registration'
import Court from '@/components/Court'
import User from '@/components/User'
import Schedule from '@/components/Schedule'
import CourtMap from '@/components/CourtMap'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Registration',
    //   component: Registration
    // },
    {
      path: '/',
      name: 'CourtMap',
      component: CourtMap
    },
    {
      path: '/courts',
      name: 'Court',
      component: Court
    },
    {
      path: '/users',
      name: 'User',
      component: User
    },
    {
      path: '/schedules',
      name: 'Schedule',
      component: Schedule
    }
  ]
})
