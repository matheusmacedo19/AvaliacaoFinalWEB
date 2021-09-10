const client = require("../dbConfig");

async function createTables() {
 
    await client.connect();

    
    await client.query(
        "CREATE TABLE Usuario(usuarioId serial PRIMARY KEY UNIQUE NOT NULL, nome VARCHAR(50) NOT NULL, endereco VARCHAR(100), email VARCHAR(100) NOT NULL , senha VARCHAR(100) NOT NULL, saldo DECIMAL(10,2) )"
        );
        
    await client.query(
        "CREATE TABLE Produto(produtoId serial PRIMARY KEY UNIQUE NOT NULL, usuarioId BIGINT NOT NULL, nome VARCHAR(50) NOT NULL, descricao VARCHAR(50) NOT NULL, foto VARCHAR(100), FOREIGN KEY (usuarioId) REFERENCES Usuario(usuarioId) ON DELETE CASCADE)"
        );

    await client.query(
        "CREATE TABLE Troca(trocaId serial PRIMARY KEY UNIQUE NOT NULL, usuarioId1 BIGINT NOT NULL, usuarioId2 BIGINT NOT NULL, produtoId1 BIGINT NOT NULL, produtoId2 BIGINT NOT NULL, valorTroca DECIMAL(10,2), FOREIGN KEY (usuarioId1) REFERENCES Usuario(usuarioId) ON DELETE CASCADE, FOREIGN KEY (usuarioId2) REFERENCES Usuario(usuarioId) ON DELETE CASCADE, FOREIGN KEY (produtoId1) REFERENCES Produto(produtoId) ON DELETE CASCADE, FOREIGN KEY (produtoId2) REFERENCES Produto(produtoId) ON DELETE CASCADE)"
        );

    await client.query(
         "CREATE TABLE Historico(historicoId serial PRIMARY KEY UNIQUE NOT NULL, usuarioId BIGINT NOT NULL, listaTroca VARCHAR(MAX) NOT NULL, FOREIGN KEY (usuarioId) REFERENCES Usuario(usuarioId) ON DELETE CASCADE)"
     );


    await client.end();
    console.log("Tabelas Criadas!");

}

createTables();