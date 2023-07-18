import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
  }, {
    path: "/CustomerToBeServed",
    name: "CustomerToBeServed",
    component: () => import(/* webpackChunkName:"CustomerToBeServed"*/ '../views/CustomerToBeServed/index')
  }, {
    path: "/Userlnformation",
    name: "UserInformation",
    component: () => import(/* webpackChunkName:"UserInformation"*/ '../views/UserInformation/index')
  }, {
    path: "/PrescriptionManagement",
    name: "PrescriptionManagement",
    component: () => import(/* webpackChunkName:"PrescriptionManagement"*/ '../views/PrescriptionManagement/index')
  }, {
    path: "/MyAccount",
    name: "MyAccount",
    component: () => import(/* webpackChunkName:"MyAccount"*/ '../views/MyAccount/index')
  },
   {
    path: "/PhysicianManagement",
    name: "PhysicianManagement",
    component: () => import(/* webpackChunkName:"PhysicianManagement"*/ '../views/PhysicianManagement/index')
  },
  {
    path: "/DutyManagement",
    name: "DutyManagement",
    component: () => import(/* webpackChunkName:"DutyManagement"*/ '../views/DutyManagement/index')
  }, {
    path: "/VideoManagement",
    name: "VideoManagement",
    component: () => import(/* webpackChunkName:"VideoManagement"*/ '../views/VideoManagement/index')
  }, {
    path: "/Back",
    name: "Back",
    component:()=>import('../views/Back/index')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
