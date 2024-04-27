// Escreva uma função que usa 2 numero e retorna o maior entre eles.


let a = 16
let b = 22

if (a > b) {
   console.log(a)
} else {
   console.log(b)
}


let valorMaior = max(10,4);
console.log(valorMaior);


function max(numero1, numero2){
   if (numero1 > numero2)
      return numero1;
   else return numero2;
}



