<template>
  <div class="CartButton">
    <div class="cart-container">
      <div class="cart-items">
        <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
          <div class="cart-item-image">
            <img src="https://i.ibb.co/KjBPdgJ/inventory.png" :alt="item.p_name" class="product-image" />
          </div>
          <div class="cart-item-details">
            <div class="cart-item-name">{{ item.p_name }}</div>
            <div class="cart-item-quantity">
              Quantity:
              <button @click="incrementQuantity(item)">+</button>
                {{ item.quantity }}
              <button @click="decrementQuantity(item)">-</button>
            </div>
            <div class="cart-item-price">{{ formatPrice(item.p_price) }}</div>
          </div>
        </div>
      </div>
      <div class="cart">
        <div class="cart-summary">
          <div>Subtotal: {{ formatPrice(subtotal) }}</div>
          <div>Taxes: {{ formatPrice(taxes) }}</div>
          <div>Total: {{ formatPrice(total) }}</div>
          <button @click="gotocheckout" class="checkout"><span>Checkout</span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: "MyCart",
  props: ["cartItems"],
  computed: {
    subtotal() {
      return this.cartItems.reduce((total, item) => {
        if (typeof item.p_price === 'number' && typeof item.quantity === 'number') {
          return total + item.p_price * item.quantity;
        } else {
          return total;
        }
      }, 0);
    },
    taxes() {
      return this.subtotal * 0.1;
    },
    total() {
      return this.subtotal + this.taxes;
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
    gotocheckout() {
      this.$router.push({ name: "Checkout", props: { 
        CartItems: this.cartItems,
      } });
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-container {
  display: flex;
}

.cart-summary {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px; /* Increased width */
  background-color: #FFE7C2;
  border-radius: 10px;
  padding: 16px;
  margin-left: auto; /* Aligned to the right */
}


.checkout {
  -webkit-border-radius: 7;
  -moz-border-radius: 7;
  border-radius: 7px;
  font-family: Arial;
  color: #000000;
  font-size: 20px;
  background: #FFBD59;
  padding: 20px 40px 20px 40px;
  text-decoration: none;
}
.checkout:hover{
  background: #fcec3c;
  text-decoration: none;
  
}

.cart-item{
  display: flex;
  background-color: #FFE7C2;
}

.cart-item-details {
  
  display:inline;
  position: relative;
   width: 450px;
  height: 138px;
  left: 118px;
  top:50px;
  
  
}

.cart-item-name {
  font-size: 20px;
  font-weight: bold;
}

.cart-item-quantity {
  display: flex;
  align-items: center;
  margin-top: 8px;
  display:inline;
}

.cart-item-quantity button {
  margin-left: 8px;
  display:inline;
}

.cart-item-price {
  margin-top: 8px;
  font-size: 18px;
  font-weight: bold;
  display:inline;
}
.cart-item-image{
  margin-top: 8px;

}

</style>

