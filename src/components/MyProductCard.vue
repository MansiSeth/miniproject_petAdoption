<template>
<div class="product-card">
  <div class="product-image">
    <div class="product-image" :style="{ backgroundImage: 'url(' + product.image + ')' }"></div>
  </div>

  <div class="product-info">
    <div class="product-qunatity-placement">
      <h2 class="product-name">{{ product.name }}</h2>

      <div class="product-quantity">
        <button class="product-quantity-left" @click="decrementQuantity">-</button>
        <span>{{ quantity }}</span>
        <button class="product-quantity-right" @click="incrementQuantity">+</button>
      </div>
    </div>

    <p class="product-description">{{ product.description }}</p>
    <div class="product-price">{{ product.price }}</div>

    <componentButton class="standardButton" text='Add to Cart' @click="$router.push('/tester')"></componentButton>
  </div>
</div>


</template>
  
  
<script>
import componentButton from './MyButton.vue';

  export default {
    name: "productCard",
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    data() {
          return {
              quantity: 0
          };
      },
      methods: {
          incrementQuantity() {
              this.quantity++;
          },
          decrementQuantity() {
              if (this.quantity >= 1) {
                  this.quantity--;
              }
          }
      },
      components: { componentButton }
  };
  </script>
  
<style>
  .product-card {
    display: flex;
    width: 300px;
    flex-direction: column;
    justify-content: space-between;
    background-color: #FFE7C2;
    border-radius: 10px;
    overflow: hidden;
    height: 400px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  }
  
  .product-image {
    height: 100%;
    background-size: cover;
    background-position: center;
  }
  
  .product-info {
    padding: 10px;
  }
  
  .product-name {
    font-size: 20px;
    margin: 0;
  }
  
  .product-description {
    font-size: 14px;
    margin-top: 10px;
  }
  
  .product-price {
    font-size: 24px;
    margin-top: 10px;
  }
  
  .product-quantity {
    display: flex;
    align-items: center;
    margin-top: 10px;
    background-color: white;
    border-radius: 20px;
  }
  
  .product-quantity button {
    background-color: #FFBD59;
    color: #333;
    font-size: 20px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    border: 2px;
  }

  .product-quantity-left {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.product-quantity-right {
    border-bottom-left-radius: 0px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
 
}
  
  .product-quantity span {
    margin: 0 10px;
    font-size: 18px;
    font-weight: bold;
  }

  .product-qunatity-placement {
    display: flex;
    justify-content: space-between;
  }
  </style>
  