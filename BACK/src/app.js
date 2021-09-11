const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const port = 3333;
const app = express();
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const users = require("./routes/user-route");
require("dotenv/config");


app.use(express.json());

app.use(cors({ credentials: true, origin: true }));

app.use(cookieParser());

app.use(sessions({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
})
);

app.use('/api', routes);
app.use("/users", users);
app.use("/ok", (req, res, next) => {
    session = req.session;
    
    if (session.user == 1) {
        res.send("ok");
    } else {
        res.send("Not login");
    }
});
app.listen(port,() => console.log(`Server iniciado em "localhost:${port}"`));
 
module.exports = app;