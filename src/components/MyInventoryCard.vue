<template>
  <div class="inventory-card">
    <img :src="product.image" :alt="product.name" class="product-image" />

    <h3 class="product-name">{{ product.p_name }}</h3>

    <p class="product-id">ID: {{ product.p_id }}</p>

    <p class="product-price">{{ product.p_price }}</p>

    <p class="product-description">{{ product.p_desc }}</p>

    <div class="button_pos">
      <button class="standardButton"
        @click="
          $router.push({ name: 'EditInventory', params: { id: product.p_id } })"
      >Edit</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    product: {
      type: Object,
      required: true,
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
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #007aff;
}

.product-description {
  margin: 10px 0;
  line-height: 1.5;
  text-align: justify;
}

.button_pos {
  position: absolute;
  bottom: 10px;
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
