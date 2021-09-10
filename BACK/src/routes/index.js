const express = require("express");
const router = express.Router();
const user = require('../Controllers/usuario-controller');
const produto = require('../Controllers/produto-controller');
const upload = require("../services/multerConfig");
const troca = require('../Controllers/troca-controller');
const historico = require('../Controllers/historico-controller');


//USUARIO
router.get("/usuarios/", user.getUsers);
router.get("/usuario/:id", user.getUserById);
router.post("/usuario/", user.create);
router.put("/usuario/:id", user.updateUserById);
router.delete("/usuario/:id", user.removeUserById)

//PRODUTO
router.get("/produtos", produto.getProducts);
router.get("/produto/:id", produto.getProductById);
router.post("/produto/", upload.single('avatar'), produto.create);
router.put("/produto/:id", produto.updateProductById);
router.delete("/produto/:id", produto.removeProductById)

//TROCA
router.get("/trocas", troca.getExchanges);
router.get("/troca/:id", troca.getExchangeById);
router.post("/troca/",  troca.create);
router.put("/troca/:id", troca.updateExchangeById);
router.delete("/troca/:id", troca.removeExchangeById)

//HISTORICO
router.get("/historicos", historico.getHistorics);
router.get("/historico/:id", historico.getHistoricById);
router.post("/historico/",  historico.create);
router.put("/historico/:id", historico.updateHistoricById);
router.delete("/historico/:id", historico.removeHistoricById)


module.exports = router;