
const soletrar = (palavra: string): string => {
    const arrPalavras: string[] = palavra.split('');

    const palavraSoletrada: string = arrPalavras.join('-');

    return palavraSoletrada
}

console.log(soletrar('programador'));
