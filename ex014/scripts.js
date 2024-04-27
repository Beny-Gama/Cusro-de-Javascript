//Operadores Lógicos
// No JS Existem 3 tipos de operadores logicos.


// and == (&&)
// Retorna TRUE se os dois operandos forem TRUE.

console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log("");

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let poderAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log(poderAplicar);


// or  == (||)
//Retorna TRUE se um dos operadores forem TRUE
console.log("");
console.log("");

console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log("");

let maiorDeIdade2 = false;
let possuiCarteiraDeTrabalho2 = true;
let poderAplicar2 = maiorDeIdade2 && possuiCarteiraDeTrabalho2;
console.log('pode aplicar: ', poderAplicar2);


// not == (!)
// 
console.log("");
console.log("");

let maiorDeIdade3 = false;
let possuiCarteiraDeTrabalho3 = false;
let poderAplicar3 = maiorDeIdade3 && possuiCarteiraDeTrabalho3;
console.log('pode aplicar: ', poderAplicar3);


let candidatoRecusado = !poderAplicar3;

console.log('Canditado recusado: ',candidatoRecusado);
