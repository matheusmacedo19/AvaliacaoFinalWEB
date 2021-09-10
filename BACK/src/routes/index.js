const express = require("express");
const router = express.Router();
const user = require('../Controllers/usuario-controller');
const produto = require('../Controllers/produto-controller');

//USUARIO
router.get("/usuarios/", user.getUsers);
router.get("/usuario/:id", user.getUserById);
router.post("/usuario/", user.create);
router.put("/usuario/:id", user.updateUserById);
router.delete("/usuario/:id", user.removeUserById)

//PRODUTO
router.get("/produtos", produto.getProducts);
router.get("/produto/:id", produto.getProductById);
router.post("/produto/", produto.create);
router.put("/produto/:id", produto.updateProductById);
router.delete("/produto/:id", produto.removeProductById)


module.exports = router;