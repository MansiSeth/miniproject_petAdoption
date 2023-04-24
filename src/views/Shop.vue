<template>
    <div>
     
      <div class="content">
        <div class="website-content-website-content">
          <span class="website-content-text">
            <span class="website-content-text1">
              Spoil your furry friend with
              <span v-html="rawpdwq"></span>
            </span>
            <span class="website-content-text2">Gifts of Love</span>
            <span>....and chicken</span>
          </span>
          <span class="website-content-text4">
            <span class="website-content-text5">
              Looking for the best deals on pet products? Look no further! Our online
              pet store has a wide selection of high-quality products for all your
              furry friend&apos;s needs. From premium food to fun toys to grooming
              essentials, we have it all at
              <span v-html="rawi7zn"></span>
            </span>
            <span class="website-content-text6">unbeatable prices</span>
            <span>
              . Don&apos;t miss out on our great deals and shop now for your
              pet&apos;s happiness and yours!
            </span>
          </span>
        </div>
      </div>
     <div class="search-bar">
      <my-search-bar @search="searchInProducts($event, searchText)"></my-search-bar>
      </div>
 
      


      <div class="product-cards">
        <!-- <div v-for="product in products" :key="product.name">
          <product-card :product="product"></product-card> -->

          <MyProductCard v-for="product in products" :key="product.p_id" :jsonproduct="product"
           @add-to-cart="addToCart"></MyProductCard>
      </div>   

    </div>
  
  </template>
<script>
import axios from 'axios';
import MySearchBar from '../components/MySearchBar.vue';
import MyProductCard from '../components/MyProductCard.vue';
import MyCart from '../components/MyCart.vue';

export default {
  name: 'Shop',

  components: { MySearchBar, MyProductCard, MyCart },

  data() {
    return {
      rawpdwq: ' ',
      rawi7zn: ' ',
      products: [],
      CartItems: [],
      ShowCartFlag: false
    };
  },

  created() {
    axios.get('http://localhost:3000/products')
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },

  methods: {
    addToCart(product) {
      console.log("addToCart is called");
      console.log("addToCart is called with the following product:", product);
      this.CartItems.push(product);
      localStorage.setItem('CartItems', JSON.stringify(this.CartItems));
    },

    ShowCart() {
      this.ShowCartFlag = true;
    },

    navigateToCart(CartItems) {
      this.$router.push({ name: 'Cart', props: CartItems });
    },

    searchInProducts(searchText) {
      if (searchText) {
        this.products = this.products.filter(
          rec => rec.p_name.toLowerCase().includes(searchText.toLowerCase())
        );
      } else {
        axios.get('http://localhost:3000/products')
          .then(response => {
            this.products = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
};
</script>


  
  
  
  <style>
  .website-content-website-content {
    font-family: 'Inter', sans-serif;
    width: 100%; /* Set the width to 100% */
    height: 209px;
    display: flex;
    padding: 0;
    position: relative;
    align-self: auto;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    margin-right: 0;
    border-radius: 0px 0px 0px 0px;
    margin-bottom: 0;
    flex-direction: row;
    justify-content: center;
    background-color: transparent;
  }
  
  .website-content-text {
    left: 38.201416015625px;
    color: rgba(0, 0, 0, 1);
    width: 628px;
    height: auto;
    position: relative;
    font-size: 40px;
    align-self: auto;
    font-style: Black;
    text-align: center;
    font-family: Inter;
    font-weight: 900;
    line-height: normal;
    font-stretch: normal;
    text-decoration: none;
  }
  .website-content-text1 {
    color: rgba(0, 0, 0, 1);
  }
  .website-content-text2 {
    color: rgba(255, 189, 89, 1);
  }
  .website-content-text4 {
    top: 113px;
    color: rgba(73, 73, 73, 1);
    width: 704px;
    height: auto;
    position: absolute;
    font-size: 16px;
    align-self: auto;
    font-style: Regular;
    text-align: center;
    font-family: Inter;
    font-weight: 400;
    line-height: 24px;
    font-stretch: normal;
    text-decoration: none;
  }
  .website-content-text5 {
    font-weight: 400;
  }
  .website-content-text6 {
    font-weight: 700;
  }
  .product-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}


  </style>