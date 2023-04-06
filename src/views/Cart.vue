<template>
  <div class="CartButton">
    <div>
      <My-cart v-if="ShowCartFlag" :cart-items="CartItems"></My-cart>
      <My-cart v-else :cart-items="CartItems"></My-cart>
    </div>
    <div class="checkoutbutton">
      <button @click="gotocheckout" class="checkout"><span>Checkout</span></button>
    </div>
  </div>
</template>

<script>
import MyCart from '../components/MyCart.vue';

export default {
  name: 'Cart',
  components: { MyCart },

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
      this.$router.push({ name: "Checkout", props: { CartItems: this.CartItems } });
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout {
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: white;
  font-size: 34px;
  background: #ffbd59;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}
</style>
