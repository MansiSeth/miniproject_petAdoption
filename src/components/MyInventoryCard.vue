<template>
  <div>
    <v-layout row wrap>
      <v-flex v-for="inventory in inventory" :key="inventory.i_id">

        <v-card class="text-xs-center">

          <v-responsive class="pt-4"> image goes here </v-responsive>
          <v-card-title>{{ inventory.i_name }}</v-card-title>
      
        <v-card-text>
          <div class="subheading">P_ID:{{ inventory.i_id }}</div>

          <div class="grey--text">Price:{{ inventory.i_price }}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn flat color="grey">Edit</v-btn>
        </v-card-actions>

        </v-card>
      </v-flex>
    </v-layout>

    <!-- <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
        <v-card flat class="text-xs-center ma-3">
          <v-responsive class="pt-4"> image here </v-responsive>
          <v-card-text>
            <div class="subheading">{{ person.name }}</div>
            <div class="grey--text">{{ person.role }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="grey">
              <v-icon small left>message</v-icon>
              <span class="">Message</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout> -->
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
          i_price: "100",
          i_desc: "njgkdsignog",
        },
        {
          i_id: "002",
          i_name: "MyProduct2",
          i_price: "100",
          i_desc: "njgkdsignog",
        },
        {
          i_id: "003",
          i_name: "MyProduct3",
          i_price: "100",
          i_desc: "njgkdsignog",
        },
        {
          i_id: "004",
          i_name: "MyProduct4",
          i_price: "100",
          i_desc: "njgkdsignog",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
