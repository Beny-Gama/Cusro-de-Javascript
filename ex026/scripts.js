//Encontre a string (mini-projeto - 6)
//Crie um método para ler propriedade de um objeto e exibir somente as propriedades do tipo strin que estão nesse pbjeto.

const filme = {
   titulo : 'Vingadores',
   ano : 2018,
   diretor : 'robin',
   personagem : 'Thor',
   temAtores: true
}

exibirPropriedade(filme);

function exibirPropriedade(obj){
   for (prop in obj)
      if (typeof obj[prop] === 'string')
         console.log(prop,obj[prop])
}