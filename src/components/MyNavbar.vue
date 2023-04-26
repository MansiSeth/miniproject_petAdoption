<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <img src="@/assets/logo.png" alt="Logo" />
      <h1 class="navbar-company-name">Tail-or Made</h1>
    </div>
    <button class="navbar-toggle" @click="toggleMenu">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <ul class="navbar-links" id="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/shop">Shop</router-link></li>
      <li><router-link to="/donate">Donate</router-link></li>
      <li><router-link to="/inventory">Inventory</router-link></li>
    </ul>

    <button class="LogIn" @click="$router.push('/login')">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </button>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      const nav =document.getElementById('nav-links');
      let state=nav.style.display;
      if (state === 'flex') {
                nav.style.display = 'none';
            } else {
               nav.style.display = 'flex';
            }
     
    },
  },
};
</script>




<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
}

.navbar-logo {
  display: flex;
  align-items: center;
}


.navbar-logo img {
  height: 40px;
  margin-right: 10px;
}

.navbar-company-name {
  font-size: 24px;
  margin: 0;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.navbar-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-links li {
  margin-right: 20px;
}

.navbar-links li:last-child {
  margin-right: 0;
}

.navbar-links li a {
  text-decoration: none;
  color: #333;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.navbar-links li a:hover {
  color: #ffbd59;
}

.LogIn {
  background: #FFBD59;
    background-image: linear-gradient(to bottom, #FFBD59, #e6bb7a);
    border-radius: 50px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: black;
    font-size: 13px;
    text-decoration: none;
    border-width: 0;
    text-align: center;
    cursor: pointer;
    width: auto;
    height: 66px;
}

.LogIn:hover {
  background: #e0aa5a;
  background-image: -webkit-linear-gradient(top, #e0aa5a, #f5b55a);
  background-image: -moz-linear-gradient(top, #e0aa5a, #f5b55a);
  background-image: -ms-linear-gradient(top, #e0aa5a, #f5b55a);
  background-image: -o-linear-gradient(top, #e0aa5a, #f5b55a);
  background-image: linear-gradient(to bottom, #e0aa5a, #f5b55a);
  text-decoration: none;
}

@media only screen and (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: center;
  }

  .navbar-logo {
    margin: 10px 0;
  }

  .navbar-links {
    display: none;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 0;
    width: 100%;
  }

  .navbar-links li {
    margin: 10px 0;
  }

  .navbar-toggle {
    display: block;
    position: relative;
    top: 0;
    right: 0;
    margin: 10px;
    padding: 10px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .icon-bar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    margin: 4px 0;
    background-color: #333;
  }

  .show-menu .navbar-links {
    display: flex;
  }
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
}

.navbar-logo {
  display: flex;
  align-items: center;
}

.navbar-logo img {
  height: 40px;
  margin-right: 10px;
}

.navbar-company-name {
  font-size: 24px;
  margin: 0;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.navbar-links {
  display: flex;
  list-style: none;
}

@media only screen and (min-width: 768px) {
  .navbar-links {
    display: flex !important;
    margin: auto !important;
  }
}



</style>
