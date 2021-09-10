const Produto = require('../models/produto-model');
const produtoRepository = require('../repository/produto-repository');

module.exports = {
    getProductById: async (req, res) => {
        await produtoRepository.getProductById(req.params.id).then(result => res.json(result));
    },

    getProducts: async (req, res) => {
        await produtoRepository.getProducts().then(result => res.json(result));
    },

    create: async (req, res) => {
        
        let foto = req.file ? `uploads/${req.file.originalname}` : '';
        let produto = new Produto(req.body.usuarioId, req.body.nome, req.body.descricao, foto);

        await produtoRepository.create(produto);

        res.json(produto);
    },
 
    updateProductById: async (req, res) => {

        let produto = new Produto(req.body.usuarioId, req.body.nome, req.body.descricao);
        
        await produtoRepository.updateProductById(produto);

        res.json(produto);
    },

    removeProductById: async (req, res) => {
        await produtoRepository.removeProductById(req.params.id).then(res.json('Produto removido com sucesso.'));
    }
}