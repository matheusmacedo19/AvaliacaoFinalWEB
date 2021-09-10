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
      <button type="button" @click="getUsuarioById()" class="btn btn-primary">
       Logar
      </button>
      <div v-if="carro != null" style="width: 100%">
        <div
          style="
            margin-top: 20px;
            border: solid 1px;
            border-color: #111;
            padding-top: 13px;
          "
        >
          <p>
            <strong>ID: </strong> {{ carro.id }} <strong>Nome: </strong>
            {{ Produto.nome }} <strong>Nome: </strong> {{ produto.nome }}
            <strong>Ano de Frabicação: </strong> {{ produto.descricao }}
            <strong>Ano do Modelo: </strong> {{ carro.anoModelo }}
            <strong>Data de Venda: </strong> {{ carro.dataVenda }}
          </p>
        </div>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  name: "BuscarProdutos",
  data() {
    return {
      produto: null,
      baseURI: "http://localhost:333/BACK/api/produtos",
    };
  },
  methods: {
    getAll() {
      this.$http.get(this.baseURI + "/").then((result) => {
        this.carro = result.data;
      });
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