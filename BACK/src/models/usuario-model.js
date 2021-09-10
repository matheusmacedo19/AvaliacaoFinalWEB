module.exports = class Usuario {
    constructor(nome, endereco, email, senha, saldo) {
        this.nome = nome;
        this.endereco = endereco;
        this.email = email;
        this.senha = senha;
        this.saldo = saldo;
    }
}