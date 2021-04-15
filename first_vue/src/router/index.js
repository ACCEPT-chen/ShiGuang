import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import Main from '../components/Main'
import search from '../components/search'
import Make from '../components/Make'
import User from '../components/User'
import add from '../components/add'
import sport from '../components/sport'

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
      component: Main
    },
    {
      path: '/search',
      name: 'search',
      component: search
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
      component: sport
    }
  ]
})
