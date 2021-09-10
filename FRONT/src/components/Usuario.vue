<template>
  <div class="usuario">
    <h1>Cadastrar Usuario</h1>
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
        <label for="endereco">Endereco</label>
        <input
          v-model="endereco"
          type="text"
          class="form-control"
          id="endereco"
          placeholder="endereco"
        />
      </div>
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
          v-model="senha"
          type="password"
          class="form-control"
          id="senha"
        />
      </div>

      <div class="form-group">
        <label for="saldo">Saldo</label>
        <input
          v-model="saldo"
          type="text"
          class="form-control"
          id="saldo"
          placeholder="saldo"
        />
      </div>

      <button type="button" @click="postUsuario()" class="btn btn-primary">
        Cadastrar Usuario
      </button>
      <button type="button" @click="getUsuarios()" class="btn btn-primary">
        Buscar Usuarios
      </button>
      <div v-if="newUsuario != null" style="width: 100%">
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
              <strong>Nome: </strong> {{ newUsuario.nome }}
              <strong>Endereco: </strong> {{ newUsuario.endereco }}
              <strong>Email: </strong>{{ newUsuario.email }} 
              <strong>Saldo: </strong>{{ newUsuario.saldo }}
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
        v-for="usuario in usuarios"
        :key="usuario.id"
      >
        <p>
          <strong>Nome: </strong>{{ usuario.nome }} 
          <strong>Endereço: </strong> {{ usuario.endereco }}
          <strong>Email</strong> {{ usuario.email }}
        </p>
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
      nome: "",
      endereco: "",
      email: "",
      senha: "",
      saldo: "",
      usuario: {},
      usuarios: {},
      newUsuario: null,
    };
  },
  methods: {
    postUsuario() {
      this.usuario.nome = this.nome;
      this.usuario.endereco = this.endereco;
      this.usuario.email = this.email;
      this.usuario.senha = this.senha;
      this.usuario.saldo = this.saldo;
     
      api.post("usuario", this.usuario).then((result) => {
        this.newUsuario = result.data;
      });
    },
    getUsuarios(){
        api.get("usuarios").then((result) => {
        this.usuarios = result.data;
      });
    }
  },
};
</script>

<style>
.usuario {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>