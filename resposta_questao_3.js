const sequenciaEnvelope = (sequencia) => {
    const validacao = {
        'cha': ['{', '}'],
        'par': ['(', ')'],
        'con': ['[', ']']
    }
    const procura = ['{', '}', '(', ')', '[', ']']

    let order = []
    let fechamentoExtra = false;
    if (typeof sequencia === 'string') {
        const quebra = sequencia.toString().split('');

        quebra.forEach((caracter, ind) => {
            if (procura.indexOf(caracter) >= 0) {
                Object.keys(validacao).forEach(val => {
                    if (validacao[val][0] === caracter) {
                        order.push({tipo: val, fechado: false})
                    }

                    if (validacao[val][1] === caracter) {
                        const reverse = order.reverse();

                        let firstItem = true;
                        reverse.forEach((item, i) => {
                            if (firstItem) {
                                if (item.tipo === val && !item.fechado) {
                                    reverse[i].fechado = true;
                                    firstItem = false;
                                }
                            }
                        })
                        if (firstItem) {
                            fechamentoExtra = true;
                        }
                        order = reverse.reverse();
                    }
                })
            }
        })

        if (fechamentoExtra) {
            console.log(`Input ${sequencia} -> Não é uma sequência válida.`);
        } else {
            const result = order.find(item => item.fechado === false);
            if (result) {
                console.log(`Input ${sequencia} -> Não é uma sequência válida.`);
            } else {
                console.log(`Input ${sequencia} -> é uma sequência válida.`);
            }
        }
    } else {
        console.log(`Input ${sequencia} -> Não é uma string.`);
    }
}
sequenciaEnvelope('{ [ ( ) ( ) { } [ ] ] { } } }')
sequenciaEnvelope('{ [ ( ) ( ) { } [ ] ] { } }')
sequenciaEnvelope('{ [ ( ( ) ] }');
sequenciaEnvelope('{ } [ ] ( )');
sequenciaEnvelope('( ( ) { } [ [ ] )');