let listaUsuarios = [];
let idUsuario = 1;

function listar() {
  return listaUsuarios;
}

function inserir(usuario) {
  if(!usuario || !usuario.nome || !usuario.email || !usuario.senha || !usuario.dividas) {
    return;
  }  
    usuario.id = idUsuario++;
    listaUsuarios.push(usuario);
    return usuario;
}

function buscarPorId(id) {
    return listaUsuarios.find(usuario => usuario.id === id);
    }

function atualizar(id, usuarioAtualizado) {
    if (!usuarioAtualizado || !usuarioAtualizado.nome || !usuarioAtualizado.email || !usuarioAtualizado.senha || !usuarioAtualizado.dividas) {
      return;
    }
    let indice = listaUsuarios.findIndex(usuario => usuario.id === id);
    if (indice === -1) {
      return;
    }
    usuarioAtualizado.id = id;
    listaUsuarios[indice] = usuarioAtualizado;
    return usuarioAtualizado;
    }


function deletar(id) {
    let indice = listaUsuarios.findIndex(usuario => usuario.id === id);
    if (indice === -1) {
      return;
    }
    listaUsuarios.splice(indice, 1);
    }

function pesquisarPorEmail(email) {
    return listaUsuarios.find(usuario => usuario.email === email);
    }

function pesquisarPorNomeLike(nome) {
    return listaUsuarios.filter( (usuario) => {
        const nomeUpper = usuario.nome.toUpperCase();
        const nomeFiltroUpper = nome.toUpperCase();
        return nomeUpper.includes(nomeFiltroUpper);
    });
    }


module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar,
    pesquisarPorEmail,
    pesquisarPorNomeLike
};