module.exports = class Produto {
    constructor(usuarioId, nome, descricao, valor, foto) {
        this.usuarioId = usuarioId;
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor;
        this.foto = foto;
    }
}
