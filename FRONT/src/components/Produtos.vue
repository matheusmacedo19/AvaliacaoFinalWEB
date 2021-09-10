<template>
  <div class="produtos">
    <h1>Cadastrar Produto</h1>
    <form style="width: 50%">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input
          v-model="nome"
          type="text"
          class="form-control"
          id="nome"
          placeholder="nome"
        />
      </div>
      <div class="form-group">
        <label for="descricao">Descrição</label>
        <input
          v-model="descricao"
          type="text"
          class="form-control"
          id="descricao"
          placeholder="descricao"
        />
      </div>
      <label id="title_img"> Imagem </label>
      <input type="file" id="file" ref="file" name="image"/> <br /><br />

      <button type="button" @click="postProduto()" class="btn btn-primary">
        Cadastrar Produto
      </button>
      <button type="button" @click="getProdutos()" class="btn btn-primary">
        Buscar Produtos
      </button>
      <button>
        Filtrar por nome 
      </button>
      <div v-if="newProduto != null" style="width: 100%">
          <div
            style="
              margin-top: 20px;
              border: solid 1px;
              border-color: #111;
              padding-top: 13px;
            "
          >
            <strong>Cadastrado</strong>
            <p>
              <strong>Nome: </strong> {{ newProduto.nome }}
              <strong>Endereco: </strong> {{ newProduto.descricao }}
            </p>
          </div>
        </div>
    <div
        style="
          margin-top: 20px;
          border: solid 1px;
          border-color: #111;
          padding-top: 13px;
        "
        v-for="produto in produtos"
        :key="produto.id"
      >
        <p>
          <strong>Nome: </strong>{{ produto.nome }} 
          <strong>Descrição: </strong> {{ produto.descricao }}
        </p>
      </div>
    </form>
  </div>
</template>

<script>
const api = require("../services/api");
export default {
  name: "Produtos",
  data() {
    return {
      usuarioId: "1",
      nome: "",
      descricao: "",
      produto: {},
      produtos: {},
      newProduto: null,
    };
  },
  methods: {
    postProduto() {
      this.produto.usuarioId = this.usuarioId;
      this.produto.nome = this.nome;
      this.produto.descricao = this.descricao;
      console.log(this.produto);
      api.post("produto", this.produto).then((result) => {
        this.newProduto = result.data;
      });
    },
    getProdutos() {
      api.get("produtos").then((result) => {
        this.produtos = result.data;
      });
    },
  },
};
</script>

<style>
.produtos {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>