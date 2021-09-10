const Troca = require('../models/troca-model');
const trocaRepository = require('../repository/troca-repository');

module.exports = {
    getExchangeById: async (req, res) => {
        await trocaRepository.getExchangeById(req.params.id).then(result => res.json(result));
    },

    getExchanges: async (req, res) => {
        await trocaRepository.getExchanges().then(result => res.json(result));
    },

    create: async (req, res) => {
        let troca = new Troca(req.body.usuarioId1, req.body.usuarioId2, req.body.produtoIdUsuario1, req.body.produtoIdUsuario2, req.body.valor);
      
        await trocaRepository.create(troca);

        res.json(troca);
    },
 
    updateExchangeById: async (req, res) => {

        let troca = new Troca(req.body.usuarioId1, req.body.usuarioId2, req.body.produtoIdUsuario1, req.body.produtoIdUsuario2, req.body.valor);
        
        await trocaRepository.updateExchangeById(troca);

        res.json(troca);
    },

    removeExchangeById: async (req, res) => {
        await trocaRepository.removeExchangeById(req.params.id).then(res.json('Troca removida com sucesso.'));
    }
}