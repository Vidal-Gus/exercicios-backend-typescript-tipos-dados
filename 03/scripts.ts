
function tabuada(lista: number[]) {

    for (let numero of lista) {
        for (let i = 0; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`)
        }
        console.log('--------------');
    }
}

tabuada([1, 5, 2]);
