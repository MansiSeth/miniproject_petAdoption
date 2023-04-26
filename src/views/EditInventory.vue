<template>
<div class="center-container">

    <div class="form_details">
        <h1>Product ID: {{id}}</h1>
        <v-row>
            <v-col >
                <v-form>
                    <v-text-field label="Product Name" counter="25" v-model="product.p_name"></v-text-field>
                    <v-text-field label="Product Price" counter="10" v-model="product.p_price"></v-text-field>
                    <v-textarea label="Product Description" counter="200" v-model="product.p_desc"></v-textarea>

                </v-form>
            </v-col>
        </v-row>

        <div class="buttons_bar">
            <button class="standardButton">Save</button>
            <button class="standardButton"  @click="$router.push('/inventory')">Cancel</button>
        </div>

    </div>

</div>
</template>

<script>
import productData from '@/data/Inventory.json';
export default {
    data() {
        return {
            id: 0,
            product: this.defaultObject()
        }
    },

    mounted() {
        this.init()
        console.log("in mounted");

    },

    methods: {

        init() {
            this.id = this.$route.params.id
            console.log("in init");

            if (this.id != 0) {
                console.log(this.product);
                this.product = productData.find(rec => rec.p_id == this.id)

            }
        },
        defaultObject() {
            return {
                code: "",
                p_name: "",
                p_price: "",
                p_desc: "",
            }
        }

    }
}
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
