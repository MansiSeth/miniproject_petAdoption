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
        image: ''
      };
    },
    saveProduct() {
      if (this.id === '0') {
        // Create a new product
        const newProduct = { ...this.product, p_id: this.generateNewProductId() }; // Assign a new p_id
        axios.post('http://192.168.1.6:3000/products', JSON.stringify(newProduct), {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            console.log(response.data);
            this.$router.push('/inventory');
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        // Update an existing product
        axios.put(`http://192.168.1.6:3000/products/${this.id}`, JSON.stringify(this.product), {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            console.log(response.data);
            this.$router.push('/inventory');
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
    generateNewProductId() {
      const randomNumber = Math.floor(Math.random() * 9000) + 1000; // Generate a random number between 1000 and 9999
      return randomNumber.toString();
    }
  }
};
</script>

<style scoped>
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
