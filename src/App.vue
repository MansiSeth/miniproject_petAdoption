<template>
<div>
  <my-navbar></my-navbar>
  <router-view></router-view> 
  <my-footer></my-footer>

</div>
</template>

<script>
import Carousel from './components/Carousel.vue';
import MyFooter from './components/MyFooter.vue';
import MyNavbar from './components/MyNavbar.vue';
import productCard from './components/MyProductCard.vue';
import FindaCuddleBuddy from './components/FindaCuddleBuddy.vue';
import FindaHomeforMunchkin from './components/FindaHomeforMunchkin.vue';





export default {
  name: 'App',

  components: {productCard, MyNavbar, MyFooter, FindaCuddleBuddy, FindaHomeforMunchkin},

  data: () => ({
    //
  }),
};
</script>


