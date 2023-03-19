<template>
  <div>

  <v-app>

  <v-footer 
    color="#FFBD59"
    dark
    padless
    
  >
    <v-card
      flat
      tile
      class="'#FFBD59' lighten-1 white--text text-center"
      color="#FFBD59" 
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        For this project, we didn’t forget last semester’s service learning which is why we want to get the maximum stray pets adopted using a Machine Learning recommender system that matches a pet parent with their perfectly matched pet baby. 
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Tail-or Made</strong>
      </v-card-text>
    </v-card>
  </v-footer>
    

    <v-main>
      <router-view/>
    </v-main>
  </v-app>


  </div>
</template>

<script>
import App from '@/App.vue'


  export default {
  components: { App },

   data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
    
  }
</script>

<style lang="scss" scoped>

</style>