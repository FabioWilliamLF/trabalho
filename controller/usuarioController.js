const usuarioService = require("../service/usuarioService.js")

//listar usuários
function listar(req, res){
    res.json(usuarioService.listar())
}

//buscar por ID
function buscarPorId(req, res) {
    const id = +req.params.id;
    try {
        res.json(usuarioService.buscarPorId(id));
    } catch(err) {
        res.status(err.id).json(err)
    }
}

//Inserir
function inserir(req, res) {
    const usuario = req.body;
    try{
        const usuarioInserido = usuarioService.inserir(usuario);
        res.status(201).json(usuarioInserido)
    }
    catch(err){
        res.status(err.id).json(err)
    }
}

//Atualizar
function atualizar(req, res) {
    const id = +req.params.id;
    const usuario = req.body;
    try{
        const usuarioAtualizado = usuarioService.atualizar(id, usuario);
        res.json(usuarioAtualizado)
    }
    catch(err) {
        res.status(err.id).json(err)
    }
}


//Deletar
function deletar(req, res) {
    const id = +req.params.id;
    try {
        res.json(usuarioService.deletar(id));
    } catch(err) {
        res.status(err.id).json(err)
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}






