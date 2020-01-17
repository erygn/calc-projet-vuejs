import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'
import Pret from '../views/Pret.vue'
import Operation from '../views/Operation.vue'
import Epargne from '../views/Epargne.vue'

import HomeTwo from '../views/HomeTwo'
import PretDetails from '../views/PretDetails'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/h',
    name: 'HomeTwo',
    component: HomeTwo
  },
  {
    path: '/epargne',
    name: 'Epargne',
    component: Epargne
  },
  {
    path: '/operation',
    name: 'Operation',
    component: Operation
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/pret',
    name: 'Pret',
    component: Pret
  },
  {
    path: '/pretdetails',
    name: 'PretDetails',
    component: PretDetails,
    props(route) {
      return route.query || {}
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import(/* webpackChunkName: "about" */ '../views/Help.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
