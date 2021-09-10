const db = require('../dbConfig');


exports.getUserById = async (id) => {
    const result = await db.query('SELECT * FROM Usuario WHERE usuarioId = $1', [id]);
    return result.rows[0];
};

exports.getUsers = async () => {
    const result = await db.query('SELECT * FROM Usuario');
    return result.rows;
};

exports.create = async (usuario) => {
    
    const result = await db.query('INSERT INTO Usuario (nome, endereco, email, senha, saldo) VALUES ($1, $2, $3, $4, $5) RETURNING *;', 
    [usuario.nome, usuario.endereco, usuario.email, usuario.senha, usuario.saldo]);
  
    return result.rows[0];
};

exports.updateUserById = async (usuario) => {
    
    const result = await db.query('UPDATE Usuario SET nome = $1, endereco= $2, email = $3, senha = $4, saldo = $5 WHERE usuarioId = $6 RETURNING *;', 
    [usuario.nome,usuario.endereco, usuario.email, usuario.senha, usuario.saldo, usuario.id]);

    return result.rows[0]
};

exports.removeUserById = async (id) => {
    
    await db.query('DELETE FROM usuario WHERE usuarioId = $1', [id])           

};