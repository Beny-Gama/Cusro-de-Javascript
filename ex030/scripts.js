// Criar função para mostrar os números primos

// Primos
// compostos

//Ex: 10, 11

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
   for(let numero = 2; numero <= limite; numero++){
      if (isPrime(numero)) console.log(numero);
   }

}

function isPrime(numero){
   for (let divisor = 2; divisor < numero; divisor++){
      if(numero % divisor === 0){
         return false;
      }
   }
   return true;
}