import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Career from '../views/Career.vue'
import Certificate from '../views/Certificate.vue'
import Portpolio from '../views/Portpolio.vue'
import Linux from '../Certificate/Linux.vue'
import Network from '../Certificate/Network.vue'
import Drive from '../Certificate/Drive.vue'

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
    path: '/portpolio',
    name: 'portpolio',
    component: Portpolio
  },
  {
    path: '/certificate/linux',
    name: 'linux',
    component: Linux
  },
  {
    path: '/certificate/network',
    name: 'network',
    component: Network
  },
  {
    path: '/certificate/drive',
    name: 'drive',
    component: Drive
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
