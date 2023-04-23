<template>
  <div class="CartButton">
    <div class="cart-container">
      <div class="cart-items">
        <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
           <img :src="item.image" :alt="item.name" class="product-image">
          <div class="cart-item-details">
            <div class="cart-item-name">{{ item.name }}</div>
            <div class="cart-item-price">{{ formatPrice(item.p_price) }}</div>
            <div class="product-quantity">
              <button @click="incrementQuantity(item)" class="quantity-btn">+</button>
                {{ item.quantity }}
              <button @click="decrementQuantity(item)" class="quantity-btn">-</button>
            </div>
            
          </div>
        </div>
      </div>
      <div class="cart">
        <div class="cart-summary">
          <div>Subtotal: {{ formatPrice(subtotal) }}</div>
          <div>Taxes: {{ formatPrice(taxes) }}</div>
          <div><b>Total:</b> {{ formatPrice(total) }}</div>
          <button @click="gotocheckout" class="checkout"><span>Checkout</span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {

  name: "MyCart",
  props: ["cartItems"],
  data() {
    return {
      subtotal: 0,
      taxes: 0,
      total: 0
    }
  },
  created() {
    this.computeTotal();
  },
  mounted(){
    this.loadCartItems();
  },
  methods: {
    async loadCartItems() {
      const response = await axios.get('http://localhost:3000/products');
      const products = response.data;
      const cartItems = [];
      for (const product of products) {
        const quantity = localStorage.getItem(product.id) || 0;
        if (quantity > 0) {
          cartItems.push({
            id: product.p_id,
            name: product.p_name,
            p_price: product.p_price,
            quantity: quantity,
            image: product.image
          });
        }
      }
      this.cartItems = cartItems;
    },
    incrementQuantity(item) {
      item.quantity++;
      this.computeTotal();
      this.$emit('cart-updated', this.cartItems);
    },
    decrementQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.cartItems.splice(this.cartItems.indexOf(item), 1);
      }
      this.computeTotal();
      this.$emit('cart-updated', this.cartItems);
    },
    formatPrice(price) {
      return typeof price === 'number' ? `$${price.toFixed(2)}` : '';
    },
    computeTotal() {
      let subtotal = 0;
      for (const item of this.cartItems) {
        subtotal += item.p_price * item.quantity;
      }
      this.subtotal = subtotal;
      this.taxes = subtotal * 0.1;
      this.total = subtotal + this.taxes;
    },
    gotocheckout() {
      this.$router.push({ name: "Checkout", props: { 
        cartItems: this.cartItems,
      } });
    },
  },
  watch: {
    cartItems() {
      this.computeTotal();
    }
  }
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
  height: 300px;
  background-color: #FFE7C2;
  border-radius: 10px;
  padding: 16px;
  margin-left: auto; /* Aligned to the right */
  font-size: 32px;
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
  border-radius: 10px;
  margin-top:10px;
  margin-right:30px;
  margin-left:50px;

}

.cart-item-details {
  
  display:inline;
  position: relative;
   width: 450px;
  height: 138px;
  left: 20px;
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
  margin-bottom:0;
  margin-top:0;
  align-items: center;
 

}
.product-image{
  width: 300px;
  height: 200px;
  border-radius: 10px 0px 0px 10px;
}
.quantity-btn{
    background-color:#FFBD59;
  width:40px;
  height:30px;
  border-radius: 10px

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

</style>

