module.exports = class Produto {
    constructor(id, usuarioId, nome, descricao, foto) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.nome = nome;
        this.descricao = descricao;
        this.foto = foto;
    }
}
