const { Router } = require('express');
const {getUserById, getUsers, create, updateUserById, removeUserById} = require('../Controllers/usuario-controller');
//import {getUserById, getUsers, create, updateUserById, removeUserById} from '../Controllers/produto-controller';

const routes = Router();

//USUARIO
routes.get("/usuarios/", getUsers);
routes.get("/usuario/:id", getUserById);
routes.post("/usuario/", create);
routes.put("/usuario/:id", updateUserById);
routes.delete("/usuario/:id", removeUserById)

//PRODUTO
/*routes.get("/", getUsers);
routes.get("/:id", getUserById);
routes.post("/", create);
routes.put("/:id", updateUserById);
routes.delete("/:id", removeUserById)
*/


module.exports = routes;