//construtor de função


// camelCase
// function cirarCelular(marcaCcelular,tamanhoTela,capacidadeBateria){
//    return {
//       marcaCcelular,
//       tamanhoTela,
//       capacidadeBateria,
//       ligar() {
//          console.log('Fazendo ligação..')
//       }
//    }
// }

//Pascal Case - UmDoisTresQuatro / A primera letra também é maiuscula
// o metodo THIS é o metodo mais facil para referenciar um objeto 

function Celular(marcaCelular,tamanhoTela, capacidadeBateria){
   this.marcaCelular = marcaCelular,
   this.tamanhoTela = tamanhoTela,
   this.capacidadeBateria = capacidadeBateria,
   this.ligar = function(){
     console.log('Fazendo ligação...') 
   }
}

//Perceba que não é usado o metodo return. ele sa define as propriedade e metodos.

const celular = new Celular('asus',5.5, 5000);

console.log(celular);

//Qual é o melhor?
//Eles fazer azamente a mesma coisa
//Vai muita da sua preferencia
//
