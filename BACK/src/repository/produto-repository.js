const db = require('../dbConfig');


exports.getProductById = async (id) => {
    const result = await db.query('SELECT * FROM Produto WHERE produtoId = $1', [id]);
    return result.rows[0];
};

exports.getProducts = async () => {
    const result = await db.query('SELECT * FROM Produto');
    return result.rows;
};

exports.create = async (produto) => {
    
    const result = await db.query('INSERT INTO Usuario (usuarioId, nome, descricao, foto) VALUES ($1, $2, $3, $4) RETURNING *;', 
    [produto.usuarioId, produto.nome, produto.descricao, produto.foto]);
    return result.rows[0];
};

exports.updateProductById = async (produto) => {
    
    const result = await db.query('UPDATE Usuario SET usuarioId = $1, nome= $2, descricao = $3, foto = $4 WHERE produtoId = $5 RETURNING *;', 
    [produto.usuarioId, produto.nome, produto.descricao, produto.foto, produto.Id]);

    return result.rows[0]
};

exports.removeProductById = async (id) => {
    
    await db.query('DELETE FROM produto WHERE produtoId = $1', [id])           

};