<template>
  <div class="carousel" ref="carousel">
    <div class="slide-container">
          <div class="card-image">
              <img src="../assets/pawVector.png" alt="" class="card-img">
          </div>
          <div class="card-content">
                <h2 class="name">Dog 1</h2>
                <p class="desc">best dog you can pet</p>
                <br>
                <button class="button">View More</button>
          </div>
      </div>
    <div class="slide-container">
      <div class="card-image">
              <img src="../assets/pawVector.png" alt="" class="card-img">
          </div>
          <div class="card-content">
                <h2 class="name">Dog 2</h2>
                <p class="desc">bestes dog</p>
                <br>
                <button class="button">View More</button>
          </div>
     
    </div>
    <div class="slide-container">
    <div class="card-image">
              <img src="../assets/pawVector.png" alt="" class="card-img">
          </div>
          <div class="card-content">
                <h2 class="name">Dog 3</h2>
                <p class="desc">best dog you can pet</p>
                <br>
                <button class="button">View More</button>
          </div>
    </div>
    <button class="prev-button"><</button>
    <button class="next-button">></button>
  </div>
</template>

<script>
export default {
  mounted() {
    let currentSlideIndex = 0;
    const slideContainers = this.$refs.carousel.querySelectorAll('.slide-container');
    const prevButton = this.$el.querySelector('.prev-button');
    const nextButton = this.$el.querySelector('.next-button');

    function updateCarousel() {
      slideContainers.forEach((container, index) => {
        const offset = (index - currentSlideIndex) * 100;
        container.style.transform = `translateX(${offset}%)`;
      });
    }

    prevButton.addEventListener('click', () => {
      currentSlideIndex = Math.max(currentSlideIndex - 1, 0);
      updateCarousel();
    });

    nextButton.addEventListener('click', () => {
      currentSlideIndex = Math.min(currentSlideIndex + 1, slideContainers.length - 1);
      updateCarousel();
    });
  }
};
</script>

<style scoped>
  .carousel {
    position: relative;
    display: flex;
    overflow-x: hidden;
  }

  .slide-container {
    width: 100%;
    flex-shrink: 0;
    transition: transform 0.3s ease-out;
  }

  .prev-button,
  .next-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background-color: #efefef;
    color: #333;
    cursor: pointer;
    transition: background-color 0.3s ease-out;
  }

  .prev-button:hover,
  .next-button:hover {
    background-color: #ddd;
  }

  .prev-button {
    left: 20px;
  }

  .next-button {
    right: 20px;
  }
</style>
