<template>
    <div class="carousel">
      <div class="slide-container">
        <div class="slide-content">
          <div class="card-wrapper">
            <div class="card">
              <div class="image-content">
                <span class="overlay">
                </span>
                <div class="card-image">
                  <img src="../assets/pawVector.png" alt="" class="card-img">
                </div>
              </div>
              <div class="card-content">
                <h2 class="name">Dog 1</h2>
                <p class="desc">best dog you can pet</p>
                <br>
                <button class="button">View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide-container">
        <div class="slide-content">
          <div class="card-wrapper">
            <div class="card">
              <div class="image-content">
                <span class="overlay">
                </span>
                <div class="card-image">
                  <img src="../assets/pawVector.png" alt="" class="card-img">
                </div>
              </div>
              <div class="card-content">
                <h2 class="name">Dog 1</h2>
                <p class="desc">best dog you can pet</p>
                <br>
                <button class="button">View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide-container">
        <div class="slide-content">
          <div class="card-wrapper">
            <div class="card">
              <div class="image-content">
                <span class="overlay">
                </span>
                <div class="card-image">
                  <img src="../assets/pawVector.png" alt="" class="card-img">
                </div>
              </div>
              <div class="card-content">
                <h2 class="name">Dog 1</h2>
                <p class="desc">best dog you can pet</p>
                <br>
                <button class="button">View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
    
  <script>
  
  </script>
  
  <style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .carousel
  {
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #efefef;
  }
  .card
  {
    width: 220px;
    border-radius: 25px;
    background-color: #ffffff;
  }
  .slide-content
  {
    margin: 0 40px;
  }
  .image-content, 
  .card-content
  {
    display: flex;
    flex-direction: column;
    padding: 10px 14px;
    align-items: center;
  }
  .image-content
  {
    position: relative;
    row-gap: 5px;
    
  }
  .overlay
  {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #ffbd59;
    border-radius: 25px 25px 25px 25px;
  }
  .card-image
  {
    position: relative;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background-color: #ffffff;
    padding: 3px;
  }
  .card-image .card-img
  {
    height:100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #000000;
  }
  .desc
  {
    font-size: 14px;
    color: #707070;
    text-align: center;
  }
  .button
  {
    border:none;
    font-size: 16px;
    color: #060000;
    padding: 8px 16px;
    background-color: #ffbd59;
    border-radius: 6px;
    margin: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .button:hover{
    background-color: #f5d39e;
  }
  </style>
    
  