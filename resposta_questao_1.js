const valorOrdenado = (valor) => {
    if (Number.isInteger(valor)) {
        const quebra = valor.toString().split('');
        let valorAnterior = parseInt(quebra[0]);
        let ordenado = [true, true];

        // validações acrescente e decrescente
        const validacoes = [1, -1];

        validacoes.forEach((val, i) => {
            quebra.forEach((numero) => {
                numero = parseInt(numero);
                if (ordenado) {
                    if (!(numero === valorAnterior || numero === valorAnterior + val)) {
                        ordenado[i] = false;
                    } else {
                        valorAnterior = numero;
                    }
                }
            })
        })

        if (ordenado.indexOf(true) > -1) {
            console.log(`Input ${valor} -> Está ordenado`);
        } else {
            console.log(`Input ${valor} -> Não está ordenado`);
        }
    } else {
        console.log(`Input ${valor} -> Não é inteiro.`);
    }
}
valorOrdenado('12345678');
valorOrdenado(12345678);
valorOrdenado(1223455678);
valorOrdenado(876543210);
valorOrdenado(152456457);
valorOrdenado(12356789);
valorOrdenado(13579);
valorOrdenado(9765421);
valorOrdenado(123454321);
valorOrdenado(12222222);
valorOrdenado(2111111);
valorOrdenado(1599);