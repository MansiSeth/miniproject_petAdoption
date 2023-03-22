<template>
  <div>
    
      <v-layout row wrap>
      <v-flex v-for="inventory in inventory" :key="inventory.i_id">
        <v-card class="text-xs-center ma-3">
          <v-card-title>My Product</v-card-title>
        </v-card> </v-flex
      >
      </v-layout>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      inventory: [
        {
          i_id: "001",
          i_name: "MyProduct1",
          i_priceL: "100",
          i_desc: "njgkdsignog",
        },
        {
          i_id: "002",
          i_name: "MyProduct2",
          i_priceL: "100",
          i_desc: "njgkdsignog",
        },
        {
          i_id: "003",
          i_name: "MyProduct3",
          i_priceL: "100",
          i_desc: "njgkdsignog",
        },
        {
          i_id: "004",
          i_name: "MyProduct4",
          i_priceL: "100",
          i_desc: "njgkdsignog",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
