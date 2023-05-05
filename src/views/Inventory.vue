<template>
  <div class="inventory-page">
    
    <div class="centre">
        <div class="content_container">
          <h1 class="page-title">My<span class="yellow-text">Store</span></h1>
      
          <p style="padding:10px 10px 10px 10px">
           Welcome to our pet products website's inventory page, your gateway to a world of premium supplies and delightful accessories for your beloved furry companions. Our inventory page showcases an extensive range of high-quality products designed to enhance the well-being and happiness of your pets. From nutritious food and tasty treats to comfortable beds and stylish apparel, we have everything you need to cater to their every need.<br>
            As you explore the page, you'll find detailed descriptions and vibrant images that highlight the features and benefits of each item, making it easy for you to choose the perfect product for your pet. 
          </p>
        </div>
    </div><br>

    <my-search-bar
      @search="searchInInventory($event, searchText)"
    ></my-search-bar>
    <!-- here @search cathches whatever user input into the searchbar component and passes to searchInInventory method-->

    <div class="inventory-list">
      <MyInventoryCard
        v-for="product in products"
        :key="product.p_id"
        :product="product"
      />
      <button class="AddButton" @click="$router.push('/inventory/0')">+</button>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';
import MySearchBar from "@/components/MySearchBar.vue";
import MyInventoryCard from "../components/MyInventoryCard.vue";
//import ProductsData from "../data/Inventory.json"; if json file was used to render data of cards


export default {
  components: {
    MyInventoryCard,
    MySearchBar,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    searchInInventory(searchText) {
      if (searchText) {
        this.products = this.products.filter((rec) =>
          rec.p_name.toLowerCase().includes(searchText.toLowerCase())
        );
      } else {
        this.products = ProductsData;
      }
    },
  },
  mounted() {
    
  axios.get('http://192.168.1.6:3000/products')
    .then(response => {
      this.products = response.data;
    })
    .catch(error => {
      console.error(error);
    });
}

};
</script>

<style>
.inventory-page {
  margin: 0 auto;
  padding: 20px;
}
 .content_container {
  text-align: center;
  margin-left: 10% ;
   margin-right: 10% ;
}


.page-title {
  margin: 0 0 20px;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
}

.inventory-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.yellow-text {
  color: rgba(255, 189, 89, 1);
}
.AddButton {
  background-color: #ffe7c2;
  border-radius: 30px;
  width: 300px;
  height: 425px;
  font-size: 24px;
  margin-top: 20px;
  font-size: 50px;
  border: 2px solid;
}
</style>
