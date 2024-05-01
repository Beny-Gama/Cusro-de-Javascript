//Montador de endereço (mini-projeto)
// Criar um objeto endereço que contem:
// Rua
// Cidade
// CEP
// exibirEndereço(emdereço)

const endereco = {
    Rua: 'Rua Pricesa Isabel',
    Cidade: 'Niterói',
    CEP: '11111',
};

function exibirEndereço(endereco){
    for(let chave in endereco) {
        console.log(chave + ' : ' + endereco[chave]);
    };
};

exibirEndereço(endereco);