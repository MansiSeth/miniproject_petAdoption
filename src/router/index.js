import Vue from 'vue';
import VueRouter from 'vue-router';


import inventory from '../views/inventory.vue'
import componentButton from "@/components/componentButton.vue";

import Shop from  "@/views/Shop.vue";



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    
  },
  {
    path: '/shop',
    name: 'shop',
    component: shop
  },
  {
    path: '/inventory',
    name: 'inventory',
    component: inventory
  }
  {
    path: '/shop',
    name:'shop',
    component: Shop
  },
 

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
