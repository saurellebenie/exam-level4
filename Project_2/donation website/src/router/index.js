import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signin from '../components/Auth/Signin.vue'
import Signup from '../components/Auth/Signup.vue'
import Donation from '../components/Pages/Donation.vue'
import Footer from '../components/Pages/Footer.vue'
import Header from '../components/Pages/Header.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:"/Signin",
      name:"",
      component: Signin
    },
    {
      path:"/Signup",
      name:"",
      component: Signup
    },
    {
      path:"/Donation",
      name:"",
      component: Donation
    },
    {
      path:"/Footer",
      name:"",
      component: Footer
    },
    {
      path:"/Header",
      name:"",
      component: Header
    }
  ],
  linkActiveClass: "active-color",
  linkExactActiveClass: "exact-active",
})


export default router
