<template>
  <div class="CartButton">
    <div>
      <h2>My Items</h2>
      <My-cart v-if="ShowCartFlag" :cart-items="CartItems"></My-cart>
      <My-cart v-else :cart-items="CartItems"></My-cart>
    </div>


    <checkout></checkout>

    

    
  </div>
</template>

<script>
import checkout from '../components/Checkout.vue';
import MyCart from '../components/MyCart.vue';



export default {
  name: 'Cart',
  components: { MyCart, checkout },

  data() {
    return {
      CartItems: [],
      ShowCartFlag: false,
    };
  },

  created() {
    console.log('created hook is called');
    const storedCartItems = JSON.parse(localStorage.getItem('CartItems'));
    if (storedCartItems) {
      this.CartItems = storedCartItems;
    }
  },

  methods: {
    addToCart(product) {
      this.CartItems.push(product);
      localStorage.setItem('CartItems', JSON.stringify(this.CartItems));
    },

    ShowCart() {
      this.ShowCartFlag = true;
    },

    navigateToCart(CartItems) {
      this.$router.push({ name: 'Cart', props: CartItems });
    },

    gotocheckout() {
      this.$router.push({ name: "Checkout", props: { 
        CartItems: this.CartItems,
      } });
    },
  },


};
</script>

