<template>
  <div class="inventory-page">
    <h2 class="page-title">My<span class="yellow-text">Store</span></h2>

    <div class="inventory-list">
      <MyInventoryCard
        v-for="product in products"
        :key="product.p_id"
        :product="product"
      />
      <button class="AddButton">+</button>
    </div>
    
  </div>
</template>

<script>
import MyInventoryCard from "../components/MyInventoryCard.vue";
import productsData from "../data/Inventory.json";

export default {
  components: {
    MyInventoryCard,
  },
  data() {
    return {
      products: productsData,
    };
  },
};
</script>

<style>
.inventory-page {
  margin: 0 auto;
  padding: 20px;
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
    background-color:#ffe7c2;
    border-radius: 30px;
    width: 300px;
    height: 425px;
    font-size: 24px;
    margin-top: 20px;
    font-size:50px ;
    border: 2px solid;
    
  }
</style>
