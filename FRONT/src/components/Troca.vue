<template>
  <div class="produtos">
    <h1>Cadastrar Troca</h1>
    <form style="width: 50%">
      <button type="button" @click="getUsuarios()" class="btn btn-primary">
        Buscar Usuarios
      </button>
      <button type="button" @click="getProdutos()" class="btn btn-primary">
        Buscar Produtos
      </button>
      <div class="form-group">
        <label for="nome">Nome</label>
        <input
          v-model="usuario2"
          type="text"
          class="form-control"
          id="usuario2"
          placeholder="usuario"
        />
      </div>
      <div class="form-group">
        <label for="descricao">produto</label>
        <input
          v-model="produto2"
          type="text"
          class="form-control"
          id="produto2"
          placeholder="produto"
        />
      </div>
      <div class="form-group">
        <label for="descricao">Valor</label>
        <input
          v-model="valor"
          type="text"
          class="form-control"
          id="valor"
          placeholder="valor"
        />
      </div>

      <button type="button" @click="postTroca()" class="btn btn-primary">
        Cadastrar Troca
      </button>
      <div v-if="newTroca != null" style="width: 100%">
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
            <strong>Produtos: </strong> {{ newTroca.produto1 }}
            <strong> </strong> {{ newTroca.produto2 }}
            <strong>Abatimento: </strong> {{ newTroca.valor }}
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
        v-for="troca in trocas" :key="troca.id"
      >
        <p>
          <strong>Produtos: </strong>{{ troca.nome }}
          <strong>Descrição: </strong> {{ produto.descricao }}
          <strong>Endereco: </strong> {{ newProduto.valor }}
        </p>
      </div>
      <div
        style="
          margin-top: 20px;
          border: solid 1px;
          border-color: #111;
          padding-top: 13px;
        "
        v-for="usuario in usuarios"
        :key="usuario.id"
      >
     
        <p>
          <strong>Nome:</strong>{{ usuario.nome }} 
          <strong>Saldo:</strong> {{ usuario.saldo }}
        </p> 
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
          <strong>Nome:</strong>{{ produto.nome }} 
          <strong>Valor:</strong> {{ produto.valor }}
        </p> 
      </div>
    </form>
  </div>
</template>

<script>
const api = require("../services/api");
export default {
  name: "Troca",
  data() {
    return {
      usuario:{
        nome:"",
        saldo:""
      },
      produto:{
        nome:"",
        valor:""
      },
      usuarioId1: "",
      usuarioId2: "",
      produtoIdUser1: "",
      produtoIdUser2:"",
      troca: {},
      produtos:[],
      usuarios:[],
      trocas:[],
      newTroca: null,
    };
  },
  methods: {
    postTroca() {
      
      this.troca.usuarioId1 = JSON.parse(sessionStorage.getItem("usuario")).usuarioid;
      this.troca.usuarioId2 = this.nome;
      this.troca.produtoIdUser1 = this.descricao;
      this.troca.produtoIdUser1 = this.valor;
      this.troca.valor = this.valor;
      
      if(this.troca.valor < JSON.parse(sessionStorage.getItem("usuario")).saldo){
        api.post("troca", this.troca).then((Response) => {
          this.trocas.push(Response.data);
        });
      }else{
        alert("Saldo insuficiente para troca.")
      }
    },
    getUsuarios(){
      api.get("usuarios").then((result) => {
        result.data.forEach((element) => {
          this.usuarios.push(element);
        })
      });
    },
    getProdutos() {
      var usuario = JSON.parse(sessionStorage.getItem("usuario"));

      api.get("produtos").then((Response) => {
        Response.data.forEach((element) => {
          if (element.usuarioid == usuario.usuarioid) {
            this.produtos.push(element);
            console.log(this.produtos);
          }
        });
      });
    },
  },
};
</script>
<style>
.troca {
    display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
