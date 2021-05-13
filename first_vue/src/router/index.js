import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import Main from '../components/Main'
import search from '../components/search'
import Make from '../components/Make'
import User from '../components/User'
import add from '../components/add'
import sport from '../components/sport'
import axios from 'axios'
Vue.use(axios)
Vue.prototype.$axios = axios
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/make',
      name: 'make',
      component: Make
    },
    {
      path: '/User',
      name: 'user',
      component: User
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/sport',
      name: 'sport',
      component: sport,
      meta: {
        keepAlive: true
      }
    }
  ]
})
