const possiveisOrganizacoes = (valor) => {
    if (Number.isInteger(valor)) {
        if (valor === 1) {
            console.log(`Input ${valor} -> É possível realizar 1 posicionamento.`);
        } else if (valor > 1) {
            let valorAnterior = 1;
            for (let i = 2; i <= valor; i++) {
                valorAnterior *= i;
            }

            console.log(`Input ${valor} -> É possível realizar ${valorAnterior} posicionamentos.`);
        } else {
            console.log(`Input ${valor} -> Não é possível realizar qualquer posicionamento.`);
        }
    } else {
        console.log(`Input ${valor} -> Não é inteiro.`);
    }
}
possiveisOrganizacoes(0);
possiveisOrganizacoes(1);
possiveisOrganizacoes(2);
possiveisOrganizacoes(3);
possiveisOrganizacoes(4);
possiveisOrganizacoes(5);
possiveisOrganizacoes(6);