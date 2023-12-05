const usuarios: {
    nome: string,
    idade: number,
    status: boolean,
}[] = [
        {
            nome: "Guido",
            idade: 32,
            status: true,
        },
        {
            nome: "Dani",
            idade: 30,
            status: true,
        },
        {
            nome: "João",
            idade: 40,
            status: false,
        },
        {
            nome: "Guilherme",
            idade: 29,
            status: true,
        },
        {
            nome: "Ana",
            idade: 18,
            status: false,
        },
        {
            nome: "José",
            idade: 28,
            status: false,
        },
    ]

const filtrarUsuarios = (lista: { nome: string, idade: number, status: boolean }[], busca: string): {}[] => {
    let usuariosEncontrados: {}[] = [];

    for (let usuario of lista) {
        if (usuario.nome.toLowerCase().includes(busca)) {
            usuariosEncontrados.push(usuario)
        }
    }

    return usuariosEncontrados

}

console.log(filtrarUsuarios(usuarios, "Jo"));
