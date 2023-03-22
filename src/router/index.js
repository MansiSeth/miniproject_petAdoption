import Vue from 'vue';
import VueRouter from 'vue-router';
import componentButton from "@/components/componentButton.vue";
// import productCard from "@/components/MyProductCard.vue";
import Shop from  "@/views/Shop.vue";



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/shop',
    name:'shop',
    component: Shop
  },
  {
    path: '/tester',
    component: componentButton
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
