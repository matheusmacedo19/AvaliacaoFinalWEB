<template>
<div class="login">
  <form class="form">
          <h1>login</h1>
          <br />

          <label class="label-input" for="">
            <input
              type="text"
              id="email"
              name="email"
              v-model="email"
              placeholder="email"
              autofocus
            />
          </label>

          <label class="label-input" for="">
            <input
              type="password"
              id="senha"
              name="senha"
              v-model="senha"
              placeholder="Senha"
            />
          </label>

          <button type="submit" class="btnEntrar" id="login">Entrar</button>

          <br /><br />

          <router-link class="cadastroConta" to="/usuario"
            >Não tem login ? Cadastre-se aqui</router-link
          >
          <br /><br />
          <router-link class="home" to="/"> Pagina Inicial</router-link>
        </form>
</div>
</template>

<script>
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
      axios
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
            localStorage.setItem("usuario", JSON.stringify(result.data));
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
