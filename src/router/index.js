import Vue from 'vue';
import VueRouter from 'vue-router';


import inventory from '../views/Inventory.vue'
import shop from  "@/views/Shop.vue";
import MyEditInventoryCard from "@/components/MyEditInventoryCard.vue"



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    
  },
  {
    path: '/inventory',
    name: 'inventory',
    component: inventory
  },
  {
    path: '/shop',
    name:'shop',
    component: shop
  },
  {
    path: '/inventory/:id',
    name: 'EditProduct',
    component: MyEditInventoryCard,
    props: true,
  }
  
 

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
