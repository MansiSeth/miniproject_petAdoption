<template>
<div>
   <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" rel="stylesheet">
  <my-navbar></my-navbar>
 <router-view></router-view>
  
  <my-footer></my-footer>

</div>
</template>

<script>

import MyFooter from './components/MyFooter.vue';
import MyNavbar from './components/MyNavbar.vue';
import productCard from './components/MyProductCard.vue';






export default {
  name: 'App',

  components: {productCard, MyNavbar, MyFooter},

  data: () => ({
    //
  }),
};
</script>
<style>
div{
  font-family: 'Inter', sans-serif;
}
</style>



