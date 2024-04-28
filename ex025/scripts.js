//REceber uma quantidade de valores para avalir 
// Função exibe se cada valor é par ou impar

exibirTipos(17)

// function exibirtipos(limete) {
//    let cont = -1
//    while (cont != limete){
//       cont++
//       if (cont % 2 === 0)
//           console.log(cont + " par")
//       else console.log( cont + " Impar")
//    }
// }

function exibirTipos(limite){
   for (let i = 0; i <= limite; i++) {
      if (i % 2 === 0)
         console.log(i,'PAR');
      else
         console.log(i,'IMPAR');
   }
}
