import Vue from 'vue';
import VueRouter from 'vue-router';

import shop from '../views/shop.vue'
import inventory from '../views/inventory.vue'



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
  },
 

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
