<template>
  <div class="login">
    <h1>Login</h1>
     <div class="centralizar">
    <form style="width: 100%">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          v-model="email"
          type="text"
          class="form-control"
          id="email"
          placeholder="email"
        />
      </div>
      <div class="form-group">
        <label for="senha">Senha</label>
        <input
          v-model="descricao"
          type="password"
          class="form-control"
          id="senha"
        />
      </div>
      <div class="form-group">
      </div>
       <br /><br />
          <router-link class="home" to="/produtos"> Redirecionar</router-link>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
  }
  },
  methods: {
  }
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.centralizar {
   width: 50%;
}
</style>
