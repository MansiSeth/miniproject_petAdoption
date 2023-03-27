<template>
  <div>
    <div class="content">
        <div class="website-content-website-content">
          <span class="website-content-text">
            <span class="website-content-text1">
             My<span class="website-content-text2">Store</span>
            </span>
          </span>
          <span class="website-content-text4">
            <span class="website-content-text5">
              Looking for the best deals on pet products? Look no further! Our online
              pet store has a wide selection of high-quality products for all your
              furry friend&apos;s needs. From premium food to fun toys to grooming
              essentials, we have it all at
              <span></span>
            </span>
            <span class="website-content-text6">unbeatable prices</span>
            <span>
              . Don&apos;t miss out on our great deals and shop now for your
              pet&apos;s happiness and yours!
            </span>
          </span>
        </div>
      </div>

      
<my-inventory-card></my-inventory-card>

  </div>

</template>

<script>
import MyInventoryCard from "@/components/MyInventoryCard.vue";

export default {
  components: { MyInventoryCard },
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
