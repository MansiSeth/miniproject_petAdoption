import Vue from 'vue';
import VueRouter from 'vue-router';

import home from '../views/home.vue';
import inventory from '../views/inventory.vue';
import shop from  "@/views/Shop.vue";
import MyEditInventoryCard from "@/components/MyEditInventoryCard.vue";
import FindaCuddleBuddy from '@/components/FindaCuddleBuddy.vue';
import FindaHomeforMunchkin from '@/components/FindaHomeforMunchkin.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
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
