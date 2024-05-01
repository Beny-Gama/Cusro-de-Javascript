// Arrow Functions

const marcas = [
    {id:1, nome:'a'},
    {id:1, nome:'a'}
];


console.log(marcas.find(function(marca) {
    return marca.nome === 'a';
}));


// exiete maneiras de dixar isso mais simples.
// Se ouver apenas um parametro vc pode colocar uma seta no lugar a função

console.log(marcas.find((marca) => {
    return marca.nome === 'a';
}));


// Se ouver apenas um parametro vc tambémm pode retirar os parenteses da função

console.log(marcas.find(marca => {
    return marca.nome === 'a';
}));


// se vc quiser deixar mais siples ainda é só tirar o return e os {}.

console.log(marcas.find(marca => marca.nome === 'a'));


// se não ouver aparametro e so sbistiturir por ().

console.log(marcas.find(() => nome === 'a'));