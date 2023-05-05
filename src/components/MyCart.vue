<template>
<div class="CartButton">
    <div class="cart-container">
        <div class="cart-items">
            <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
                <div class="cart-item-image">
                    <img :src="item.image" :alt="item.p_name" class="product-image" />
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">{{ item.p_name }}</div>

                    <div class="product-quantity">
                        <button @click="decrementQuantity(item)" class="quantity-btn-subs">-</button>
                        <span class="quantity">{{ item.quantity }}</span>
                        <button @click="incrementQuantity(item)" class="quantity-btn-add">+</button>
                    </div>

                    <div class="cart-item-price">{{ formatPrice(item.p_price) }}</div>
                </div>
            </div>
        </div>
        <div class="cart">
            <div class="cart-summary">
                <div>Subtotal: {{ formatPrice(subtotal) }}</div>
                <div>Taxes: {{ formatPrice(taxes) }}</div>
                <div><b>Total:</b> {{ formatPrice(total) }}</div>
                <button @click="gotoCheckout" class="checkout"><span>Order</span></button>

                <div v-if="orderPlaced" class="message">
                    Order Placed
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

    name: "MyCart",
    props: ["cartItems"],

    data() {
        return {
            orderPlaced: false  // Added property
        };
    },

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
            if (item.quantity >= 1) {
                item.quantity--;
            } else {
                this.cartItems.splice(this.cartItems.indexOf(item), 1);
            }
        },
        formatPrice(price) {
            return typeof price === 'number' ? `₹${price.toFixed(2)}` : '';
        },
        gotoCheckout() {
        this.orderPlaced = true;
      }
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
    width: 300px;
    /* Increased width */
    height: 300px;
    background-color: #FFE7C2;
    border-radius: 10px;
    padding: 16px;
    margin-left: auto;
    /* Aligned to the right */
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

.checkout:hover {
    background: #e0aa5a;
    background-image: -webkit-linear-gradient(top, #e0aa5a, #f5b55a);
    background-image: -moz-linear-gradient(top, #e0aa5a, #f5b55a);
    background-image: -ms-linear-gradient(top, #e0aa5a, #f5b55a);
    background-image: -o-linear-gradient(top, #e0aa5a, #f5b55a);
    background-image: linear-gradient(to bottom, #e0aa5a, #f5b55a);
    text-decoration: none;
}

.cart-item {
    display: flex;
    background-color: #FFE7C2;
    border-radius: 10px;
    margin-top: 10px;
    margin-right: 30px;
    margin-left: 50px;

}

.cart-item-details {

    display: inline;
    position: relative;
    width: 450px;
    height: 138px;
    left: 20px;
    top: 50px;

}

.cart-item-name {
    font-size: 20px;
    font-weight: bold;
}

.cart-item-quantity {
    display: flex;
    align-items: center;
    margin-top: 8px;
    display: inline;
}

.cart-item-quantity button {
    margin-left: 8px;
    display: inline;
}

.cart-item-price {
    margin-top: 8px;
    font-size: 18px;
    font-weight: bold;
    display: inline;
}

.cart-item-image {
    margin-bottom: 0;
    margin-top: 0;
    align-items: center;

}

.product-image {
    width: 300px;
    height: 200px;
    border-radius: 10px 0px 0px 10px;
}

.quantity-btn-subs {
    background-color: #FFBD59;
    width: 30px;
    height: 30px;
    border-radius: 30px 10px 30px 30px;
}

.quantity-btn-add {
    background-color: #FFBD59;
    width: 30px;
    height: 30px;
    border-radius: 30px 30px 30px 10px;
}

.product-quantity {
    display: flex;
    background-color: azure;
    width: 65px;
    height: 30px;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 30px;
}
.message {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: lightgreen;
  color: white;
  font-size: 10px;
  border-radius: 30px;
  text-align: center;
}
</style>
