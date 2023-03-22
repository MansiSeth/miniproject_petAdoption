<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <img src="@/assets/logo.png" alt="Logo">
      <h1 class="navbar-company-name">Tail-or Made</h1>
    </div>
    <ul class="navbar-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/shop">Shop</router-link></li>
      <li><router-link to="/donate">Donate</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
    </ul>
    
    <Button class="logIn">Login</button>
    
  </nav>

  
</template>

<script>

import componentButton from '../components/componentButton.vue';

export default {
  name: "navbar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  
}


.navbar-logo img {
  height: 40px;
  margin-right: 10px;
}

.navbar-company-name {
  font-size: 24px;
  margin: 0;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.navbar-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-links li {
  margin-right: 20px;
}

.navbar-links li:last-child {
  margin-right: 0;
}

.navbar-links li a {
  text-decoration: none;
  color: #333;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.navbar-links li a:hover {
  color:#FFBD59;
}

.logIn {
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
}

.logIn:hover {
  background: #e0aa5a;
  background-image: -webkit-linear-gradient(top, #e0aa5a, #f5b55a);
  background-image: -moz-linear-gradient(top, #e0aa5a, #f5b55a);
  background-image: -ms-linear-gradient(top, #e0aa5a, #f5b55a);
  background-image: -o-linear-gradient(top, #e0aa5a, #f5b55a);
  background-image: linear-gradient(to bottom, #e0aa5a, #f5b55a);
  text-decoration: none;
}

</style>
