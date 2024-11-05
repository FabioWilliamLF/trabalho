const usuarioRepository = require("../repository/usuarioRepository.js")

function listar() {
    return usuarioRepository.listar();
}

function inserir(usuario) {
    if (usuario && usuario.nome && usuario.email && usuario.senha && usuario.dividas) {
        return usuarioRepository.inserir(usuario);
    }
    else {
        throw {id: 400, msg: "Usuario sem dados corretos"}
    }
    
}

function buscarPorId(id) {
    let usuario = usuarioRepository.buscarPorId(id);
    if(usuario) {
        return usuario;
    } else {
        throw {id: 404, msg: "Usuario não encontrado"}
    }
}

function atualizar(id, usuario) {
    if (usuario && usuario.nome && usuario.email && usuario.senha && usuario.dividas) {
        const usuarioAtualizado = usuarioRepository.atualizar(id, usuario);
        if(usuarioAtualizado) {
            return usuarioAtualizado;
        }
        else {
            throw {id: 404, msg: "Usuario não encontrado"};
        }
    } else {
        throw {id: 400, msg: "Usuario sem dados corretos"};
    }
}

function deletar(id) {
    let usuario = usuarioRepository.deletar(id);
    if(usuario) {
        return usuario;
    }
    else {
        throw { id: 404, msg: "Usuario não encontrado!" }
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}