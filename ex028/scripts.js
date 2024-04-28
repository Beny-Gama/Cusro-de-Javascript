// Exercicio Nota Escolar
// Obter a Média a partir de um array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const array = [70,60,90];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
   const nota = calcularMedia(notas);

   if (nota < 59) return 'F';
   if (nota < 69) return 'D';
   if (nota < 79) return 'C';
   if (nota < 89) return 'B';
   return 'A'
}

function calcularMedia(array) {
   let soma = 0;
   let cont = 0;
   for (let valor of array) {
      soma += valor;
      cont++
   }
   return soma / cont;
}