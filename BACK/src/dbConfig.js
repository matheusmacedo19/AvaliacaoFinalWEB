const pg = require("pg");

const client = new pg.Pool({
    user: "postgres",
    password: "matheus" ,
    host: "localhost",
    database: "afweb",
    port: 8080,
})

module.exports = client;