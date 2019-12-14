import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import GameInfo from './views/GameInfo.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Auth from './components/Auth.vue'
import RegisterSuccess from './views/RegisterSuccess.vue'
import LoginSuccess from './views/LoginSuccess.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/gameinfo/:id/:fecha/:local/:lugar/:visitante/:hora/:mapa',
      name: 'gameinfo',
      component: GameInfo
    },
    {
      path:'/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/success',
      name: 'RegisterSuccess',
      component: RegisterSuccess
    },
    {
      path: '/logsuccess',
      name: 'LoginSuccess',
      component: LoginSuccess
    }
  ]
})
