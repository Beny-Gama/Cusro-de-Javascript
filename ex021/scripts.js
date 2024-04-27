// Laço for..in / for-of

// Foi criados espesificamete para itegrar as propriedades de um objeto ou elementos de um array.

 const pessoa = {
    nome: 'Bernardo',
    idade: 25,
 };

 for (let chave in pessoa){
    console.log(chave, pessoa['nome']);
 }

 const cores = ['Vermenho','Azul','Verde']; 

 for (let indice in cores){
    console.log(indice, cores[indice])
 }

// for-of
for (let cor of cores){
    console.log(cor);
}