<template>
  <div class="home">
    <navbar/>

    <searchbar-vue/>
    
    <productCard :product="product" />

    
  </div>
</template>

<script>

import productCard from './components/productCard.vue';
import navbar from './components/navbar.vue';
import searchbarVue from './components/searchBar.vue';


export default {
  name: 'HomeView',
  components: {
    productCard,
    navbar,
    searchbarVue
  },

data() {
    return {
      product: {
        name: "Example Product",
        description: "This is an example product description.",
        image: "https://via.placeholder.com/300x200",
        price: "$9.99"
      }
    };
  }
};
</script>
