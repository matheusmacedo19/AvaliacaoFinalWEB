const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const port = 3333;


const app = express();

app.use(express.json());

app.use(cors());

app.use('/api', routes);

app.listen(port,() => console.log(`Server iniciado em "localhost:${port}"`));
 
module.exports = app;