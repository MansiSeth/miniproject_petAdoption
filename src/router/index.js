import Vue from 'vue';
import VueRouter from 'vue-router';

import home from '../views/home.vue';
import inventory from '../views/Inventory.vue'
import shop from  "@/views/Shop.vue";
import MyEditInventoryCard from "@/views/EditInventory.vue";

import Cart from '../views/Cart.vue'
import Donate from '../views/Donate.vue'


import FindaCuddleBuddy from '@/components/FindaCuddleBuddy.vue';
import FindaHomeforMunchkin from '@/components/FindaHomeforMunchkin.vue';




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
    
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>import("../views/Login.vue")
    
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () =>import("../views/SignUp.vue")
    
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
    name: 'EditInventory',
    component: MyEditInventoryCard,
    props: true,
  },
  {
    path: '/cart',
    name : "Cart",
    component: Cart,
    props: { CartItems: [] } // add props here

  },
  {
    path: '/donate',
    name : "Donate",
    component: Donate,

  },
  {
    path:'/findacuddlebuddy',
    name : 'FindaCuddleBuddy',
    component: FindaCuddleBuddy,
    props:true,
  },
  {
    path:'/findahomeformunchkin',
    name : 'FindaHomeforMunchkin',
    component: FindaHomeforMunchkin,
    props:true
  }
  
 

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
