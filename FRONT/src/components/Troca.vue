<script>
/*
<template>
  <div class="troca">
    <h1>Cadastrar troca</h1>
    <form style="width: 50%">
      <div class="form-group">
        <label for="usuario1">Usuario1</label>
        <input
          v-model="Usuario1"
          type="text"
          class="form-control"
          id="usuario1"
          placeholder="usuario1"
        />
      </div>
      <div class="form-group">
        <label for="usuario2">Usuario2</label>
        <input
          v-model="usuario2"
          type="text"
          class="form-control"
          id="usuario2"
          placeholder="usuario2"
        />
      </div>
      <div class="form-group">
        <label for="produto1">Produto1</label>
        <input
          v-model="produto1"
          type="text"
          class="form-control"
          id="produto1"
          placeholder="produto1"
        />
      </div>
      <div class="form-group">
        <label for="produto2">Produto2</label>
        <input
          v-model="produto2"
          type="text"
          class="form-control"
          id="produto2"
          placeholder="produto2"
        />
      </div>

      <div class="form-group">
        <label for="valor">Valor</label>
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
            <strong>Cadastrada</strong>
            <p>
              <strong>Usuario1: </strong> {{ newTroca.usuario1 }}
              <strong>Usuario2: </strong> {{ newTroca.usuario2 }}
              <strong>Produto1: </strong>{{ newTroca.produto1 }} 
              <strong>Produto2: </strong>{{ newTroca.produto2 }}
              <strong>Valor: </strong>{{newTroca.valor}}
            </p>
          </div>
        </div>
    </form>
  </div>
</template>

<script>
const api = require("../services/api");

export default {
  name: "Usuario",
  data() {
    return {
      usuario1: "",
      usuario2: "",
      produto1: "",
      produto2: "",
      valor: "",
      troca: {},
      newTroca: null,
    };
  },
  methods: {
    postTroca() {
      this.troca.usuarioId1 = this.usuario1;
      this.troca.usuarioId2 = this.usuario2;
      this.troca.produtoIdUsuarios1 = this.produto1;
      this.troca.produto2 = this.produto2;
      this.troca.valor = this.valor;
     console.log(this.troca);
      api.post("troca", this.troca).then((result) => {
        this.newTroca = result.data;
      });
    }
  },
};*/
</script>

<style>
.troca {
    display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
