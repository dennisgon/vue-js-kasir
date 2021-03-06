import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login.vue'
import Menu from '../views/menu.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    }

  ]
})
