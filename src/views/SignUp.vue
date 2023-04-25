<template>
  <div class="card">
    <v-row>
      <v-col class="text-center">
        <div style="display: flex;
          justify-content: center;
          align-items: center;">
          <v-avatar color="primary" size="56" class="text-center">
            <v-img src="@/assets/logo.png"></v-img>
          </v-avatar>
        </div>

        <v-text-field label="Username" v-model="username"></v-text-field>
        <v-text-field label="Password" type="password" v-model="password"></v-text-field>
        <v-btn block class="base-inverted" @click="createUser()">
          SignUp
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },

  methods: {
    createUser() {
      axios.post('http://192.168.1.6:3000/user/signup', {
        username: this.username,
        password: this.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(response.data);
        alert("User created successfully");
        this.$router.push('/login'); // Redirect to login page
      })
      .catch(error => {
        console.log(error);
        if (error.response && error.response.status === 409) {
          alert(this.error = "Username already exists.");
        } else {
          alert(this.error = "An error occurred. Please try again later.");
        }
      });
    }
  }
};
</script>

<style scoped>
.card {
  width: 400px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: center;
}
</style>

