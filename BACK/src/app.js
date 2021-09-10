const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const port = 3333;
const app = express();

app.use(express.json());

app.use(cors());

app.listen(port,() => console.log(`Server iniciado em "localhost:${port}"`));

app.use('/api', routes);
 
module.exports = app;