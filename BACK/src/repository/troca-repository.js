const db = require('../dbConfig');


exports.getExchangeById = async (id) => {
    const result = await db.query('SELECT * FROM Troca WHERE trocaId = $1', [id]);
    return result.rows[0];
};

exports.getExchanges = async () => {
    const result = await db.query('SELECT * FROM Troca');
    return result.rows;
};

exports.create = async (troca) => {
    
    const result = await db.query('INSERT INTO Troca (usuarioId1, usuarioId2, produtoIdUsuario1, produtoIdUsario2, valor) VALUES ($1, $2, $3, $4, $5) RETURNING *;', 
    [troca.usuarioId1, troca.usuarioId2, troca.produtoIdUsuario1, troca.produtoIdUsuario2, valor]);
    return result.rows[0];
};

exports.updateExchangeById = async (troca) => {
    
    const result = await db.query('UPDATE Troca SET usuarioId1 = $1, usuarioId2= $2, produtoIdUsuario1 = $3, produtoIdUsario2 = $4, valor = $5 WHERE trocaId = $6 RETURNING *;', 
    [troca.usuarioId1, troca.usuarioId2, troca.produtoIdUsuario1, troca.produtoIdUsuario2, troca.valor, troca.trocaId]);

    return result.rows[0]
};

exports.removeExchangeById = async (id) => {
    
    await db.query('DELETE FROM Troca WHERE trocaId = $1', [id])           

};