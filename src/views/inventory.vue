<template>
  <div>
    <navbar-vue></navbar-vue>
    <div>
      <div>
        <div class="main-heading">
          <div>
            <h1 class="main-heading-yellow">My</h1>
          </div>
          <div>
            <h1 class="main-heading-black">Store</h1>
          </div>
        </div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="public\favicon.ico" />
      </div>

      <div class="description">
        <p>
          Check out our pet adoption blog for helpful tips and inspiration on
          finding your furry best friend. From breed information to adoption
          stories, we've got everything you need to make the perfect match.
          Follow us for regular updates and join the conversation on pet
          adoption today
        </p>
      </div>

      <div class="cards">
        <my-inventory-card></my-inventory-card>
     
      </div>
      <div class="cards">
        <my-inventory-card></my-inventory-card>
     
      </div>
    </div>
    <my-footer />
  </div>
</template>

<script>
import MyFooter from "@/components/MyFooter.vue";
import MyNavbar from "@/components/MyNavbar.vue";
import MyInventoryCard from "@/components/MyInventoryCard.vue";

export default {
  components: { MyNavbar, MyFooter, MyInventoryCard },
};
</script>

<style lang="scss" scoped>
.main-heading {
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-heading-yellow {
  font-family: "Inter", sans-serif;
  color: #ffbd59;
}
.main-heading-black {
  font-family: "Inter", sans-serif;
}
.description {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  text-align: center;
}

.cards {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px;
}
</style>
