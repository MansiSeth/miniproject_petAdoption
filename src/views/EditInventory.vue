<template>
  <div class="center-container">
    <div class="form_details">
      <h1>Product ID: {{ id }}</h1>
      <v-row>
        <v-col>
          <v-form>
            <v-text-field label="Product Name" counter="25" v-model="product.p_name"></v-text-field>
            <v-text-field label="Product Price" counter="10" v-model="product.p_price"></v-text-field>
            <v-textarea label="Product Description" counter="200" v-model="product.p_desc"></v-textarea>
            <v-text-field label="Image URL" v-model="product.image"></v-text-field>
          </v-form>
        </v-col>
      </v-row>
      <div class="buttons_bar">
        <button class="standardButton" @click="saveProduct">Save</button>
        <button class="standardButton" @click="$router.push('/inventory')">Cancel</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      id: 0,
      product: this.defaultObject()
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.id = this.$route.params.id;
      if (this.id !== '0') {
        axios.get(`http://192.168.1.6:3000/products/${this.id}`)
          .then(response => {
            this.product = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
    defaultObject() {
      return {
        p_name: '',
        p_price: '',
        p_desc: '',
        image: '' // Adjust the image field name in the default object
      };
    },
    saveProduct() {
      if (this.id === '0') {
        // Create a new product
        axios.post('http://192.168.1.6:3000/products', this.product)
          .then(response => {
            console.log(response.data);
            this.$router.push('/inventory');
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        // Update an existing product
        axios.put(`http://192.168.1.6:3000/products/${this.id}`, this.product)
          .then(response => {
            console.log(response.data);
            this.$router.push('/inventory');
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
};
</script>



<style>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;

}
.form_details {
    display: flex;
    width: 500px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFE7C2;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    padding: 5%
}
.buttons_bar{
    display: flex;
    padding-top: 10%;
}
</style>
