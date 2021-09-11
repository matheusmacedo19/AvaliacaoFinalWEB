<template>
  <div id="app">
    <div id="nav">
      <router-link to="/loginvue">Login |</router-link> 
      <router-link to="/usuario">Usuarios |</router-link> 
      <router-link v-if="logged" to="/produtos">Produtos |</router-link> 
      <router-link v-if="logged" to="/trocas">Trocas |</router-link> 
      <router-link to="/">About |</router-link> 
      <a v-if="logged" href="/loginvue" @click="logout()">Logout</a>

    </div>
    <router-view />
  </div>
</template>

<script>
const api = require("./services/api")
export default {
  name: "Login",
  data() {
    return {
      logged: false,
    };
  },
  methods: {
    logout() {
      api.get("http://localhost:3333/users/logout").then((result) => {
        this.logged = false;
        console.log(this.logged);
        sessionStorage.removeItem("usuario");
      });
    },
  },
  created() {
    if (sessionStorage.getItem("usuario")) {
      this.logged = true;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
