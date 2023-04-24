<template>
  <div>
    <div class="inventory-card">
      <div class="product-image-wrapper">
        <img :src="jsonproduct.image" :alt="jsonproduct.name" class="product-image" />
      </div>
      <div class="product-details">
        <h3 class="product-name">{{ jsonproduct.p_name }}</h3>
        <p class="product-price">{{ jsonproduct.p_price }}</p>
        <p class="product-description">{{ jsonproduct.p_desc }}</p>
        <div class="product-quantity">
          <button @click="incrementQuantity" class="quantity-btn">+</button>
          <span class="quantity">{{ quantity }}</span>
          <button @click="decrementQuantity" class="quantity-btn">-</button>
        </div>
        <div class="add-to-cart">
          <button class="standardButton" @click="addtoCart(jsonproduct)">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductsData from "../data/Inventory.json";

export default {
  data() {
    return {
      product: ProductsData,
      quantity: 0,
    };
  },

  props: {
    jsonproduct: {
      type: Object,
      required: true,
    },
  },

  methods: {
    addtoCart() {
      const product = {
        image:this.jsonproduct.image,
        p_name: this.jsonproduct.p_name,
        p_price: this.jsonproduct.p_price,
        quantity: this.quantity,
      };
      this.$emit("add-to-cart", product);
    },
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity >= 1) {
        this.quantity--;
      }
    },
  },
};
</script>
<style scoped>

.inventory-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px 20px 20px;
  border: 2px solid;
  border-radius: 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 425px;
  margin: 20px;
  background-color: #ffe7c2;
  position: relative;
}
.product-quantity{
  display: flex;
  background-color: azure;
  width:80px;
  height:30px;
  align-items: center;
  margin-top:10px;
  margin-bottom: 10px;
  border-radius: 10px;
  

}
.quantity-btn{
  background-color:#FFBD59;
  width:40px;
  height:30px;
  border-radius: 10px;
}
.product-image {
  width: 300px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 30px 30px 0px 0px;
  border-top: 0px solid;
  border-bottom: 2px solid;
  border-right: 2px solid;
  border-left: 2px solid;
}


.product-name {
  margin: 0;
}

.product-id {
  margin: 0;
  font-size: 14px;
  color: #999;
}

.product-price {
  margin: 5px;
  font-size: 18px;
  font-weight: bold;
  color: #007aff;
}
.standardButton {
    background: #FFBD59;
    background-image: -webkit-linear-gradient(top, #FFBD59, #e6bb7a);
    background-image: -moz-linear-gradient(top, #FFBD59, #e6bb7a);
    background-image: -ms-linear-gradient(top, #FFBD59, #e6bb7a);
    background-image: -o-linear-gradient(top, #FFBD59, #e6bb7a);
    background-image: linear-gradient(to bottom, #FFBD59, #e6bb7a);
    -webkit-border-radius: 20;
    -moz-border-radius: 20;
    border-radius: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;;
    color: black;
    font-size: 13px;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    border-width: 0;
    text-align: center;
    cursor: pointer;
    margin-left:100px;
    position: relative;
    bottom:40px;
  }
  
  .standardButton:hover {
    background: #e0aa5a;
    background-image: -webkit-linear-gradient(top, #e0aa5a, #f5b55a);
    background-image: -moz-linear-gradient(top, #e0aa5a, #f5b55a);
    background-image: -ms-linear-gradient(top, #e0aa5a, #f5b55a);
    background-image: -o-linear-gradient(top, #e0aa5a, #f5b55a);
    background-image: linear-gradient(to bottom, #e0aa5a, #f5b55a);
    text-decoration: none;
  }





  

</style>
