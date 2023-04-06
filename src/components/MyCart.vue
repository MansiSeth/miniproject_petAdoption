<template>
  <div class="cart">
    <div class="cart-items">
      <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <div class="cart-item-image">
          <img src="item.image" :alt="item.p_name" class="product-image" />
        </div>
        <div class="cart-item-name">{{ item.p_name }}</div>
        <div class="cart-item-quantity">
          Quantity: {{ item.quantity }}
          <button @click="incrementQuantity(item)">+</button>
          <button @click="decrementQuantity(item)">-</button>
        </div>
        <div class="cart-item-price">{{ formatPrice(item.p_price) }}</div>
      </div>
    </div>
    <div class="cart-total">Total: {{ formatPrice(calculateTotalWithTaxes) }}</div>
  </div>
</template>

<script>
export default {
  name: "MyCart",
  props: ["cartItems"],
  computed: {
    calculateTotalWithTaxes() {
      const subtotal = this.cartItems.reduce((total, item) => {
        if (typeof item.p_price === 'number' && typeof item.quantity === 'number') {
          return total + item.p_price * item.quantity;
        } else {
          return total;
        }
      }, 0);
      const taxes = subtotal * 0.1;
      return subtotal + taxes;
    },
  },
  methods: {
    incrementQuantity(item) {
      item.quantity++;
    },
    decrementQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.cartItems.splice(this.cartItems.indexOf(item), 1);
      }
    },
    formatPrice(price) {
      return typeof price === 'number' ? `$${price.toFixed(2)}` : '';
    },
  },
};
</script>

<style>
.cart {
  border: 3px solid #ddd;
  padding: 16px;
  border-radius: 4px;
}
.cart {
  /* position: absolute; */
  width: 712px;
  height: 727px;
  left: 79px;
  top: 277px;
  background: #FFE7C2;
  border-radius: 15px;
}

.cart-item {
  /* position: absolute; */
  width: 631px;
  height: 138px;
  left: 118px;
  top: 381px;
  background: #FFFFFF;
  border-radius: 20px;
}

.cart-items {
  margin-bottom: 16px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.cart-item-quantity {
  display: flex;
  align-items: center;
}

.cart-item-quantity button {
  margin-left: 8px;
}

.cart-total {
  font-weight: bold;
  font-size: 18px;
}

.product-image {
  width: 100px;
  height: 100px;
  
  margin-right: 16px;
}

.cart-item-image {
  display: flex;
  align-items: center;
}
</style>
