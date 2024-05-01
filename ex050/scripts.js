//Combinando um Array
const primeiro = [{id:1}];
const segundo = [4,5,6];
primeiro[0].id = 10;
// Combinar
const combinado = primeiro.concat(segundo);
console.log(combinado);

//dividir
const cortado = combinado.slice(1,3)
console.log(cortado)