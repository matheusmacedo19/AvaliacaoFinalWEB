const db = require('../dbConfig');


exports.getHistoricById = async (id) => {
    const result = await db.query('SELECT * FROM Historico WHERE historicoId = $1', [id]);
    return result.rows[0];
};

exports.getHistorics = async () => {
    const result = await db.query('SELECT * FROM Historico');
    return result.rows;
};

exports.create = async (historico) => {
    
    const result = await db.query('INSERT INTO Historico (usuarioId, listaTroca) VALUES ($1, $2) RETURNING *;', 
    [historico.usuarioId, historico.listaTroca]);
    return result.rows[0];
};

exports.updateHistoricById = async (historico) => {
    
    const result = await db.query('UPDATE Historico SET usuarioId = $1, listaTroca= $2 WHERE historicoId = $3 RETURNING *;', 
    [historico.usuarioId, historico.listaTroca, historico.historicoId]);

    return result.rows[0]
};

exports.removeHistoricById = async (id) => {
    
    await db.query('DELETE FROM Historico WHERE historicoId = $1', [id])           

};