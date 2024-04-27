//Comparações Não Boleano

    // Falsy
        // indefinido   = underfined
        // nulo         = null
        // zero         = 0
        // falso        = false
        // streng Vazia = ''
        // Not a Nuber  = NaN

    // Truthy 

    let corPersolaizada = 'vermelho';
    let corPadrao = 'azul';
    let corPerfil = corPersolaizada || corPadrao

    console.log(corPerfil);


// O Operador OR lê a sentença lodo da esquerda para a direita, enquanto a primeira instância é declarada for TRUTHEY (verdadeira) ele será lida primeir