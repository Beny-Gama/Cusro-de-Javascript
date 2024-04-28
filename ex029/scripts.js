// Criar uma função que exite a quantidade de *
// que aquela linha possui
exibirArteriscos(10);

function exibirArteriscos(linhas) {
   let padrao = '';
   for (let linha = 1; linha <= linhas; linha++) {
      padrao += '*';
      console.log(padrao);
   }
}