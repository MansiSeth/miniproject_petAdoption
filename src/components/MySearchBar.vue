<template>
    <div class="search-container">
    
        <div class="pawButton">
    
            <img class="pawButton" src="@/assets/pawVector.png" alt="paw" />
    
        </div>
    
        <div class="search-bar">

        <v-text-field solo label="Search" append-icon="mdi-magnify"  v-model="searchText" @input="$emit('search',$event)"></v-text-field>

        </div>


        <div>
    
            <button  @click="goToCart" class="cart-btn"><img 
            class="cart-vector" src="@/assets/cart.svg"></button></div>
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchTerm: "",
            name: "searchBar",
            searchText: ''
        };
    },
    methods: {
        updateSearchTerm(event) {
            this.searchTerm = event.target.value;
        },
        search() {
                this.$emit('search', this.searchText);
        },
         goToCart() {
    this.$router.push('/cart');
  }
    },
};
</script>

<style>
.search-container {
  background-color: #ffe7c2;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 30px;
  justify-content: center;
  box-shadow: inset 0 0 0 5px #FFBD59; /* add outer border */
}
.pawButton {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}
/* .search-bar {
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 10px 0px 0px 10px;
    overflow: hidden;
    font-family: 'Courier New', Courier, monospace;
}  */
/* input[type="text"] {
    border: none;
    padding: 5px;
    width: 200px;
} */
.search-btn {
    background-color: #FFBD59;
    border: none;
    cursor: pointer;
    width:30px;
    height:25px;
    outline: none;
    border-radius: 0px 15px 15px 0px;;
} 
.search-btn:active {
      box-shadow: 0 0 5px rgba(0,0,0,0.5);
      border-radius:5pt;
      border: none;
}
.search-btn :focus{
    outline:none;
}
.search-btn:hover:before {
    transform: scale(1.2);
}
.search-btn-vector{
    width:30px;
    border-radius: 30%;
}
.cart-btn{
    
    width: 30px;
  height: 30px;
  background-color: transparent;
  outline: none;
  border: none; /* remove border */
  border-radius: 20px;
  padding: 3px;
  display: flex; /* use flexbox */
  justify-content: center; /* center align horizontally */
  align-items: center;
  cursor: pointer;
}
.cart-vector{
    width:20px;
    height:20px;
}
.cart-btn :active{
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
      border-radius:15pt;
      border: none;
}
</style>
