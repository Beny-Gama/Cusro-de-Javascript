// Iqualdade de objetos (exercico)

function Endereco(rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep };

const endereco1 = new Endereco('a','b','c');
const endereco2 = new Endereco('a','b','c');

function seSaoIqais(endereco1, endereco2){
    // conparar se as propriedades São iquais. booleano

    return endereco1.rua === endereco2.rua &&
            endereco1.cidade === endereco2.cidade &&
            endereco1.cep === endereco2.cep
};

console.log(seSaoIqais(endereco1, endereco2));

function temEnderecoMemoiraIguais(endereco1, endereco2) {
    // comparando se a referencia do objeto aponta para o mesmo local na memória.
    return endereco1 === endereco2
};