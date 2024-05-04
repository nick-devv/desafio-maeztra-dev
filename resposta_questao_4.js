const anosTrabalhados = (pessoas) => {
    if (typeof pessoas === 'object') {
        const anos = {}
        pessoas.forEach(pessoa => {
            for (let i = pessoa[0]; i <= pessoa[1]; i++) {
                if (anos[i]) {
                    anos[i]++;
                } else {
                    anos[i] = 1;
                }
            }
        })
        let ordenado = [];
        for (var ano in anos) {
            ordenado.push([ano, anos[ano]]);
        }
        ordenado.sort(function(a, b) {
            return a[1] - b[1];
        }).reverse();

        const total = ordenado[0][1];

        const anosMaisTrabalhados = [];
        ordenado.forEach(item => {
            if (item[1] === total) {
                anosMaisTrabalhados.push(item[0]);
            }
        })
        anosMaisTrabalhados.reverse();

        let retorno = `Input ${JSON.stringify(pessoas)} -> Os anos mais trabalhados (${total}) foram: ` + anosMaisTrabalhados.join(', ');

        console.log(retorno);
    } else {
        console.log(`Input ${pessoas} -> Não é um objeto.`);
    }
}
anosTrabalhados([[1989,2024],[1970,2024],[1948,2013],[1967,2024],[1995,2024],[1993,2024],[1989,2024],[1997,2024],[2000,2024],[1996,2024],[1995,2024],[1980,2024],[1975,2024],[1986,2024]]);
