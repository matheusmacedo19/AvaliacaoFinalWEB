module.exports = class Usuario {
    constructor(id, nome, endereco, email, senha, saldo) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.email = email;
        this.senha = senha;
        this.saldo = saldo;
    }
}