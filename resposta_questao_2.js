const valorDuplicado = (array) => {
    const valoresDuplicados = [];

    if (Array.isArray(array)) {
        array.forEach(item => {
            let aparece = 0;
            array.forEach(val => {
                if (item === val) {
                    aparece++;
                }
            })
            if (aparece > 1 && valoresDuplicados.indexOf(item) < 0) {
                valoresDuplicados.push(item);
            }
        })

        console.log(valoresDuplicados);
    } else {
        console.log(`Input ${array} -> Não é array.`);
    }
}
valorDuplicado([4,5,44,98,4,5,6,7]);