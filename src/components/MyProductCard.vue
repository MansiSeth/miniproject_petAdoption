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
          <input type="number" v-model.number="quantity" min="0" step="1" class="product-quantity-input" />
        </div>
        <div class="add-to-cart">
          <button class="standardButton" @click="addtoCart()">Add to Cart</button>
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
  border: 1px solid #ddd;
  padding: 0;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image-wrapper {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image {
  max-width: 100%;
  max-height: 100%;
}

.product-name {
  margin-top: 0;
  margin-bottom: 8px;
}

.product-price {
  margin: 0;
  font-weight: bold;
}

.product-description {
  margin-top: 8px;
  margin-bottom: 16px;
}

.product-quantity {
  display: flex;
  align-items: center;
}

.product-quantity-input {
  border: none;
  width: 60px;
  height: 28px;
  font-size: 16px;
  text-align: center;
  margin: 8px;
}

.add-to-cart {
  margin-top: 16px;
}

.product-details {
  background-color: #FFE7C2;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0 0 4px 4px;
}
</style>
