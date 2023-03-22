<template>
<div>
  

  <my-navbar></my-navbar>

  <router-view></router-view>
  
  

</div>
</template>

<script>

import MyNavbar from './components/MyNavbar.vue';






export default {
  name: 'HomeView',
  components: {
    productCard,
    navbar,
    searchbarVue
  },

  components: {MyNavbar},

  data: () => ({
    //
  }),
};
</script>
