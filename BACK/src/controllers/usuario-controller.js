const Usuario = require('../models/usuario-model');
const usuarioRepository = require('../repository/usuario-repository');

module.exports = {
    getUserById: async (req, res) => {
        await usuarioRepository.getUserById(req.params.id).then(result => res.json(result));
    },

    getUsers: async (req, res) => {
        await usuarioRepository.getUsers().then(result => res.json(result));
    },

    create: async (req, res) => {
        let usuario = new Usuario(req.body.nome, req.body.endereco, req.body.email, req.body.senha, req.body.saldo);
        
        await usuarioRepository.create(usuario);


        res.json(usuario);
    },
 
    updateUserById: async (req, res) => {

        let usuario = new Usuario(req.body.nome, req.body.endereco, req.body.email, req.body.senha, req.body.saldo);
        
        await usuarioRepository.updateUserById(usuario);

        res.json(usuario);
    },

    removeUserById: async (req, res) => {
        await usuarioRepository.removeUserById(req.params.id).then(res.json('Usuario removido com sucesso.'));
    }
}