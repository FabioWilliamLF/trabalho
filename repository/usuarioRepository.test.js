const usuarioRepository = require("./usuarioRepository.js");

//cenario de sucesso
test("Quando inserir o usuário Carlos, deve retornar e conter na lista o usuario com id=1",
    () => {
    const usuarioEsperado = {
        id: 1,
        nome: "Carlos",
        email: "carlos@gmail.com",
        senha: "senha",
        dividas: "conta de agua, conta de luz" 
    }
    const usuarioInserido = usuarioRepository.inserir({
        nome: "Carlos",
        email: "carlos@gmail.com",
        senha: "senha",
        dividas: "conta de agua, conta de luz" 
    });
    expect(usuarioInserido).toEqual(usuarioEsperado);
    expect(usuarioRepository.listar()).toContainEqual(usuarioEsperado);
})

//cenário de excessão
test("Quando inserir o usuário Carlos sem email, não deve retornar e não insere na lista",
() => {
    const usuarioErrado = {
        id: 1,
        nome: "Carlos",
        senha: "senha",
        dividas: "conta de agua, conta de luz" 
    }
    const usuarioInserido = usuarioRepository.inserir({
        nome: "Carlos",
        senha: "senha",
        dividas: "conta de agua, conta de luz" 
    });
    expect(usuarioInserido).toEqual(undefined);
    expect(usuarioRepository.listar()).toContainEqual(usuarioErrado);
})

//cenário de sucesso -buscarporID()
test('Quando buscar por um id existente, deve retornar o dado corretamente', () => {
    const usuarioInserido = usuarioRepository.inserir({
        nome: "Edu",
        email: "Edu@gmail.com",
        senha: "senha",
        dividas: "conta de agua, conta de luz" 
    });
    const resultado = usuarioRepository.buscarPorId(usuarioInserido.id);
    expect(resultado).toBeDefined();
    expect(resultado.nome).toBe("Edu")
});

//Cenário de exeção - buscarPorId()
test("Quando buscar por id inexistente, deve retornar undefined", () => {
    const resultado = usuarioRepository.buscarPorId(10);
    expect(resultado).toBeDefined();
})

//cenário de sucesso - deletar()
test("Quando deletar um id existente, deve remover e retornar o dado", () => {
    const usuarioDeletadoEsperado = {
        nome: "Edu",
        email: "Edu@gmail.com",
        senha: "senha",
        dividas: "conta de agua, conta de luz" 
    };
    const quantidadeEsperada = 1;
    resultado = usuarioRepository.deletar(2);
    expect(resultado).toEqual(usuarioDeletadoEsperado);
    expect(usuarioRepository.listar().length).toBe(quantidadeEsperada);
})

//Cenario de exceção - deletar()
test('Quando deletar um produto com id inexistente, deve retornar undefined', () => {
    const resultado = usuarioRepository.deletar(10);
    expect(resultado).toBeDefined();
});
