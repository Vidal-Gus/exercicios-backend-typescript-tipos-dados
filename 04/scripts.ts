

function etiquetar(objetoProduto: { produto: string, lote: number, ano: number, qtd: number }): string[] {
    let listaEtiquetas: string[] = []

    //Continuar daqui
    for (let i = 1; i <= objetoProduto.qtd; i++) {
        let formatarQtd = `${i}`.padStart(3, '0');
        listaEtiquetas.push(`${objetoProduto.lote}-${objetoProduto.ano}-${formatarQtd}`)
    }

    return listaEtiquetas
}

console.log(etiquetar({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}));

