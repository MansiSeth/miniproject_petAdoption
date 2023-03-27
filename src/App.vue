<template>
<div>
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


