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
            <v-btn block class="base-inverted" @click="authenticate()">
                Log In
            </v-btn>

            <div style="display: flex;
  justify-content: center;
  align-items: center; padding:10px;">
                <v-btn class="ma-2" outlined color="indigo" @click="$router.push('/signup')">Sign Up</v-btn>
            </div>

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
  authenticate() {
  axios.post('http://192.168.1.6:3000/user/login', {
  username: this.username,
  password: this.password
}, {
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  console.log(response.data);
  alert("Logged in successfully");
  this.isLoggedIn = true;
  this.userInfo = response.data;
  this.$router.push('/');
  this.$emit('login-successful');


})
.catch(error => {
  console.log(error);
  alert(this.error = "Authentication failed. Please check your username and password.");
});

}
    }}
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
