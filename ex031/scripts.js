// Funções de fabrica

const celular = {
   marcaCcelular : 'ASUS',
   tamanhoTela : {
      vertical : 155,
      horizontal : 75
   },
   capacidadeBateria: 5000,
   ligar : function() {
      console.log('Fazendo ligação..')
   }
}

function cirarCelular(marcaCcelular,tamanhoTela,capacidadeBateria){
   return {
      marcaCcelular,
      tamanhoTela,
      capacidadeBateria,
      ligar() {
         console.log('Fazendo ligação..')
      }
   }
}
   
const celular1 = cirarCelular('Zenfone',5.5,5000);
console.log(celular1);
