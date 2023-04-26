<template>
    <div class="body">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" rel="stylesheet">
      
      <br>
      <br>
      <div class="centre">
        <div>
          <h1>Every animal deserves a Loving home. </h1>
          <h1><span style="color:#FFBD59 ;">Adopt</span> a pet today</h1>
          <p style="padding:10px 10px 10px 10px">
            Browse our available animals and learn more about the adoption process. Together, we can <strong>rescue, rehabilitate, and rehome pets in need. </strong>
          </p>
          <p>
            Thank you for supporting our mission to bring joy to families through pet adoption.
          </p>
        </div>
      </div>
      <div class="button-container">
        <router-link to="/FindaCuddleBuddy">
          <button class="rounded-button">Find a cuddle buddy for me</button>
        </router-link>     
        <router-link to="/FindaHomeforMunchkin">
          <button class="rounded-button">Find a home for a munchkin</button>
        </router-link>     
      </div>
      <carousel3></carousel3>
    </div>
  </template>
  
  <script>
  
  import MyNavbar from '../components/MyNavbar.vue';
  import MyFooter from '@/components/MyFooter.vue';
  import FindaCuddleBuddy from '@/components/FindaCuddleBuddy.vue';
  import FindaHomeforMunchkin from '@/components/FindaHomeforMunchkin.vue';
  import carousel3 from '@/components/carousel3.vue';

  export default {
  name:'Home',
  components: { MyNavbar, FindaCuddleBuddy, FindaHomeforMunchkin, MyFooter, carousel3 },
  
  }
  </script>
  
  <style>
  #app
  {
    margin-top: 60px;
  }
  .body
  {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
  }
  .centre
  {
  display: flex;
  justify-content: center;
  align-items: center;
  }
  .rounded-button 
  {
  border-radius: 40px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding: 20px 30px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
  background: #FFBD59;
  width: 396px;
  height: 68px;
  left: 216px;
  top: 348px;
  font-size: larger;
  color: black;
  }
  
  .button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  }
  
  .rounded-button + .rounded-button {
  margin-left: 50px;
  }
  .scrollable-container {
  height: 300px;
  overflow-y: auto;
  }
  
  .image-container {
  display: flex;
  }
  
  img {
  flex-shrink: 0;
  height: 200px;
  }
  
  </style>
  
  
  