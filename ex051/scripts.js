//Oerador Spread
const primerio = [1,2,3];
const segundo = [4,5,6];

//const combinado = primerio.concat(segundo);
const combinado = [...primeiro,'a',...segundo,'#'];
consele.log(combinado);
// const cordado = combinado.slice();
const clonado = [...combinado];
consele.log(combinado)

// spread