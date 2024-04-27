// fizzbuzz
// Divizivel por 3 = Fizz 
// Divizivel por 5 = Buzz
// Divizivel por 3 e 5 = FizzBuzz
// Não divisivel por 3 e 5 = estrada
// Não é numero = 'Não é numero'

const resultado = fizzBuzz(11);
console.log(resultado);

function fizzBuzz(entrada) {
   if (typeof entrada !== 'number')
      return 'Não é um número';
      if (entrada % 3 === 0 && entrada % 5 === 0)
      return 'fizzBuzz';
   if (entrada % 3 === 0)
      return "Fizz";
   if (entrada % 5 === 0)
      return 'Buzz';
   return entrada;
}