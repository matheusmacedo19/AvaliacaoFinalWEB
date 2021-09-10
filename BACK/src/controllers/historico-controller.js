const Historico = require('../models/historico-model');
const historicoRepository = require('../repository/historico-repository');

module.exports = {
    getHistoricById: async (req, res) => {
        await historicoRepository.getHistoricById(req.params.id).then(result => res.json(result));
    },

    getHistorics: async (req, res) => {
        await historicoRepository.getHistorics().then(result => res.json(result));
    },

    create: async (req, res) => {
        let historico = new Historico(req.body.usuarioId, req.body.listaTroca);
      
        await historicoRepository.create(historico);

        res.json(historico);
    },
 
    updateHistoricById: async (req, res) => {

        let historico = new Historico(req.body.usuarioId, req.body.listaTroca);
        
        await historicoRepository.updateHistoricById(historico);

        res.json(historico);
    },

    removeHistoricById: async (req, res) => {
        await historicoRepository.removeHistoricById(req.params.id).then(res.json('Historico removido com sucesso.'));
    }
}