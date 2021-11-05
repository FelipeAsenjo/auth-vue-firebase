import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

import { firebase } from '../config/firebase'
import { getAuth } from 'firebase/auth'

const auth = getAuth( firebase )

const routes = [
  {
    path: '/(*)*',
    redirect: '/login'
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      login: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(( to, from, next ) => {
  let user = auth.currentUser 
  let authRequired = to.matched.some( route => route.meta.login )

  if( !user && authRequired ) {
    next('login')
  } else if ( user && !authRequired ) {
    next('home')
  } else {
    next()
  }
})

export default router
