<template>
    <div class="body">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" rel="stylesheet">
      
      <br>
      <br>
      <div class="centre">
        <div class="content_container">
          <h1>Every animal deserves a Loving home. </h1>
          <h1><span style="color:#FFBD59 ;">Adopt</span> a pet today</h1><br>
          <p style="padding:10px 10px 10px 10px">
            Browse our available animals and learn more about the adoption process. Together, we can <strong>rescue, rehabilitate, and rehome pets in need. </strong>
          </p>
          <p style="padding:10px 10px 10px 10px">
            Thank you for supporting our mission to bring joy to families through pet adoption. We aim to build a return-proof adoption system that classifies Indian breeds properly and matches them to the right adopters and caters to every need of your new pet through our pet store where you can sell and buy pet products.
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
  flex-wrap: wrap;
  }
  .rounded-button {
  border-radius: 40px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding: 4% 6%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  background: #ffbd59;
  width: 80%;
  max-width: 396px;
  font-size: 1.5em;
  color: black;
}

  
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4% 0;
  flex-wrap: wrap;
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
  .content_container {
  text-align: center;
  margin-left: 20% ;
   margin-right: 20% ;
}
  
  </style>
  

  
  
  