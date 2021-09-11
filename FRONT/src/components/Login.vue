<template>
<div class="login">
  <form class="form">
          <h1>login</h1>
          <br />

          <div class="form-group">
        <label for="email">Email</label>
        <input
          v-model="email"
          type="text"
          class="form-control"
          id="eemail"
          placeholder="Email"
        />
      </div>
      <div class="form-group">
        <label for="endereco">Senha</label>
        <input
          v-model="senha"
          type="password"
          class="form-control"
          id="senha"
          placeholder="senha"
        />
      </div>

          <button type="button" @click="logar()" class="btnEntrar"  id="login">Entrar</button>

          <br /><br />

          <router-link class="cadastroUsuario" to="/usuario"
            >Não tem login ? Cadastre-se aqui</router-link
          >
          <br /><br />
          <router-link class="home" to="/"> Pagina Inicial</router-link>
        </form>
</div>
</template>

<script>
const api = require("../services/api");
export default {
  name: "Login",
  data() {
    return {
      email: "",
      senha: "",
      baseLogin: "http://localhost:3333/users/login",
    };
  },
  methods: {
    logar: function() {
      api
        .post(
          this.baseLogin,
          {
            email: this.email,
            senha: this.senha,
          },
          { withCredentials: true }
        )
        .then((result) => {
          let usuarioId = this.getCookie("usuarioId");
          if (usuarioId) {
            sessionStorage.setItem("usuario", JSON.stringify(result.data));
          }
          this.$router.go();
        });
    },
    getCookie(name) {
      let match = document.cookie.match(new RegExp(name + "=([^;]+)"));
      if (match) return match[1];
      return;
    },
  },
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
