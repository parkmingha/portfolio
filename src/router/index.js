import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Career from '../views/Career.vue'
import Certificate from '../views/Certificate.vue'
import Portfolio from '../views/Portfolio.vue'
import Aboutme from '../views/Aboutme.vue'
import Education from '../views/Education.vue'
import Awards from '../views/Awards.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/career',
    name: 'career',
    component: Career
  },
  {
    path: '/certificate',
    name: 'certificate',
    component: Certificate
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/aboutme',
    name: 'aboutme',
    component: Aboutme
  },
  {
    path: '/education',
    name: 'education',
    component: Education
  },
  {
    path: '/awards',
    name: 'awards',
    component: Awards
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
