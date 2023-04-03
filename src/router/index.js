import Vue from 'vue';
import VueRouter from 'vue-router';


import inventory from '../views/Inventory.vue'
import shop from  "@/views/Shop.vue";
import MyEditInventoryCard from "@/views/EditInventory.vue";




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    
  },
  {
    path: '/inventory',
    name: 'inventory',
    component: ()=>import('../views/Inventory.vue')
  },
  {
    path: '/shop',
    name:'shop',
    component: ()=>import('@/views/Shop.vue')
  },
  {
    path: '/inventory/:id',
    name: 'EditInventory',
    component: ()=>import('@/views/EditInventory.vue'),
    props: true,
  },
  
  
 

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
