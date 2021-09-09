module.exports = class Troca {
    constructor(usuarioId1, usuarioId2, produtoIdUsuario1, produtoIdUsuario2, valor) {
        this.usuarioId1 = usuarioId1;
        this.usuarioId2 = usuarioId2;
        this.produtoIdUsuario1 = produtoIdUsuario1;
        this.produtoIdUsuario2 = produtoIdUsuario2;
        this.valor = valor;
    }
}